import React from 'react'
import {Link} from 'react-router-dom'

export default function FinalStep(props) {

    const submitBook = async () => {
        const title = props.state.title;
        const author = props.state.author;
        const price = props.state.price;
        const courses = props.state.course;
        const description = props.state.description;
        const college = props.state.college;
        const email = props.state.email;
        const password = props.state.password;

        const body_book = {college, title, author, price, courses, description, email, password};
        console.log("HERE", body_book);
        const response_book = await fetch('http://localhost:5000/addbook', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body_book)
        })
        const data = await response_book.json();
        console.log("TSET", data)
    }

    const submitUser = async () => {
        try {
            const name = props.state.name;
            const college = props.state.college;
            const email = props.state.email;
            const phone = props.state.phone;
            const password = props.state.password;
            const year = props.state.year;
            const major = props.state.major;

            const body = {name, college, email, phone, password, year, major};
            
            console.log("HERE", body);
            console.log("SUCCESSFULLY ADDED USER")

            const response_user = await fetch('http://localhost:5000/adduser', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    const masterSubmit = async () => {
        submitBook();
        submitUser();
    }

    return (
        <div className='container view-books mt-5 w3-animate-right'>
            <h3 className='pt-5 pl-5 pr-5'>Confirm these details</h3>
            <div className='view-text mt-5'>
                <div class='input-group mb-4'>
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="">First and last name</span>
                        </div>
                        <input className='form-control' name="name" value={props.getState("name", "")} readonly/>
                </div>        
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">College</span>
                    </div>
                    <input className='form-control' name="college" value={props.getState("college", "")} readonly/>
                </div>
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Email</span>
                    </div>
                    <input className='form-control' type='email' name="email" value={props.getState("email", "")} readonly/>
                </div>
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Phone</span>
                    </div>
                    <input className='form-control' type='tel' name="phone" value={props.getState("phone", "")} readonly/>
                </div>
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Password</span>
                    </div>
                    <input className='form-control' type='text' name="password" value={props.getState("password", "")} readonly/>
                </div>
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Major</span>
                    </div>
                    <input className='form-control' type='text' name="major" value={props.getState("major", "")} readonly/>
                </div>
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Classification</span>
                    </div>
                    <input className='form-control' name="year" value={props.getState("year", "")} list='year' readonly/>
                </div>
                <div className='input-group mb-4'>
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
            </div>
            <button class='btn btn-lg mr-5 search-btn mb-5 mt-5' onClick={props.prev}>Previous</button>
            <Link to='/home'>
                <button className='btn btn-lg search-btn mt-5 mb-5' onClick={masterSubmit}>Confirm these details!</button>
            </Link>
        </div>
    )
}
