import { toast } from 'react-toastify';

// utils
import api from '../utils/api';

const signUpUser = async (setUserToken, user) => {
  try {
    const { data } = await api.post('/register', user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('userProfile', JSON.stringify(data.userProfile));
    setUserToken(data.token);
  } catch (error) {
    toast.error(error);
  }
};

export default signUpUser;
