
import { toast } from 'react-toastify';

// utils
import api from '../utils/api';

const loginUser = async (setUserToken, formData) => {

  try {
    const { data } = await api.post('/auth', formData);
    localStorage.setItem('token', data.token);
    localStorage.setItem('userProfile', JSON.stringify(data.userProfile));
    setUserToken(data.token);

   
  } catch (error) {
    toast(error);
  }
};

export default loginUser;
