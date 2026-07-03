import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // 👇 Paste it here
    const handleLogin = async () => {

        try {

            const response = await api.post("/auth/login", {
                email,
                password
            });

            localStorage.setItem(
                "token",
                response.data.data.token
            );

            navigate("/dashboard");

        } catch (err) {

            setError(
                err.response?.data?.message || "Login Failed"
            );

        }

    };

    // 👇 Return starts here
    return (

        <div className="login-container">

            <div className="login-card">

                <h1>Task Management</h1>

                {error && <p style={{color:"red"}}>{error}</p>}

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>
                    Login
                </button>

                <p>
                    Don't have an account?
                    <Link to="/register"> Register</Link>
                </p>

            </div>

        </div>

    );

}

export default Login;