import React, {useEffect} from "react";
import './Update.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Context";

const Update = () => {
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

    return (
        <div className="update">
            <div className="bt-update">
                Đang cập nhật...
            </div>
        </div>
    )
}

export default Update;