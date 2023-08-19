import { authAPI } from "../../api/api";

const logoutUser = async (values) => {
  try {
    const response = await authAPI.logout();

    console.log("Response Status:", response.status);
    const { token } = response.data;
    localStorage.setItem("token", token);
    return true;
  } catch (error) {
    console.error(error);
    console.log("Error Response Status:", error.response.status);
    if (error.response && error.response.status === 401) {
      throw new Error("Your email or password does not match");
    }
    throw new Error("An error occurred while logging out");
  }
};

export default logoutUser;
