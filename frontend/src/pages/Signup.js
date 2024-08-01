import {useState} from "react";
import useSignup from '../hooks/useSignup';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signup, error, isLoading} = useSignup();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePwdChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        await signup(email, password);
    }

    return(
        <form onSubmit={handleSubmit} className="signup">
            <h3>Sign up</h3>
            <label>Email:</label>
            <input type="email" onChange={handleEmailChange} value={email}/>
            <label>Password:</label>
            <input type="password" onChange={handlePwdChange} value={password}/>
            <button type="submit" disabled={isLoading}> Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default Signup
