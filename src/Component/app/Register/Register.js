import './Register.css';
import React, {useEffect, useState} from 'react';
import bgr from '../../Image/Background-ĐK.png';
import logo_facebook from '../../Image/Facebook_Logo.png';
import logo_google from '../../Image/logo_google.webp';
import logo_apple from '../../Image/apple-logopng.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Context';
// import { dataUser } from '../Login/Login';

const Register = () => {
    const navigate = useNavigate();

    const styleImage = {
        backgroundImage: `url(${bgr})`,
        height: '100vh',
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enterPassword, setEnterPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [enterPasswordError, setEnterPasswordError] = useState('')
    const [clickInput, setClickInput] = useState('black');

    //check email
    const validateEmail = () => {
        // Đây là một biểu thức chính quy đơn giản để kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError('Định dạng email không chính xác');
        } else {
          setEmailError('');
        }
    };

    //check password
    const validatePassword = () => {
        if (password.length < 6) {
          setPasswordError('Mật khẩu phải có ít nhất 6 ký tự');
        } else {
          setPasswordError('');
        }
    };

    const handleEmailBlur = () => {
        validateEmail();
    }

    const handlePasswordBlur = () => {
        validatePassword()
    }

    const handleEnterPasswordBlur = () => {
        if(enterPassword === password) {
            setEnterPasswordError('');
        }else {
            setEnterPasswordError('Mật khẩu không trùng khớp')
        }
    }

    const handleClickInput = () => {
        setClickInput('orange');
    }

    const handleClick = (e) => {
        e.preventDefault()

        if(!emailError && !passwordError && !enterPasswordError && password !== '' && enterPassword !== '') {
            const newUser = {
                email: email,
                password: password,
            };
            navigate('/login')
            // await window.location.reload();
                // Lưu đối tượng tài khoản vào localStorage
            localStorage.setItem('user', JSON.stringify(newUser));

        }else {
            setError('')
        }
        
    }

    return (
        <div>
            <div className="content-item" style={styleImage}>
                <form className="form-email" action="">

                    <p className="content-p">Đăng ký tài khoản</p>
                        <p style={{color:'red', textAlign:'center'}}>{error}</p>
                        <div className="form-group">
                            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                <label style={{display:'flex'}}>Email<p className='key'>*</p>: </label>
                                {emailError && <div style={{color: 'red'}}>{emailError}</div>}
                            </div>
                            <input 
                                className='input-email'
                                type="text" 
                                id="email" 
                                name="email"
                                placeholder="Email or Phone"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                onBlur={handleEmailBlur}
                            />
                        </div>
                        <div className="form-group">
                            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                <label style={{display:'flex'}}>Mật khẩu<p className='key'>*</p>: </label>
                                {passwordError && <div style={{color: 'red', textAlign: 'center'}}>{passwordError}</div>}
                            </div>
                            <input 
                                className='input-password' 
                                type='password'
                                id="password" 
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                onBlur={handlePasswordBlur}
                                onClick={handleClickInput}
                            /> 
                        </div>
                        <div className="form-group">
                            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                <label style={{display:'flex'}}>Nhập lại mật khẩu<p className='key'>*</p>: </label>
                                {enterPasswordError && <div style={{color: 'red', textAlign: 'center'}}>{enterPasswordError}</div>}
                            </div>
                            
                            <input 
                                className='input-password' 
                                type='password'
                                id="password" 
                                name="password"
                                placeholder="Enter Password"
                                value={enterPassword}
                                onChange={(e) => setEnterPassword(e.target.value)}
                                required
                                onBlur={handleEnterPasswordBlur}
                            />
                        </div>
                        
                        <div className="submit">
                            <button className='button-register' onClick={(e)=> handleClick(e)} type="submit" >ĐĂNG KÝ</button>
                        </div>
                        
                        <div style={{textAlign: "center"}}>Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link></div>
                        <div className='or-container'>
                            <div className="line"></div>
                            <div className='text'>Hoặc</div>
                            <div className='line'></div>
                        </div>
                        
                        <div className='logo'>
                            <img src={logo_facebook} alt='fb' className='network'/>
                            <img src={logo_google} className='network'/>
                            <img src={logo_apple} className='network'/>
                        </div>
                        
                    </form>
                    
                </div>
        </div>
    )
}

export default Register;