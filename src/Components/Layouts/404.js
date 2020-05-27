import React, {Component} from 'react';

function Err404  (location) {
    return (
        <div>
            <h1>PAGE NOT FOUNT AT {location.path}</h1>
        </div>
    )

}


export default Err404;