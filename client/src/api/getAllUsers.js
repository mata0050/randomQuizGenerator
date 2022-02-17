import api from '../utils/api';
import { toast } from 'react-toastify';

const getAllUsers = async (setAllUsers) => {
  try {
    const { data } = await api(`/api/quiz/users`);
    setAllUsers(data);
  } catch (error) {
    toast.error(error);
  }
};

export default getAllUsers;
