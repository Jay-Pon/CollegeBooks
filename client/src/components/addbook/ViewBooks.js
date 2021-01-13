import React, {useEffect, useState} from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import bookimg from './book.jpg'

export default function ViewBooks() {

    const {url, path} = useRouteMatch();
    const [mybooks, setMyBooks] = useState([]);

    const getMyBooks = async (email) => {
        try {
            console.log("URL", `http://localhost:5000/getmybooks/${email}`);
            const response = await fetch(`http://localhost:5000/getmybooks/${email}`);
            const data = await response.json();
            console.log("DATA", data);
            setMyBooks(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    const deleteBook = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/deletebook/${id}`, {
                method: "DELETE"
            });
            const data = response.json();
            console.log("I DELETED A BOOK")
            getMyBooks(url.split("/")[2])
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getMyBooks(url.split("/")[2]);
    }, [])

    return (
        <div className='container'>
            <h1 class='mt-5'>Here are the books you have currently posted</h1>
            <Link to={`/addexistingbook/${url.split("/")[2]}`}>
                <button class='btn btn-lg search-btn mt-5'>Add a new book</button>
            </Link>
            <div class='mt-5'>
            <div class='mb-4'>
            <div class="row">
                {mybooks.map(book => (
                    <div class="col-4 mb-4">
                    <div className="card book"> 
                        <img class="card-img-top img-card" src={bookimg} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{book.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{book.author}</h6>
                            <div><button class='btn btn-lg delete-btn' onClick={e => deleteBook(book.book_id)}>Delete</button></div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
            </div>
        </div>
    )
}