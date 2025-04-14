// import Form from "../components/form/LoginForm"
import Form from "../components/form/LoginForm_v1"
import "../styles/Login.css";

function Login() {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <Form route="/api/token/" method="login" />
                </div>
            </div>
        </div>
    )
}

export default Login