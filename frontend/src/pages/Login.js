import {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePwdChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password);
    }

    return(
        <form onSubmit={handleSubmit} className="login">
            <h3>Log in</h3>
            <label>Email:</label>
            <input type="email" onChange={handleEmailChange} value={email}/>
            <label>Email:</label>
            <input type="password" onChange={handlePwdChange} value={password}/>
            <button type="submit"> Log in</button>
        </form>
    )

}

export default Login
