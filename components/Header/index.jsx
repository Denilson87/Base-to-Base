import React from 'react';

import './style.css'

function Header({children}){
    return(
        <div id="header-content">
            <strong>{children}</strong>
        </div>
    );
}

export default Header;