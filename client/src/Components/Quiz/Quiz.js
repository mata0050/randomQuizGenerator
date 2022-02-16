import React from "react";
import './Quiz.css';

function Quiz() {
  return (
    // <div className="container">
    //   <div>
    //     <div class="row justify-content-evenly">
    //       <div class="col-4">option A</div>
    //       <div class="col-4">option B</div>
    //     </div>
    //     <div class="row justify-content-evenly">
    //       <div class="col-4">option C</div>
    //       <div class="col-4">option D</div>
    //     </div>
    //   </div>
    // </div>
    <div class="container">
  <div class="row row-cols-2" >
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
  );
}

export default Quiz;
