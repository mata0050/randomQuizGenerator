import React from "react";
import './User.css';

function User() {
  return (
    <section className="quiz quiz-small">
      <form>
        <h2 style={{ marginBottom: "2rem" }}>Let's start quiz</h2>
        <div className="mb-3">
          <label  className="form-label" for="noOfQuestions">Number of Questions</label>
          <input
            type="number"
            name="amount"
            className="form-control"
            min={1}
            max={25}
            style={{ width: "400px" }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="language">Select language</label>
          <select
            className="form-select"
            name="language"
            id="language"
            style={{ width: "400px" }}
          >
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="c++">c++</option>
          </select>
        </div>
        <div className="mb-3">
          <label  className="form-label" for="difficulty">Difficulty</label>
          <select
            className="form-select"
            name="difficulty"
            id="difficulty"
            style={{ width: "400px" }}
          >
            <option value="basic">Basic</option>
            <option value="intermediate">Intermediate</option>
            <option value="advance">Advance</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary start-btn">
        start
        </button>
      </form>
    </section>
  );
}

export default User;
