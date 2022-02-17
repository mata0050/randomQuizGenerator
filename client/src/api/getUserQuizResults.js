import api from '../utils/api';
import { toast } from 'react-toastify';

export const getUserQuizResults = async (setResults) => {
  try {
    const user_id = JSON.parse(localStorage.getItem('userProfile')).id;
    const { data } = await api(`/api/quiz/${user_id}`);
    setResults(data);
  } catch (error) {
    toast.error(error);
  }
};

export const getAllUserQuizResults = async (setAllResults) => {
  try {
    console.log('all results');
    const { data } = await api(`/api/quiz`);
    setAllResults(data);
  } catch (error) {
    toast.error(error);
  }
};
