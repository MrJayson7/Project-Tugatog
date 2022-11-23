import "./loginPage.css"
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='fs-login'>
        <div className="login-container">
            <div className="login-panel">
                <div className="login-content-container">
                    <div className="logo-section">
                        <img 
                            src={require("../../Images/Tugatog-Logo-White.png")}
                            alt="Tugatog Logo" 
                            className="login-logo"
                        />
                    </div>
                    <p className="top-msg">Log In to continue</p>
                    <form className="form-grp">
                        <input 
                            className="login-input"
                            name="email"
                            key="email"
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            required
                            //value={name}
                            //onChange={handleChange}
                        />
                        <input 
                            className="login-input"
                            name="password"
                            key="password"
                            type="password"
                            placeholder="PASSWORD"
                            required
                            //value={name}
                            //onChange={handleChange}
                        />
                        <button 
                            className="login-btn"
                            //onClick={handleLogin}
                            >LOG IN
                        </button>
                    </form>
                    <p className="btm-msg">
                        Don't have an account yet?
                        <Link to="/signup" className="signup-link"> Create One</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage