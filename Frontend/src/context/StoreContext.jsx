import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import ApiService from "../service/ApiService";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  // Lazy initialize user from localStorage only once on first render
  const [auth, setAuth] = useState(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    return {
      user: storedUser ? JSON.parse(storedUser) : null,
      token: token || null,
      isAuthenticated: !!token,
    };
  });

  // Sync authState to localStorage whenever it changes
  useEffect(() => {
    if (auth.user) {
      localStorage.setItem("user", JSON.stringify(auth.user));
    } else {
      localStorage.removeItem("user");
    }

    if (auth.token) {
      localStorage.setItem("token", auth.token);
    } else {
      localStorage.removeItem("token");
    }
  }, [auth]);

  // Get All Product
  useEffect(() => {
    const fetchProduct = async () => {
      const products = await ApiService.getAllProduct();
      setProducts(products);
    };
    fetchProduct();
  }, []);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const updateQuantity = (productId, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(newQuantity, 1) }
          : item
      )
    );
  };

  const login = async (token) => {
    const user = await ApiService.getUser(token);
    setAuth({ user, token, isAuthenticated: true });
  };

  const logout = () => {
    setAuth({ user: null, token: null, isAuthenticated: false });
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
    toast.success("product removed from cart");
  };

  const contextvalue = {
    products,
    cart,
    addToCart,
    removeFromCart,
    cartCount,
    grandTotal,
    auth,
    login,
    logout,
    updateQuantity,
  };

  return (
    <StoreContext.Provider value={contextvalue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
