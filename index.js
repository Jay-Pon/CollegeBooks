const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')

const PORT = 5000 || process.env.PORT

app.use(cors())
app.use(express.json())

//ROUTES

//adding a book to the table
app.post('/addbook', async (req, res) => {
    try {
        const {college, title, author, price, courses, description, email, password} = req.body;
        const book = await pool.query("INSERT INTO books_available (college, title, author, price, courses, description, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [college, title, author, price, courses, description, email, password])
        res.json(book)
    } catch (error) {
        console.error(error.message);
    }
})

//deleting a book from the table
app.delete('/deletebook/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const delete_book = await pool.query("DELETE FROM books_available WHERE book_id = $1", [id]);
        res.json(delete_book);
    } catch (error) {
        console.error(error.message);
    }
})

//updating a book in the table
app.put('/editbook/:book_id', async (req, res) => {
    try {
        const {id} = req.params;
        const {college, title, author, price, courses, description, email, password} = req.body;
        const book = await pool.query("UPDATE books_available SET college = $1, title = $2, author = $3, price = $4, courses = $5, description = $6, email = $7, password = $8 WHERE book_id = $9", [college, title, author, price, courses, description, email, password, id])
        res.json(book)
    } catch (error) {
        console.error(error.message);
    }
})

//getting a book from the table
app.get('/getbook/:book_id', async (req, res) => {
    try {
        const {book_id} = req.params;
        const book = await pool.query("SELECT * FROM books_available WHERE book_id = $1", [book_id])
        res.json(book.rows[0])
    } catch (error) {
        console.error(error.message);
    }
})

//geting all the books from the table
app.get('/getbooks', async (req, res) => {
    try {
        const books = await pool.query("SELECT * FROM books_available");
        res.json(books.rows)
    } catch (error) {
        console.error(error.message);
    }
})

//getting books based on certain criteria from the table
app.get('/getbooks/:college/:course', async (req, res) => {
    try {
        const course = req.params.course;
        const college = req.params.college;
        const data = await pool.query("SELECT * FROM books_available WHERE courses = $1 AND college = $2", [course, college]);
        res.json(data.rows);
    } catch (error) {;
        console.error(error.message);
    }
})

//get colleges
app.get('/colleges', async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM colleges")
        res.json(data.rows)
    } catch (error) {
        console.error(error.message);
    }
})

//adding a user
app.post('/adduser', async (req, res) => {
    try {
        const {name, college, email, phone, password, year, major} = req.body;
        const user = await pool.query("INSERT INTO users_present (name, college, email, phone, password, classification, major) VALUES ($1, $2, $3, $4, $5, $6, $7)", [name, college, email, phone, password, year, major])
        res.json(user);
    } catch (error) {
        console.error(error.message);
    }
})

//get a user
app.get('/getuser/:email', async (req, res) => {
    try {
        const {email} = req.params;
        const user = await pool.query("SELECT * FROM users_present WHERE email = $1", [email]);
        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//get user's books
app.get('/getmybooks/:email', async (req, res) => {
    try {
        const {email} = req.params;
        const books = await pool.query("SELECT * FROM books_available WHERE email = $1", [email]);
        res.json(books.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//validating login
app.get('/login/:email/:password', async (req, res) => {
    try {
        const email = req.params.email;
        const password = req.params.password;
        const response = await pool.query("SELECT COUNT(*) FROM users_present WHERE email = $1 AND password = $2", [email, password])
        res.json(Number(response.rows[0].count));
    } catch (error) {
        console.error(error.message);
    }
})


app.listen(PORT, '0.0.0.0', () => {
    console.log("SUCCESSFULLY LISTENING")
});