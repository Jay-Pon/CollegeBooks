import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

export default function ExistingFinal(props) {
    
    const {url, path} = useRouteMatch();

    const submitBook = async (college, email, password) => {
        try {
            const title = props.state.title;
            const author = props.state.author;
            const price = props.state.price;
            const courses = props.state.course;
            const description = props.state.description;

            const body_book = {college, title, author, price, courses, description, email, password};
            console.log("HERE", body_book);
            const response_book = await fetch('http://localhost:5000/addbook', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body_book)
            })
            const data = await response_book.json();
        } catch (error) {
            console.error(error.message);
        }
    }
    
    const getUser = async () => {
        try {
            const response = await fetch(`http://localhost:5000/getuser/${url.split("/")[2]}`)
            const data = await response.json();
            const college = data.college;
            const email = data.email;
            const password = data.password;
            submitBook(college, email, password);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
            <div className='container view-books mt-5 w3-animate-right'>
                <h3 className='pt-5 pl-5 pr-5'>Confirm these details</h3>
                <div className='input-group mb-4 mt-5'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Title</span>
                    </div>
                    <input class='form-control' name="title" value={props.getState("title", "")} readonly/>
                </div>
                <div className='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Author</span>
                    </div>
                    <input class='form-control' name="author" value={props.getState("author", "")} readonly/>
                </div>
                <div className='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Course</span>
                    </div>
                    <input class='form-control' name="course" value={props.getState("course", "")} readonly/>
                </div>
                <div className='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Description</span>
                    </div>
                    <textarea type='text' class='form-control' name="description" value={props.getState("description", "")} readonly/>
                </div>
                <div className='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Price (USD)</span>
                    </div>
                    <input type='number' class='form-control' min='1' step='any' name="price" value={props.getState("price", "")} readonly/>
                </div> 
                <button class='btn btn-lg mr-5 search-btn mb-5 mt-5' onClick={props.prev}>Previous</button>
                <Link to='/home'>
                    <button className='btn btn-lg search-btn mt-5 mb-5' onClick={getUser}>Confirm these details!</button>
                </Link>
            </div>
    )
}
