import { useState } from "react";
import { toast } from "react-toastify";
import ApiService from "../service/ApiService";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const reset = () => {
    setFormData({
      name: "",
      category: "",
      price: "",
      description: "",
    });
    setImage(null);
    setImagePreview(null);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Image input change handler
  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);

      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }

      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image.");
      return;
    }
    const data = new FormData();
    data.append("name", formData.name);
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("image", image);
    const response = await ApiService.addProduct(data);
    toast.success(response);
    reset();
  };

  return (
    <div className="bg-[#f8D442] w-full h-full  flex justify-center mx-auto">
      <div className="mt-20 w-auto mb-5 sm:w-[475px] h-auto bg-white border-none rounded-md shadow-md">
        <h1 className="text-center text-2xl font-bold mt-6">Add New Product</h1>
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-md mx-auto p-4 bg-white"
        >
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={formData.name}
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              name="category"
              onChange={onChangeHandler}
              value={formData.category}
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              name="price"
              onChange={onChangeHandler}
              value={formData.price}
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              onChange={onChangeHandler}
              value={formData.description}
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="profile">Product Image</label>
            <div
              className="relative flex items-center justify-center border
            border-dashed border-gray-400 rounded-md p-6 cursor-pointer overflow-hidden
            w-full h-40  "
            >
              <input
                onChange={onImageChange}
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Uploaded Preview"
                  className="w-full h-full inset-0 absolute object-cover rounded-md"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 bg-[#FEAF00] text-white w-full max-w-md mx-auto py-2 px-2 rounded-md cursor-pointer flex items-center justify-center"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
