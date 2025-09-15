import Axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AddUser = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        Axios.post("https://jsonplaceholder.typicode.com/users", { nameP: name, email: email, username: username }).then((response) => {
            navigate("/")
        })
    }
    return (
        <>
            <div className="form-wrapper">
                <h2 className="form-title">Add User</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <label className="field">
                        <span className="label">Name</span>
                        <input className="input" type="text" name={name} value={name} placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className="field">
                        <span className="label">Email</span>
                        <input className="input" type="email" name={email} value={email} placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className="field">
                        <span className="label">Username</span>
                        <input className="input" type="text" name={username} value={username} placeholder="Enter Username" required onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <div className="form-actions">
                        <button type="submit" className="btn btn--primary">Add User</button>
                        <Link to="/">
                            <button className="btn btn--ghost">Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddUser