import React, {useEffect, useState} from "react";
import './HomePage.css';
import banner from '../../Image/Banner.png';
import velvet4 from '../../Image/Red velvet 4.png';
import btm from '../../Image/Cupcake socola.png';
import bkho from '../../Image/donut1.jpg';
import introduce from '../../Image/Giới thiệu.png';
import hai0_10 from '../../Image/bánh tráng miệng.jpg';
import halloween from '../../Image/halloween.jpg';
import macaron from '../../Image/Macaron.png';
import chirstmas from '../../Image/giáng sinh..jpg';
import avt from '../../Image/avata 1.png';
import sp3 from '../../Image/Sản phẩm 3.png';
import map from '../../Image/map.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faMapMarkedAlt, faPhone, faEnvelope, faGlobe, faArrowUp, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Context";

const HomePage = () => {
    const navigate = useNavigate();

    const {loggedIn} = useAuth();
    const savedLogin = JSON.parse(localStorage.getItem('loggedIn'));
    useEffect(() => {
        // Cuộn trang lên đầu khi trang web được tải
        window.scrollTo(0, 0);
    }, []);

    // useEffect(() => {
    //     if(!savedLogin) {
    //         navigate('/login');
    //     }
    // },[]);

    const dataComment = [
        {
            avt: '../../Image/avata 1.png',
            name: 'Nguyễn Thị Thu Uyên',
            date: '22/12/2002',
            comment: 'Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.'
        },
        {
            avt: '../../Image/avata 1.png',
            name: 'Nguyễn Vân Ánh',
            date: '01/10/1997',
            comment: 'Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.'
        },
        {
            avt: '../../Image/avata 1.png',
            name: 'Đặng Quốc Cường',
            date: '24/03/2001',
            comment: 'Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.'
        },
        {
            avt: '../../Image/avata 1.png',
            name: 'Nguyễn Hoàng Nam',
            date: '22/01/1988',
            comment: 'Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.'
        },
        {
            avt: '../../Image/avata 1.png',
            name: 'Trần Nguyễn Nhật Minh',
            date: '22/12/2002',
            comment: 'Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.'
        },
        {
            avt: '../../Image/avata 1.png',
            name: 'Nguyễn Thị Kim Long',
            date: '12/12/2004',
            comment: 'Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.'
        },
        {
            avt: '../../Image/avata 1.png',
            name: 'Phạm Ngọc Minh',
            date: '09/06/2006',
            comment: 'Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.'
        },
        {
            avt: '../../Image/avata 1.png',
            name: 'Nguyễn Thị Mai Mai',
            date: '30/04/2000',
            comment: 'Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.'
        },
        {
            avt: '../../Image/avata 1.png',
            name: 'Hoàng Thị Thúy Quỳnh',
            date: '03/11/2003',
            comment: 'Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextComment = () => {
        if(currentIndex < dataComment.length - 2){
            setCurrentIndex(currentIndex + 1);
        }
    };
  
    const handlePrevComment = () => {
        if(currentIndex > 1){
            setCurrentIndex(currentIndex-1)
        }
    };


    const handleClickBt = () => {
        navigate('/news');
    }


    return (
        <div className="body-product">
            <div className="body-content">
                <img src={banner} className="banner"/>
                <div className="contents">
                    <h2 style={{paddingTop:'20px', color:'#F79525'}}>DANH MỤC SẢN PHẨM</h2>
                    <div className="list-product">
                        <div className="list-product-body">
                            <div className="img-velvet">
                                <Link to='/product/banh_ngot'>
                                    <img src={velvet4} className="velvet4"/>
                                </Link>
                                <p style={{fontWeight:'bold'}}>Bánh ngọt</p>
                            </div>
                            <div className="img-btm">
                                <Link to='/product/banh_trang_mieng'>
                                    <img src={btm} className="btm"/>
                                </Link >
                                <p style={{fontWeight:'bold'}}>Bánh tráng miệng</p>
                            </div>
                            <div className="img-bkho">
                                <Link to='/product/banh_kho'>
                                    <img src={bkho} className="bkho"/>
                                </Link>
                                <p style={{fontWeight:'bold'}}>Bánh khô</p>
                            </div>
                        </div>
                    </div>

                    <h2 style={{paddingTop:'20px', color:'#F79525'}}>GIỚI THIỆU</h2>
                    <div className="introduce">
                        <img src={introduce} className="img-introduce"/>
                        <div className="content-product">
                            <p style={{padding:'0px 10px'}}>
                                Cửa hàng bánh ngọt Sweet Cakes là một địa chỉ quen thuộc của nhiều người yêu thích bánh ngọt tại Hà Nội. Cửa hàng có không gian rộng rãi, thoáng mát, được bày trí xinh xắn, bắt mắt.
                            </p>
                        </div>
                    </div>

                    <h2 style={{paddingTop:'20px', color:'#F79525'}}>TIN TỨC</h2>
                    <div className="news" >
                        <div className="news-1">
                            <div style={{display:'flex', padding:'30px 10px'}}>
                                <div className="img-20-10">
                                    <img src={hai0_10} className="hai0_10"/>
                                </div>
                                <div style={{textAlign:'left', padding:'0 20px'}}>
                                    <p style={{fontWeight:'bold'}}>Ngày Phụ nữ Việt Nam 20/10</p>
                                    <p style={{lineHeight:'1.5rem'}}>Năm 2023 kỷ niệm 93 năm ngày thành lập Hội liên hiệp Phụ nữ Việt Nam, cũng là ngày Phụ nữ Việt Nam 20/10. Đây là một ngày lễ đặc biệt nhằm tôn vinh chị em phụ nữ Việt chắc chắn phải kể đến ngày 20/10. </p>
                                </div>
                            </div>
                            <div style={{display:'flex', padding:'0px 10px 30px 10px'}}>
                                <div className="img-20-10">
                                    <img src={macaron} className="hai0_10"/>
                                </div>
                                <div style={{textAlign:'left', padding:'0 20px'}}>
                                    <p style={{fontWeight:'bold'}}>Quy trình sản xuất macaron</p>
                                    <p style={{lineHeight:'1.5rem'}}>Một set bánh Macaron sang trọng với hương vị ngọt ngào được tạo nên từ các nguyên liệu cao cấp có thể là một gợi ý quà tặng dành cho chị em, trong các dịp đặc biệt.</p>
                                </div>
                            </div>
                        </div>
                        <div className="news-2">

                            <div style={{display:'flex', padding:'30px 10px'}}>
                                <div className="img-20-10">
                                    <img src={halloween} className="hai0_10"/>
                                </div>
                                <div style={{textAlign:'left', padding:'0 20px'}}>
                                    <p style={{fontWeight:'bold'}}>Bánh Halloween</p>
                                    <p style={{lineHeight:'1.5rem'}}>Halloween là một dịp lễ chúng ta có thể tự do sáng tạo ra những món ăn hay những đĩa hoa quả kì dị, ma quái. Những món ăn tưởng chừng như bình thường nhưng chỉ cần đầu tư trang trí sẽ trở nên thật độc đáo, đặc biệt. </p>
                                </div>
                            </div>
                            <div style={{display:'flex', padding:'0 10px 30px 10px'}}>
                                <div className="img-20-10">
                                    <img src={chirstmas} className="hai0_10"/>
                                </div>
                                <div style={{textAlign:'left', padding:'0 20px'}}>
                                    <p style={{fontWeight:'bold'}}>Bánh giáng sinh</p>
                                    <p style={{lineHeight:'1.5rem'}}>Kẹo Giáng sinh từ lâu đã trở thành một phần không thể thiếu trong lễ Giáng sinh. Tuy nhiên ngoài kẹo, bánh Giáng sinh cũng là một món ăn đặc biệt quan trọng không kém. </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div style={{padding:'20px 0'}}>
                        <button style={{width:'150px', height:'35px'}} className="bt-news" onClick={() => handleClickBt()}>
                            Xem thêm
                        </button>
                    </div>
                    <h2 style={{paddingTop:'20px', color:'#F79525'}}>ĐÁNH GIÁ</h2>
                    <div className="evaluate">
                        <ul className="list-evaluate">
                            <div className="left-icon">
                                <FontAwesomeIcon className="nho-hon" icon={faAngleLeft} onClick={handlePrevComment}/>
                            </div>
                            <li className="list-1">
                                <div style={{padding:'20px', whiteSpace:'normal'}}>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <div style={{display:'flex', overflow: 'hidden'}}>
                                            {/* <div className="avatars" style={{width:'40px', height:'40px', overflow:'hidden', borderRadius:'50%' }}> */}
                                                <img src={avt} className="img-avt"/>
                                            {/* </div> */}
                                            
                                            <div style={{paddingLeft:'10px'} }>
                                                <div style={{paddingLeft:'5px'}}>{dataComment[currentIndex].name}</div>
                                                <FontAwesomeIcon icon={faStar} className="star"/>
                                                <FontAwesomeIcon icon={faStar} className="star"/>
                                                <FontAwesomeIcon icon={faStar} className="star"/>
                                                <FontAwesomeIcon icon={faStar} className="star"/>
                                                <FontAwesomeIcon icon={faStar} className="star"/>
                                            </div>
                                        </div>
                                        <div>{dataComment[currentIndex].date}</div>
                                    </div>
                                    <div className="gach"></div>
                                    <p>{dataComment[currentIndex].comment}</p>
                                </div>
                            </li>
                            <li className="list-1">
                                <div style={{padding:'20px', whiteSpace:'normal'}}>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <div style={{display:'flex'}}>
                                            <img src={avt} className="img-avt"/>
                                            <div style={{paddingLeft:'10px'} }>
                                                <div style={{paddingLeft:'5px'} }>{dataComment[currentIndex+1].name}</div>
                                                <FontAwesomeIcon icon={faStar} className="star"/>
                                                <FontAwesomeIcon icon={faStar} className="star"/>
                                                <FontAwesomeIcon icon={faStar} className="star"/>
                                                <FontAwesomeIcon icon={faStar} className="star"/>
                                                <FontAwesomeIcon icon={faStar} className="star"/>
                                            </div>
                                        </div>
                                        <div>{dataComment[currentIndex+1].date}</div>
                                    </div>
                                    <div className="gach"></div>
                                    <p>{dataComment[currentIndex].comment}</p>
                                </div>
                            </li>
                            <div className="right-icon">
                                <FontAwesomeIcon className="lon-hon" icon={faAngleRight} onClick={handleNextComment}/>
                            </div>
                            {/* <li className="list-1">
                                <div style={{padding:'20px', whiteSpace:'normal'}}>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <div style={{display:'flex'}}>
                                            <img src={avt} className="img-avt"/>
                                            <div>
                                                <div>Nguyễn Thu Uyên</div>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </div>
                                        </div>
                                        <div>22/05/2022</div>
                                    </div>
                                    <div className="gach"></div>
                                    <p>Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.</p>
                                </div>
                            </li>
                            <li className="list-1">
                                <div style={{padding:'20px', whiteSpace:'normal'}}>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <div style={{display:'flex'}}>
                                            <img src={avt} className="img-avt"/>
                                            <div>
                                                <div>Nguyễn Thu Uyên</div>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </div>
                                        </div>
                                        <div>22/05/2022</div>
                                    </div>
                                    <div className="gach"></div>
                                    <p>Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.</p>
                                </div>
                            </li>
                            <li className="list-1">
                                <div style={{padding:'20px', whiteSpace:'normal'}}>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <div style={{display:'flex'}}>
                                            <img src={avt} className="img-avt"/>
                                            <div>
                                                <div>Nguyễn Thu Uyên</div>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </div>
                                        </div>
                                        <div>22/05/2022</div>
                                    </div>
                                    <div className="gach"></div>
                                    <p>Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.</p>
                                </div>
                            </li>
                            <li className="list-1">
                                <div style={{padding:'20px', whiteSpace:'normal'}}>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <div style={{display:'flex'}}>
                                            <img src={avt} className="img-avt"/>
                                            <div>
                                                <div>Nguyễn Thu Uyên</div>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </div>
                                        </div>
                                        <div>22/05/2022</div>
                                    </div>
                                    <div className="gach"></div>
                                    <p>Mình vừa có dịp ghé qua cửa hàng bánh ngọt Sweet Cakes ở Hà Nội. Mình rất ấn tượng với chất lượng bánh ở đây. Bánh được làm rất cẩn thận, tỉ mỉ, hương vị thơm ngon, vừa miệng. Mình đã thử qua một số loại bánh như bánh su kem, bánh tiramisu, bánh cupcake, và đều rất ngon.</p>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                    <h2 style={{paddingTop:'20px', color:'#F79525'}}>LIÊN HỆ</h2>
                    <div className="contact">
                        <div className="contact-1">
                            <div style={{textAlign:'left', padding: '0 30px', alignItems:'center'}}>
                                <p>
                                    <FontAwesomeIcon icon={faMapMarkedAlt} style={{paddingRight: '20px'}}/>
                                    32 Lê Quang Đạo, Mế Trì, Nam Từ Liêm, Hà Nội
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faPhone} style={{paddingRight: '20px'}}/>
                                    0987654321
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} style={{paddingRight: '20px'}}/>
                                    sweetcakes@gmail.com
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faGlobe} style={{paddingRight: '20px'}}/>
                                    www.sweetcakes.vn
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src={map} style={{padding:'0'}} className="img-map"/>
                        </div>
                    </div>
                    <h2 style={{paddingTop:'20px', color:'#F79525'}}>ĐỂ LẠI LỜI NHẮN</h2>
                    <div className="send">
                        <form className="form-send">
                            <div className="form-content">
                                <div className="form-1">
                                    <div style={{width:'50%'}}>
                                        <p>Họ tên</p>
                                        <input className="form-inp" style={{height:'30px', borderRadius:'8px' }}/>
                                    </div>
                                    <div style={{width:'50%', textAlign:'right'}} >
                                        <div style={{textAlign:'left', paddingLeft:'55px'}}><p>Số điện thoại</p></div>
                                        
                                        <input className="form-inp" style={{height:'30px', borderRadius:'8px' }}/>
                                    </div>
                                </div>
                                <div className="form-2">
                                    <p>Email</p>
                                    <input className="form-input"/>
                                </div>
                                <div className="form-2">
                                    <p>Nội dung</p>
                                    <input className="form-input"/>
                                </div>
                                <div style={{textAlign:'right', border:'none'}}>
                                    <button style={{width:'100px', height:'40px'}} className="gui">Gửi</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;