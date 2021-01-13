import React from 'react'

export default function Step2(props) {
    return (
        <div className='container view-books mt-5 w3-animate-right'>
            <h3 className='pt-5'>Now we need some details about your book!</h3>
            <h4 className='pl-5 pr-5'>Be honest with the description and reasonable with the price, because 
                this book will help someone on your campus!
            </h4>
            <p>
                <div className='input-group mb-4 mt-5'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Title</span>
                    </div>
                    <input class='form-control' name="title" value={props.getState("title", "")} onChange={props.handleChange} placeholder='Intro to Linear Algebra'/>
                </div>
            </p>
            <p>
                <div className='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Author</span>
                    </div>
                    <input class='form-control' name="author" value={props.getState("author", "")} onChange={props.handleChange} placeholder='John Stewart'/>
                </div>
            </p>
            <p>
                <div className='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Course</span>
                    </div>
                    <input class='form-control' name="course" value={props.getState("course", "")} onChange={props.handleChange} placeholder='MATH 152'/>
                </div>
            </p>
            <p>
                <div className='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Description</span>
                    </div>
                    <textarea type='text' class='form-control' name="description" value={props.getState("description", "")} onChange={props.handleChange} placeholder='This book had 
                    a lot of practice problems, so it was really helpful to prepare for quizzes and tests.'/>
                </div>
            </p>
            <p>
                <div className='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Price (USD)</span>
                    </div>
                    <input type='number' class='form-control' min='1' step='any' name="price" value={props.getState("price", "")} onChange={props.handleChange} placeholder='50'/>
                </div> 
            </p>
            <p>
                <button class='btn btn-lg mr-5 search-btn mb-5 mt-5' onClick={props.prev}>Previous</button>
                <button class='btn btn-lg mr-5 search-btn mb-5 mt-5' onClick={props.next}>Next</button>
            </p>
        </div>
    )
}
