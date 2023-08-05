import React, {useState}  from "react";
import axios from "axios";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        // This is a very simplistic check and should not be used in a real application.
        // In a real application, you would send the username and password to the server to be checked, and then return a token if the user is authenticated.
        if (username === 'admin' && password === 'password') {
            // If the username and password are correct, set a flag in local storage.
            localStorage.setItem('isAdmin', 'true');
            // Redirect the user to the admin backend.
            window.location.href = "/admin/backend";
        } else {
            alert('Incorrect username or password');
        }
    };
    
    return (
        <div>
            <h1>This is the AdminLogin component</h1>
            <form onSubmit={handleLogin}>
                <label>Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/></label>
                <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/></label>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};


export default AdminLogin;