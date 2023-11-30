import React, {useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import bgr from '../../Image/Background-Login.png'
import logo_facebook from '../../Image/Facebook_Logo.png';
import logo_google from '../../Image/logo_google.webp';
import logo_apple from '../../Image/apple-logopng.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Context';
import ModalForgotPassword from '../Modal/ModalForgotPassword';

const dataUser = [
    {
        email: 'manh@gmail.com',
        password: '123456'
    },
    {
        email:'lamanh@gmail.com',
        password:'123456'
    }
]

const Login = () => {
    const {login, url} = useAuth();
    console.log(url)

    const navigate = useNavigate();
    const styleImage = {
        backgroundImage: `url(${bgr})`,
        height: '100vh',
    }

    const [isShowModalForgotPassword, setIsShowModalForgotPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const [forgotError, setForgotError] = useState('');

    const savedUser = JSON.parse(localStorage.getItem('user'));

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
        }
        else if(password.length>5 && savedUser && savedUser.password !== password){
            setPasswordError('Sai mật khẩu');
        }else {
          setPasswordError('');
        }
    };

    const handleEmailBlur = () => {
        validateEmail();
    }

    const handlePasswordBlur = () => {
        validatePassword()
    }

    const handleClick = (e) => {
        e.preventDefault()
        // Lấy thông tin tài khoản từ localStorage
            if( savedUser && savedUser.email === email && savedUser.password === password ) {
                navigate(url || '/')
                login();
                setError('');

            }else if(savedUser){
                setError('')
            }
            else {
                setError('Sai thông tin đăng nhập. Nếu bạn chưa có tài khoản hãy đăng ký  ')
            }
    }

    const handleForgotPassword = () => {
        setIsShowModalForgotPassword(true);
    }

    const handleCloseConfirm = () => {
        setIsShowModalForgotPassword(false);
    }

    return (
        <div>
            <div className="content-item" style={styleImage}>
                <form className="form-email" action="">

                    <p className="content-p" >Đăng nhập tài khoản</p>
                        <p style={{textAlign:'center', color:'red'}}>{error} 
                    </p>
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
                            />
                        </div>
                        <div style={{textAlign:'right',cursor:'pointer'}}>
                            <p><a onClick={handleForgotPassword}>Quên mật khẩu</a></p>
                        </div>
                        
                        <div className="submit">
                            <button className='button-login' onClick={(e)=> handleClick(e)} type="submit" >ĐĂNG NHẬP</button>
                        </div>
                        
                        <div style={{textAlign: "center"}}>Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link></div>
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

                <ModalForgotPassword
                    isShow = {isShowModalForgotPassword}
                    // handleConfirm = {handleConfirm}
                    handleCloseConfirm = {handleCloseConfirm}
                    savedUser = {savedUser}
                />
        </div>
    )
}

export default Login;
