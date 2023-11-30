import React, {useState} from 'react';
import './Nav.css';
import logo from '../../Image/logologo.png'
import avt from '../../Image/avata 1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faShoppingCart, faTruck } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Context/Context';

const Nav = () => {
    const {logout, handleRouterUrl} = useAuth()
    const navigate = useNavigate();

    const location = useLocation();
    const [isAvt, setIsAvt] = useState(false);

    const {loggedIn, clickIcon} = useAuth();
    console.log(loggedIn, clickIcon);

    const handleClickCart = () => {
        if( loggedIn === false ) {
            alert('Vui lòng đăng nhập để tiếp tục')
        }else {
            navigate('/cart')
        }
    }

    const handleClickCartEmpty = () => {
        if( loggedIn === false ) {
            alert('Vui lòng đăng nhập để tiếp tục')
        }else {
            navigate('/cart/empty')
        }
    }

    const handleLogout = () => {
        logout();
    }

    const handleClickLogin = () => {
        const fullUrl = window.location.href.substring(21);//lấy URL và loại 20 kis tự đầu
        handleRouterUrl(fullUrl);
    }

    return (
        <div className='container'>
            <div className='nav'>
                {/* Phần bên trái */}
                <div className='leftSection'>
                    {/* <Link to="/" >
                        <img src={logo} className='logo-master'/>
                    </Link>
                    <Link to="/" className='link' style={selectedTab === ''? {color:'#F79525'}:{}} onClick={() => handleTabClick('')}>
                        Trang Chủ
                    </Link>
                    <Link to="/story" className='link' style={selectedTab === 'story'? {color:'#F79525'}:{}} onClick={() => handleTabClick('story')}>
                        Câu chuyện 
                    </Link>
                    <Link to="/product" className='link' style={selectedTab === 'product'? {color:'#F79525'}:{}} onClick={() => handleTabClick('product')}>
                        Sản phẩm
                    </Link>
                    <Link to="/news" className='link' style={selectedTab === 'news'? {color:'#F79525'}:{}} onClick={() => handleTabClick('news')}>
                        Tin Tức
                    </Link>
                    <Link to="/contact" className='link' style={selectedTab === 'contact'? {color:'#F79525'}:{}} onClick={() => handleTabClick('contact')}>
                        Liên hệ
                    </Link> */}

                    <Link to="/" >
                        <img src={logo} className='logo-master'/>
                    </Link>
                    <Link to="/" className={location.pathname === '/' ? 'link-1' : 'link'} >
                        Trang Chủ
                    </Link>
                    <Link to="/story" className={location.pathname === '/story' ? 'link-1' : 'link'}>
                        Câu chuyện 
                    </Link>
                    <Link to="/product" className={location.pathname === '/product' ? 'link-1' : 'link'} >
                        Sản phẩm
                    </Link>
                    <Link to="/news" className={location.pathname === '/news' ? 'link-1' : 'link'} >
                        Tin Tức
                    </Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'link-1' : 'link'} >
                        Liên hệ
                    </Link>

                </div>

                {/* Phần bên phải */}
                <div className='rightSection'>
                    <div className='search-bar'>
                        
                        <input type="text" placeholder="Nhập từ khóa tìm kiếm" className='search-input' />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </div>
                    <Link to="/bell" className='icon'>
                        <FontAwesomeIcon icon={faBell} className={location.pathname === '/bell' ? 'search-icon-1' : 'search-icon'} />
                    </Link>

                    {clickIcon 
                        ?
                        <div  className='icon' onClick={() => handleClickCart()}>
                            <FontAwesomeIcon icon={faShoppingCart} className={location.pathname === '/cart' || location.pathname === '/cart/checkout' ? 'search-icon-1' : 'search-icon'}/>
                            {location.pathname === '/payment' || location.pathname === '/order' 
                            ? 
                            " "
                            :
                            <span className='cart-number'>5</span>
                            }
                        </div>
                        :
                        <div className='icon' onClick={() => handleClickCartEmpty()}>
                            <FontAwesomeIcon icon={faShoppingCart} className={location.pathname === '/cart/empty' || location.pathname === '/cart/checkout' ? 'search-icon-1' : 'search-icon'} />
                            {location.pathname === '/cart' || location.pathname === '/cart/checkout' 
                            ? 
                            <span className='cart-number'>5</span>
                            : ''
                            }
                        </div>
                    }

                    { loggedIn ?
                        <div>
                            <img src={avt} className='logo-master' style={{cursor:'pointer'}}  />
                        </div>
                    :
                        <Link to="/login" >
                        
                            <div onClick={handleClickLogin} className={location.pathname === '/login' ? 'login-1' : 'login'}>Đăng nhập</div>
                            {/* <img src="path/to/avatar.jpg" alt="Avatar" className='avatar' /> */}
                        
                        </Link>
                    }
                </div>
            </div>
        </div>
        )
    
}

export default Nav;