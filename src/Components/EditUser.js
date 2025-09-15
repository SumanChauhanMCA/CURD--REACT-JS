import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const EditUser = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    function handleUpdate(e) {
        e.preventDefault()
        Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, { name: name, email: email, username: username }).then((response) => {
            navigate("/")
        })
    }
    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
        setUsername(localStorage.getItem("username"))
    },[])
    return (
        <>
            <div className="form-wrapper">
                <h2 className="form-title">Update User</h2>
                <form className="form" onSubmit={handleUpdate}>
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
                        <button type="submit" className="btn btn--primary">Update Data</button>
                        <Link to="/">
                            <button className="btn btn--ghost">Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditUser