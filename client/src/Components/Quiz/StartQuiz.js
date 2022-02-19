import React, { useState } from 'react';

import './Quiz.css';

// api call
import getQuiz from '../../api/getQuiz';

function StartQuiz({ setCurrentQuiz, setHideStartQuiz, hideStartQuiz }) {
  const [formData, setFormData] = useState({
    limit: '',
    language: '',
  });

  const { limit, language } = formData;
  

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    getQuiz(language, limit, setCurrentQuiz, setHideStartQuiz, hideStartQuiz);
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
            <option value='C++'>C++</option>
            <option value='Linux'>Linux</option>
            <option value='Bash'>Bash</option>
            <option value='Docker'>Docker</option>
            <option value='SQL'>SQL</option>
            <option value='CMS'>CMS</option>
            <option value='Code'>Code</option>
            <option value='DevOps'>DevOps</option>
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
