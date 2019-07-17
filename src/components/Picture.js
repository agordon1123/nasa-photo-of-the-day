import React from 'react';

const Picture = (props) => {
    return (    
        <iframe src={props.urlState} />
    )
}

export default Picture;