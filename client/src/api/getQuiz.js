import api from '../utils/api';
import { toast } from 'react-toastify';

const getQuiz = async (
  language,
  limit,
  setCurrentQuiz,
  setHideStartQuiz,
  hideStartQuiz
) => {
  try {
    const { data } = await api(`/api/questions/${language}/${limit}`);
    setCurrentQuiz(data);
    setHideStartQuiz(!hideStartQuiz);
  } catch (error) {
    toast.error(error);
  }
};

export default getQuiz;
