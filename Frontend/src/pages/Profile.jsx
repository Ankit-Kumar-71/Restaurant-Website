import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext"; 
import { toast } from "react-toastify";

const Profile = () => {
  const { auth, logout } = useContext(StoreContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const handleAddProduct = () => {
    navigate("/add-product"); 
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center gap-4">
          <img
            src={
              auth.user?.image
                ? `http://localhost:8080/api/images/${auth.user.image}`
                : "/default-avatar.png"
            }
            alt="User"
            className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 shadow"
          />

          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">
              {auth.user?.name}
            </h2>
            <p className="text-gray-600">{auth.user?.email}</p>
            <p className="text-sm font-medium text-yellow-600 mt-1">
              {auth.user?.role}
            </p>
          </div>

          <div className="w-full flex flex-col gap-3 mt-6">
            {auth.user?.role === "ROLE_ADMIN" && (
              <button
                onClick={handleAddProduct}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold"
              >
                Add Product
              </button>
            )}

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

  

