import axios from "axios";
import { toast } from "react-toastify";

class ApiService {
  static BASE_URL = "http://localhost:8080";

  static getHeader() {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  static async registerUser(data) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/api/auth/signup`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      toast.error("Error during registration:", error);
      throw error;
    }
  }

  static async loginUser(data) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/api/auth/login`,
        data
      );
      return response.data;
    } catch (error) {
      toast.error("Error during login:", error);
      throw error;
    }
  }

  static async getAllProduct() {
    try {
      const response = await axios.get(`${this.BASE_URL}/api/products/get`);
      return response.data;
    } catch (error) {
      toast.error("Error during getAllProduct:", error);
      throw error;
    }
  }

  static async sendMessage(data){
    try {
      const response = await axios.post(
        `${this.BASE_URL}/api/contact/send`,
        data
      );
      return response.data;
    } catch (error) {
      toast.error("Error during contact:", error);
      throw error;
    }
  }

  static async getUser(token) {
    try {
      const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
      const response = await axios.get(`${this.BASE_URL}/api/users/me`, {
        headers,
      });
      return response.data;
    } catch (error) {
      toast.error("Error during fetchUser:", error);
      throw error;
    }
  }

  static async addProduct(data) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/api/products/create`,
        data,
        {
          headers: {
            ...this.getHeader(),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      toast.error("Error during addProduct:", error);
      throw error;
    }
  }
}

export default ApiService;
