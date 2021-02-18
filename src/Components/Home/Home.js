import React from 'react';
import './home.css'

const Home = () =>{
    return(
        <>
            <div className="home-container">
                {/* <p>Hello!!I am Munish Kumar Garg</p> */}
                <h3>WELCOME TO THE QUIZ APP</h3>
                <br/>
                <h5>Join the Quiz</h5>
                <form action="">
                    <div className="container">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Quiz Code</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the quiz code here"/>
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <hr/>
                            
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Home;