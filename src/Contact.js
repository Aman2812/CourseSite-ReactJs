import React, { useState } from 'react';

const Contact = () => {
    const [data,setdata] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setdata((preVal) =>{
            return {
                ...preVal,
                [name] : value,
            };
        });
    };

    const abc = (e) => {
        e.preventDefault();
        alert(
        `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
        )

    }
    return (
        <div>
        <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        </div>
            <div className="col-md-6  col-10  mx-auto">
        <form onSubmit={abc}>
  <div class="form-group">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
    placeholder="Enter your name"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Phone No</label>
    <input type="number" 
    class="form-control" 
    id="exampleFormControlInput1" 
    name="phone"
    value={data.phone}
    onChange={InputEvent}
    placeholder="Enter your number"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" 
    class="form-control" 
    id="exampleFormControlInput1" 
    name="email"
    value={data.email}
    onChange={InputEvent}
    placeholder="name@example.com"/>
  </div>


  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" 
    id="exampleFormControlTextarea1" 
    name="msg"
    value={data.msg}
    onChange={InputEvent}
    rows="3">
    </textarea>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>


                </form>

            </div>
            </div>
    )
}
export default Contact;



