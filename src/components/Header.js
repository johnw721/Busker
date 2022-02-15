import React from 'react';
import SearchBar from '../components/SearchBar'

class Header extends React.Component{
    render(){
        return(
            <div className="nav-bar">
                <ul className="list">
                    <li className="content">
                        Home
                    </li>
                    <li className="content">
                        Artist
                    </li>
                    <li className="content">
                        SignUp
                    </li>
                    <li>
                        <SearchBar/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;