import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faClock, faPhoneAlt, faTruck, faUndo } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Image/logologo.png';

const Footer = () => {
  return (
    <footer>
        <div className='footer-top'>
            <div className='item'>
                <div className='item-1'>
                    GIAO HÀNG NHANH CHÓNG
                </div>
                <div className='item-2'>
                    Vận chuyển hỏa tốc
                </div>
            </div>
            <div className='item'>
                <div className='item-1'>
                    KHÔNG CHẤT BẢO QUẢN
                </div>
                <div className='item-2'>
                    100% Nguyên liệu sạch
                </div>
            </div>
            <div className='item'>
                <div className='item-1'>
                    ĐẶT HÀNG ONLINE
                </div>
                <div className='item-2'>
                    024 367 4079
                </div>
            </div>
            <div className='item'>
                <div className='item-1'>
                    HỖ TRỢ 24/7
                </div>
                <div className='item-2'>
                    0987 654 321
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='item'>
                <div>
                    <img src={logo} className='img'/>
                </div>
                <div>
                    Cakes được khách hàng tin yêu không chỉ
                    ở hương thơm ngon tuyệt vời mà còn an toàn,
                    đảm bảo sức khỏe
                </div>
            </div>
            <div className='item'>
                <div style={{fontSize:'20px', fontWeight: 'bold', paddingBottom: '32px'} }>
                    MUA TẠI CỬA HÀNG
                </div>
                <div className='map'>
                    <FontAwesomeIcon icon={faMap} className='icon'/>
                    <div>32 Lê Quang Đạo, Mễ Trì, Hà Nội</div>
                </div>
                <div className='clock'>
                    <FontAwesomeIcon icon={faClock} className='icon'/>
                    <div className='time'>
                        <div className='time-1'>
                            <div className='time-2'>
                                Thứ 2 - Thứ 6
                            </div>
                            <div className='time-3'>
                                06 : 30 - 21 : 30
                            </div>
                        </div>
                        <div className='time-1'>
                            <div className='time-2'>
                                Thứ 7, CN & Ngày lễ
                            </div>
                            <br/>
                            <div className='time-3'>
                                07 : 00 - 21 : 30
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='item'>
                <div style={{fontSize:'20px', fontWeight: 'bold', paddingBottom: '32px'} }>
                    HỖ TRỢ KHÁCH HÀNG
                </div>
                <div className='suport'>
                    <div className='time-1'>
                        <FontAwesomeIcon icon={faPhoneAlt} className='icon'/>
                        Hướng dẫn mua hàng
                    </div>
                    <div className='time-1'>
                        <FontAwesomeIcon icon={faTruck} className='icon'/>
                        Chính sách vận chuyển
                    </div>
                    <div className='time-1'>
                        <FontAwesomeIcon icon={faUndo} className='icon'/>
                        Chính sách đổi trả & hoàn tiền
                    </div>
                </div>    
            </div>
        </div>
    </footer>
  );
};

export default Footer;
