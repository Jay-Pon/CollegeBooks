import React from 'react'
import {Link} from 'react-router-dom'
import college_img from './images/college/5853.png'

function Home() {

    // const test = async () => {
    //     console.log("SUCCESS")
    // }

    function test() {
        console.log("SUCCESS")
    }

    return (
        <div className='fade-in'>
                <div className='mt-5 home-items'>
                    <h1 class='display-4 mt-5'>CollegeConnect</h1>
                    <p className='lead'>A book-selling platform made <i>by</i> college students <i>for</i> college students</p>
                    <hr className='my-4' />
                    <div className='home-text'>
                        <p>
                            As students, we know how expensive it is to be enrolled in college. On top of tuition fees, dorm costs, a meal plan, you’re also expected to pay for ‘required’ books worth hundreds of dollars for the class. The books you pay for should be worth the money you spend, and more importantly, be something you actually use. Is that an unreasonable demand? 
                            We at CollegeConnect certainly don’t think so. CollegeConnect makes sure you never spend more than you should, to get the academic success you deserve in all your courses. We connect you to students who have taken the courses you plan to take and know first-hand just how useful their books were to create your successful academic experience. 
                        </p>
                        <p>
                            If you want to help your college community by selling your textbook to a fellow student, then you can get 
                            started by clicking the button below!
                        </p>
                    </div>
                    <Link to='/addbook'>
                        <button type='button' className='btn btn-lg mt-4 pr-5 pl-5 get-started-btn' onClick={test}>Get started!</button>
                    </Link>
                </div>
                <div className='img-container'>
                    <img src={college_img} className='college-bg' />
                </div>
        </div>
    )
}

export default Home;