import React, {useState, useEffect} from 'react'
import BookItem from './BookItem'

export default function BookRow({books}) {

    return (
        <div class='mb-4'>
            <div class="row">
                {books.map(book => (
                    <BookItem key = {book.book_id} book ={book}/>
                ))}
            </div>
        </div>
    )
}
