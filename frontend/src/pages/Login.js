import {useState} from "react";
import { useLogin } from '../hooks/useLogin.js'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login, error, isLoading} = useLogin();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePwdChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password);
        await login(email, password);
    }

    return(
        <form onSubmit={handleSubmit} className="login">
            <h3>Log in</h3>
            <label>Email:</label>
            <input type="email" onChange={handleEmailChange} value={email}/>
            <label>Password:</label>
            <input type="password" onChange={handlePwdChange} value={password}/>
            <button type="submit" disabled={isLoading}> Log in</button>
            { error && <div className="error">{error}</div>}
        </form>
    )

}

export default Login
