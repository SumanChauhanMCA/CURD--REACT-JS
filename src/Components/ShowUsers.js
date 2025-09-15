import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowUsers = () => {
    const [userData, setUserdata] = useState([]);
    const [loading, setLoading] = useState(true);
    function getData() {
        setLoading(true);
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUserdata(response.data)
            setLoading(false);
        })
    }

    function handleDelete(id) {
        Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => {
                setUserdata((prevUsers) => prevUsers.filter((user) => user.id !== id));
            })
            .catch((err) => console.error("Delete failed", err));
    }

    function setDataToStorage(id, name, email, username) {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("username", username)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="add-user-btn">
                <Link to="/userform">
                    <button className="btn btn--primary" >Add New User</button>
                </Link>
            </div>

            {loading ? (
                // ✅ Loading spinner
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Loading users...</p>
                </div>
            ) : (
                <div className="userData">
                    {
                        userData.map((datas) => {
                            return (
                                <div className="user-card">
                                    <div className="user-card__header">
                                        {/* <div className="avatar">JD</div> */}
                                        <div>
                                            <h3 className="user-name">{datas.name}</h3>
                                            <p className="username">@{datas.username}</p>
                                        </div>
                                    </div>
                                    <p className="email"><a>{datas.email}</a></p>
                                    <div className="user-card__actions">
                                        <Link to="/editform">
                                            <button className="btn btn--sm" onClick={() => setDataToStorage(datas.id, datas.name, datas.email, datas.username)}>Edit</button>
                                        </Link>
                                        <button className="btn btn--sm btn--danger" onClick={() => { if (window.confirm("Are you sure you want to delete the data")) { handleDelete(datas.id) } }}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            )}
        </>
    )
}

export default ShowUsers