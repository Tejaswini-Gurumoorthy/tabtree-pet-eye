import React from 'react'
import '../App.css';
import TextWithIcon from '../components/TextWithIcon';
import Logo from '../assets/logo.png';
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';
import Apple from '../assets/apple.png';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    return (
        <div className='background-login-signup'>
            <div className='logo-container'>
                <div className='logo-text'>Pet</div>
                <img className='app-logo' src={Logo} alt='app logo' />
                <div className='logo-text'>Eye</div>
            </div>
            <div className='login-form'>
                <div className='login-header'>Register</div>
                <TextWithIcon iconProp="user" placeholder="Username" password={false}/>
                <TextWithIcon iconProp="password" placeholder="Password" password={true}/>
                <TextWithIcon iconProp="mobile" placeholder="Mobile" password={false}/>
                <TextWithIcon iconProp="email" placeholder="Email" password={false}/>
                <button className='login-button'  onClick={() => { navigate('/dashboards') }}>Register</button>
                <div className='login-footer-continue-with-element'>
                    <div className='login-footer-line'></div>
                    <div className='continue-with'>Continue With</div>
                    <div className='login-footer-line'></div>
                </div>
                <div className='login-signin-options'>
                    <img className='brand-logo' src={Facebook} alt="facebook logo" />
                    <img className='brand-logo' src={Google} alt="Google logo" />
                    <img className='brand-logo' src={Apple} alt='Apple logo' />
                </div>

            </div>
        </div>
    )
}

export default Register