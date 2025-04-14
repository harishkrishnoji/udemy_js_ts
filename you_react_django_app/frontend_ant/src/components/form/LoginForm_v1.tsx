import React, { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../data/constants";
import "../../styles/Form.css";
import LoadingIndicator from "../LoadingIndicator";
// import { useTheme } from "../../context/ThemeContext";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const { theme } = useTheme();
    const name = "Login";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password });
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            // className={`form-container ${theme === "dark" ? "dark-theme" : "light-theme"}`}
            className="form-container dark-theme"
        >
            <h1>FTS NetSvcs Automation Portal</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {loading && <LoadingIndicator />}
            <button
                className="form-button"
                type="submit"
                // style={{ width: "90%", fontSize: "16px" }}
            >
                {name}
            </button>
        </form>
    );
}

export default Form;