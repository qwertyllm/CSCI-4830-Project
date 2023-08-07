import React, {useState}  from "react";
import axios from "axios";

/**
 * AdminLogin Component - Provides a login interface for administrators.
 *
 * The AdminLogin component renders a simple login form that allows administrators to enter a username and password.
 * It performs a basic client-side check of the credentials and, if valid, sets a flag in local storage to indicate
 * that the user is an administrator. The user is then redirected to the admin backend.
 *
 * Note: This component includes a very simplistic and insecure authentication check that is suitable only for demonstration
 * or development purposes. In a real application, the username and password should be sent to the server for validation,
 * and a secure authentication token should be returned and managed appropriately.
 *
 * @returns {React.Element} The rendered login form, including input fields for the username and password, and a submit button.
 */
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