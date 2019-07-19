import React from 'react';

const Picture = (props) => {
    return (    
        <img src={props.urlState} onClick={() => window.open(props.urlState)} />
    )
}

export default Picture;