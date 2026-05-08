import "./login.css";

export default function Login() {
    return(
        <div className="login-page">
            <div className="login-box">
                <h2>Login</h2>
                <input type="text" placeholder="Username" className="userinfo"/>
                <input type="password" placeholder="Password" className="userinfo"/>
                <button><span>Login</span></button>
            </div>
        </div>
    );
}