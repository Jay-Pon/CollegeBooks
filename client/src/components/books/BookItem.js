import React from 'react'
import {Link} from 'react-router-dom'
import bookimg from './book.jpg'
import BookModal from './BookModal';

export default function BookItem({book}) {
    
    const title = book.title;
    const author = book.author;
    const price = book.price;
    const course = book.courses;
    const id = book.book_id;

    return (
        <div class="col-4 mb-4">
            <div className="card book"> 
                <img class="card-img-top img-card" src={bookimg} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{author}</h6>
                    <p class="card-text">{course}</p>
                    <div><BookModal book = {book} /></div>
                </div>
            </div>
        </div>
    )
}
