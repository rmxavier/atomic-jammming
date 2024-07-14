import { NavLink, useNavigate } from "react-router-dom";
import "./Logo.css";

function Logo() {

    const navigate = useNavigate();

    function handleClick() {
      navigate('/');
    }

    return(
        <div className="logo" onClick={handleClick}>ja<span c>mmm</span>ing</div>
    );
}

export default Logo;