import React from 'react'
import './contact.css'
export default function Contactus() {
    return (
        <div className='container-fluid contact'>
            <div className='container contactContainer'>
                <div className='content'>
                    <h2>Contact US</h2>
                </div>
               
                <div className='form'>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                            <label for="floatingTextarea2">Message</label>
                        </div>
                        <button type="submit" class="btninMenucss btn btn-warning">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
