import React, {useState, useEffect} from 'react'

export default function BookModal({book}) {
    
    const [user, setUser] = useState([]);

    const getUser = async (email, password) => {
        try {
            const response = await fetch(`http://localhost:5000/getuser/${email}`)
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        //getUser("test@test.com", "Test@123");
        getUser(book.email, book.password)
    }, []);

    return (
        <div>
            <button type="button" className="btn btn-primary btn-lg mb-2 search-btn" data-toggle="modal" data-target={`#id${book.book_id}`}>View more details!</button>
            <div className="modal" id={`id${book.book_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className='modal-header'>
                            <h4 className='modal-title'>{book.title}</h4>
                        </div>
                        <div className='modal-body modal-body-align'>
                            <h5>Book</h5>
                            <p id='auth'><b>Author:</b> {book.author}</p>
                            <p id='course'><b>Course:</b> {book.courses}</p>
                            <p id='cost'><b>Price:</b> {book.price}$</p>
                            <p id='description'><b>Description:</b> {book.description}</p>
                        </div>
                        <div className='modal-body modal-body-align'>
                            <h5>Seller</h5>
                            <p id='name'><b>Student:</b> {user.name} | {user.college}</p>
                            <p id='year'><b>Classification:</b> {user.classification}, {user.major}</p>
                            <p id='phone'><b>Phone:</b> {user.phone}</p>
                            <p id='email'><b>Email:</b> {user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
