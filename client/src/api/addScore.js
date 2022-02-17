import api from '../utils/api';

// add Score
const addScore = async (currentQuiz, score, total_questions) => {
  const scoreUser = {
    name: currentQuiz[0].language,
    user_id: JSON.parse(localStorage.getItem('userProfile')).id,
    score: score,
    total_questions: total_questions,
  };
  try {
    const { data } = await api.post('/api/quiz', scoreUser);
    console.log(scoreUser);
  } catch (error) {
    console.log(error);
  }
};

export default addScore;
