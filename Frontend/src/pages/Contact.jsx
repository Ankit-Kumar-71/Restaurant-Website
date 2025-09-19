import { useState } from "react";
import ApiService from "../service/ApiService";
import { toast } from "react-toastify";
import { Phone, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const reset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      setLoading(true);
      const response = await ApiService.sendMessage(formData);
      toast.success(response);
      reset();
    } catch (error) {
      toast.error("Failed to send message", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8D442] w-full h-full flex justify-center mx-auto">
      <div className="mt-25 w-auto mb-5 sm:w-[475px] h-auto bg-white border-none rounded-md shadow-md">
        <h2 className="text-center text-2xl font-bold mt-6">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto p-4 bg-white"
        >
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="firstName">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={formData.name}
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={onChangeHandler}
              value={formData.email}
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={onChangeHandler}
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-5 bg-[#FEAF00] text-white w-full max-w-md mx-auto py-2 px-2 rounded-md cursor-pointer flex items-center justify-center"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mb-5 text-center">
          <p className="text-lg">Or reach me directly:</p>
          <div className="flex justify-center space-x-8 mt-4">
            <a
              href="tel:+918882291407"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
            <a
              href="mailto:ankitkumar20224@gmail.com"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a
              href="https://www.linkedin.com/in/ankitkumar07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>

            <a
              href="https://github.com/Ankit-Kumar-71"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-black font-medium transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
