import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';


function Registery() {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [password_confirmation, setPassword_confirmation]=useState("");
    const {registery_fv} = useContext(AuthContext);

    function handleSubmit(e){
        e.preventDefault();

        const data = {
            name:name,
            email:email,
            password:password,
            password_confirmation:password_confirmation
        }
        console.log(data);
        registery_fv(data);

        if (data.password == data.password_confirmation) {
            console.log("Siker");
        }else{
            console.log("Epic Fail");
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">
                Name:
            </label>
            <input
                type="text"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                className="mb-3 mt-1 form-control"
                id="name"
                placeholder="Name"
            />
            <label htmlFor="name" className="form-label">
                Email:
            </label>
            <input
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className="mb-3 mt-1 form-control"
                id="email"
                placeholder="Email"
            />
            <label htmlFor="name" className="form-label">
                Password:
            </label>
            <input
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className="mb-3 mt-1 form-control"
                id="password"
                placeholder="Password"
            />
            <label htmlFor="name" className="form-label">
                Password verify:
            </label>
            <input
                type="password"
                value={password_confirmation}
                onChange={(e)=>{setPassword_confirmation(e.target.value)}}
                className="mb-3 mt-1 form-control"
                id="password confirmation"
                placeholder="Password confirmation"
            />
            <button type="submit" className="btn btn-info">Submit</button>
        </div>
    </form>
  )
}

export default Registery