import React from 'react'
import {Link} from 'react-router-dom'

export default function ExistingUser() {
    return (
        <div class='container fade-in2 center'>
            <h2 class='mt-5'>Are you an existing user?</h2>
            <Link to='/mybooks'>
                <button class='btn btn-lg search-btn mr-5 mt-5'>Yes, I've already posted a book</button>
            </Link>
            <Link to='/addbook'>
                <button class='btn btn-lg search-btn mt-5'>No, I want to post a book</button>
            </Link>
        </div>
    )
}
