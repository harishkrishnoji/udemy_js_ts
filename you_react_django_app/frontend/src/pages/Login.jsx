import Form from "../components/form/Login"

function Login() {
    return <Form route="/api/token/" method="login" />
}

export default Login