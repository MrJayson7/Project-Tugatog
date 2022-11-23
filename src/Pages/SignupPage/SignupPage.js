import "./signupPage.css"
import { Link } from 'react-router-dom'

const signupPage = () => {
  return (
    <div className='fs-signup'>
        <div className="signup-container">
            <div className="signup-panel">
                <div className="signup-content-container">
                    <div className="logo-section">
                        <img 
                            src={require("../../Images/Tugatog-Logo-White.png")}
                            alt="Tugatog Logo" 
                            className="signup-logo"
                        />
                    </div>
                    <p className="top-msg">Create an account</p>
                    <form className="form-grp">
                        <input 
                            className="signup-input"
                            name="fullname"
                            key="fullname"
                            type="text"
                            placeholder="FULL NAME"
                            required
                            //value={name}
                            //onChange={handleChange}
                        />
                        <input 
                            className="signup-input"
                            name="email"
                            key="email"
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            required
                            //value={name}
                            //onChange={handleChange}
                        />
                        <input 
                            className="signup-input"
                            name="mobileNumber"
                            key="mobileNumber"
                            type="number"
                            id="mobileNumber"
                            placeholder="MOBILE NUMBER"
                            required
                            //value={name}
                            //onChange={handleChange}
                        />
                        <input 
                            className="signup-input"
                            name="password"
                            key="password"
                            type="password"
                            placeholder="PASSWORD"
                            required
                            //value={name}
                            //onChange={handleChange}
                        />
                        <button 
                            className="signup-btn"
                            //onClick={handleSignup}
                            >CREATE AN ACCOUNT
                        </button>
                    </form>
                    <p className="btm-msg">
                        Already have an account?
                        <Link to="/login" className="login-link"> Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default signupPage