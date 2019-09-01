import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../design.css'


class Header extends Component {
    render() {
        return(
            <div className="Header">
                <Link to="/">홈 </Link>
                <Link to="/history"> 구매내역</Link>
            </div>
        );
    }
}
export default Header;