import React from 'react'

export default function BookSearch() {

    return (
        <div>
            <div class="form-group mx-sm-3 mb-2">
                <input type="text" class="form-control" id="inputPassword2" placeholder="Enter your course! e.g. CSCE 121"></input>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Search</button>
        </div>
    )
}
