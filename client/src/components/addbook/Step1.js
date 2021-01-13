import React, {useState, useEffect, useRef} from 'react'

export default function Step1(props) {

    const [colleges, setColleges] = useState([]);

    const getColleges = async () => {
        console.log("TEST")
        try {
            const data = await fetch('http://localhost:5000/colleges')
            const json_college = await data.json();
            setColleges(json_college);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getColleges();
    }, [])

    return (
        <div className='container view-books mt-5 w3-animate-right'>
            <h3 className='pt-5 pl-5 pr-5'>We need some basic details about you</h3>
            <h4>This makes it easier for others to connect with  you!</h4>
            <p>
                <div class='input-group mb-4 mt-5'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">First and last name</span>
                    </div>
                    <input className='form-control' name="name" value={props.getState("name", "")} onChange={props.handleChange} placeholder='Saiki Kusuo'/>
                </div>
            </p>
            <p>
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">College</span>
                    </div>
                <input className='form-control' name="college" value={props.getState("college", "")} list='college' onChange={props.handleChange} placeholder='Texas A&M University'/>
                    <datalist id="college">
                        {colleges.map(school => (                            
                            <option value = {school.college}/>
                        ))}
                    </datalist>
                </div>
            </p>
            <p>
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Email</span>
                    </div>
                    <input className='form-control' type='email' name="email" value={props.getState("email", "")} onChange={props.handleChange} placeholder='example123@university.edu'/>
                </div>
            </p>
            <p>
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Phone</span>
                    </div>
                    <input className='form-control' type='tel' name="phone" value={props.getState("phone", "")} onChange={props.handleChange} placeholder='462-236-2354'/>
                </div>
            </p>
            <p>
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Password</span>
                    </div>
                    <input className='form-control' type='password' name="password" value={props.getState("password", "")} onChange={props.handleChange}/>
                </div>
            </p>
            <p>
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Major</span>
                    </div>
                    <input className='form-control' type='text' name="major" value={props.getState("major", "")} onChange={props.handleChange} placeholder='Computer Science'/>
                </div>
            </p>
            <p>
                <div class='input-group mb-4'>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Classification</span>
                    </div>
                    <input className='form-control' name="year" value={props.getState("year", "")} list='year' onChange={props.handleChange} placeholder='Freshman'/>
                    <datalist id='year'>
                        <option value='Freshman' />
                        <option value='Sophomore' />
                        <option value='Junior' />
                        <option value='Senior' />
                    </datalist>
                </div>
            </p>
            <p>
                <button class='btn btn-lg search-btn mb-5 mt-5' disabled={false} onClick={props.next}>
                    Next
                </button>
            </p>
        </div>
    )
}
