import React from 'react';
import { MainHeader } from './StyledWidgets';

const Header = (props) => {
    return (
        <div>
            <MainHeader>
                <h1 className='header'>Picture of the Day</h1>
            </MainHeader>
            <h3>{props.titleState}</h3>
            <p>{props.dateState}</p>
        </div>
    )
}

export default Header;