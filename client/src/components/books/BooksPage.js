import React, {useState, useEffect, useRef} from 'react'
import BookRow from './BookRow'

export default function BooksPage() {
    
    const [books, setBooks] = useState([]);
    const [colleges, setColleges] = useState([]);
    const course = useRef()
    const college = useRef()
    const testCollege = useRef()

    const getBooks = async () => {
        try {
            const response = await fetch('http://localhost:5000/getbooks')
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getColleges = async () => {
        try {
            const data = await fetch('http://localhost:5000/colleges')
            const json_college = await data.json();
            setColleges(json_college);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getSomeBooks = async () => {
        try {
            const response = await fetch(`http://localhost:5000/getbooks/${college.current.value}/${course.current.value}`)
            const data = await response.json();
            setBooks(data);
            // window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getBooks();
        getColleges();
    }, [])

    const test = ['a', 'b'];

    return (
        <div>
            <div class="container mt-5">
                <div>
                    <div class="form-group mx-sm-3 mb-2">
                    <input ref = {college} class = 'form-control mb-3' type='text' list='data' placeholder='Select your college! e.g. Texas A&M University'/>
                        <datalist id="data">
                        {colleges.map(school => (                            
                            <option value = {school.college}/>
                        ))}
                        </datalist>

                    <input ref = {course} type="text" class="form-control mb-3" placeholder="Enter your course! e.g. CSCE 121"></input>
                    </div>
                    <button type="button" class="btn btn-primary btn-lg mb-2 search-btn" onClick={e => getSomeBooks(college, course)}>Search</button>
                    <button type="button" class="btn btn-primary btn-lg mb-2 ml-4 search-btn" onClick={e => getBooks()}>Show All</button>
                </div>
                <h4 class='mt-5 mb-5 result-number'>{books.length} results</h4>
                <BookRow books = {books}/>
            </div>
        </div>
    )
}