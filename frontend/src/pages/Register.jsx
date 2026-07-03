import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/login.css";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async () => {

        try {

            await api.post("/auth/register", {
                name,
                email,
                password
            });

            alert("Registration Successful!");

            navigate("/");

        } catch (err) {

            setError(
                err.response?.data?.message || "Registration Failed"
            );

        }

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>Create Account</h1>

                {error && (
                    <p style={{ color: "red" }}>{error}</p>
                )}

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleRegister}>
                    Register
                </button>

                <p>
                    Already have an account?
                    <Link to="/"> Login</Link>
                </p>

            </div>

        </div>

    );

}

export default Register;