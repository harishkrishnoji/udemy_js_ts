import React, { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../data/TokenConstants";
import "../../styles/Form.css";
import LoadingIndicator from "../LoadingIndicator";
// import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const { theme } = useTheme();
    const name = "Login";
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        // await loginUser();

        try {
          await login(username, password);
            // const res = await api.post(route, { username, password });
            // if (method === "login") {
            //   console.log(res);
            //   if (res.status !== 200) {
            //     alert("Invalid credentials");
            //     return;
            //   }
            //   if (res.data.access) {
            //     localStorage.setItem("user", JSON.stringify(res.data.user));
            //     // localStorage.setItem("user_id", res.data.user.id);
            //     // localStorage.setItem("user_email", res.data.user.email);
            //     // localStorage.setItem("user_first_name", res.data.user.first_name);
            //     // localStorage.setItem("user_last_name", res.data.user.last_name);
            //     localStorage.setItem(ACCESS_TOKEN, res.data.access);
            //     localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            //     navigate("/home");
            //   }
            // } else {
            //     navigate("/login");
            // }
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
            <h2 className="">FTS NetSvcs Automation Portal</h2>
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