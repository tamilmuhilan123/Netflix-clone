import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./login.css"
import logoimage from '/logo.png'
import rightarrow from '../../assets/rightarrow.png'
import tv from '../../assets/tv.png'
import offline from '../../assets/offline.png'
import kids from '../../assets/kids.png'
import allinone from '../../assets/allinone.png'
import questions from "../../Questions.json"

const Login = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [show,setShow]=useState(false)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [showSignup,setShowSignup]=useState(false)

  const navigate=useNavigate();

  const signup=()=>{
    if(!show){
      if(email.trim()!==""){
        setShow(true)
      }
      else{
        alert("please enter your email")
      }
    }
    else{
      if(email.trim()!==""&&password!==""){
        navigate("/home")
      }
      else{
        alert("Please enter both email and password")
      }
    }
  }
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleSignup = () => {
  setShowSignup(true)  
}

  return (
    <div className="login-page-contents">
      <div className='login'>
        <div className="login-navbar">
          <div className="navbar-logo">
            <img src={logoimage} alt="" />
          </div>
          <div className="navbar-signup-button">
            <select><option>English</option><option>Hindi</option></select>
            <button onClick={handleSignup}>Sign up</button>
          </div>
        </div>
        <div className="login-hero-content">
  {!showSignup && (
    <>
      <div className="login-hero-content-main">
        <p className='login-hero-content-main-mainwords'>Unlimited movies, Tv shows, and more </p>
        <p className='login-hero-content-main-second-line'>Watch anywhere. Cancel anytime.</p>
        <p className='login-hero-content-main-third-line'>Ready to watch? Enter your email to create or restart your membership.</p>
        <p className='login-hero-content-main-third-line'>Already have a account ? then Get start here ⇣</p>
      </div>
      <div className="login-hero-content-main-input">
        <input type="text" placeholder='Email address' required onChange={(e)=>setEmail(e.target.value)}/>
        {show && <input type="password" placeholder='Password' required onChange={(e)=>setPassword(e.target.value)}/>}
        <button onClick={signup}>Get Started <img src={rightarrow} alt="" /></button>
      </div>
    </>
  )}
  {showSignup && (
    <div className="signup-container">
      <div className="signup-container-main">
        <div className="signup-heading">
          <h2>Sign up</h2>
        </div>
        <div className="inputfields">
          <input type="text" placeholder='Username'/>
          <input type="text" placeholder='Email or mobile number'/>
          <input type="password" placeholder='Password'/>
          <input type="text" placeholder='Confirm Password'/>
        </div>
        <button>Sign up</button>
        <p className='forgotpassword'>Forgot Password ?</p>
        <div className="remember">
          <input type="checkbox" /><p>Remember me</p>
        </div>
        <div className="newtoflix">
          <p>Already have a account ? <span onClick={() => setShowSignup(false)}>Login now.</span></p>
        </div>
        <div className="signin-last-line">
          <p>This page is protected by Google reCAPTCHA to <br />ensure you're not a bot. <span>Learn more</span></p>
        </div>
      </div>
    </div>
  )}
</div>

      </div>
      <div className="login-page-down-contents">
        <div className="login-page-down-contents-division">
          <div className="login-page-down-contents-division-one">
            <div className="login-page-down-contents-division-one-left">
              <h1>Enjoy on your TV</h1>
              <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, <br /> Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className="login-page-down-contents-division-one-right">
              <img src={tv} alt="" />
            </div>
          </div>

          <div className="login-page-down-contents-division-two">
            <div className="login-page-down-contents-division-two-left">
              <img src={offline} alt="" />
            </div>
            <div className="login-page-down-contents-division-two-right">
              <h1>Download your shows to <br /> watch offline</h1>
              <p>Save your favorites easily and always have something <br /> to watch.</p>
            </div>
          </div>

          <div className="login-page-down-contents-division-three">
            <div className="login-page-down-contents-division-three-left">
              <h1>Watch everywhere</h1>
              <p>Stream unlimited movies and TV <br /> shows on your phone, tablet, laptop, <br /> and TV.</p>
            </div>
            <div className="login-page-down-contents-division-three-right">
              <img src={allinone} alt="" />
            </div>
          </div>

          <div className="login-page-down-contents-division-four">
            <div className="login-page-down-contents-division-four-left">
              <img src={kids} alt="" />
            </div>
            <div className="login-page-down-contents-division-four-right">
              <h1>Create profiles for kids</h1>
              <p>Send kids on adventures with their favorite characters <br /> in a space made just for them—free with your <br /> membership.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="frequently-asked-questions">
        <div className="questions-heading">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="questions">
          <div className="question-container">
            {questions.map((item, index) => (
              <div 
                key={index} 
                className={`answer-showing ${activeIndex === index ? "active" : ""}`}>
                <p className='question' onClick={() => handleClick(index)}>
                  {item.question}
                </p>
                {activeIndex === index && (
                  <p className='answer'>{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-get-started-button">
        <p>Ready to watch ? Enter your email to create or restart your membership.</p>
      <div className="login-hero-content-main-input">
         <input type="text" placeholder='Email address' required onChange={(e)=>setEmail(e.target.value)}/>
          {show && <input type="password" placeholder='Password' required onChange={(e)=>setPassword(e.target.value)}/>}
          <button onClick={signup}>Get Started <img src={rightarrow} alt="" /></button>
      </div>
      </div>
      <div className="footer">
        <div className="footer-question">
          <p>Questions ? Call <span>9952663264</span></p>
         </div>
         <div className="footer-list">
          <ul>
            <li>FAQ</li>
            <li>Investor Relation</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul>
              <li>Help Center </li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
          <ul>
             <li>Account</li>
            <li>Ways to Watch </li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
           <ul>
            <li>Media Center </li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-language">
          <select>
            <option>English</option>
            <option>Hindi</option>
            </select>
          <p>Netflix India</p>
        </div>
      </div>
    </div>
  )
}

export default Login
