import React from 'react';

const Header = (props) => {
    return (
        <div>
            <p>Picture of the Day</p>
            <p>{props.titleState}</p>
            <p>{props.dateState}</p>
        </div>
    )
}

export default Header;