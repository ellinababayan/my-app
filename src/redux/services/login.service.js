import axios from 'axios';

const loginUser = async (values) => {
  try {
    const response = await axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, values);
    const { token } = response.data;
    localStorage.setItem('token', token);
    return true;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
      throw new Error('Your email or password does not match');
    }
    throw new Error('An error occurred while logging in');
  }
};

export default loginUser;