import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Quiz.css';

// utils
import api from '../../utils/api';

function StartQuiz({ setCurrentQuiz, setHideStartQuiz, hideStartQuiz }) {
  const [formData, setFormData] = useState({
    limit: '',
    language: '',
  });

  const { limit, language } = formData;
  const [redirect, setRedirect] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api(`/api/questions/${language}/${limit}`);
      setCurrentQuiz(data);
      setHideStartQuiz(!hideStartQuiz);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='quiz quiz-small'>
      <form onSubmit={onSubmit}>
        <h2 style={{ marginBottom: '2rem' }}>Let's start quiz</h2>
        <div className='mb-3'>
          <label className='form-label' for='noOfQuestions'>
            Number of Questions
          </label>
          <input
            type='number'
            name='limit'
            className='form-control'
            value={limit}
            min={1}
            max={8}
            style={{ width: '400px' }}
            onChange={onChange}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label' for='language'>
            Select language
          </label>
          <select
            className='form-select'
            name='language'
            id='language'
            value={language}
            style={{ width: '400px' }}
            onChange={onChange}
          >
            {' '}
            <option value=''></option>
            <option value='Python'>Python</option>
            <option value='Java'>Java</option>
            <option value='C++'>c++</option>
          </select>
        </div>
        <div className='mb-3'>
          <label className='form-label' for='difficulty'>
            Difficulty
          </label>
          <select
            className='form-select'
            name='difficulty'
            id='difficulty'
            style={{ width: '400px' }}
          >
            <option value='basic'>Basic</option>
            <option value='intermediate'>Intermediate</option>
            <option value='advance'>Advance</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary start-btn'>
          start
        </button>
      </form>
    </section>
  );
}

export default StartQuiz;