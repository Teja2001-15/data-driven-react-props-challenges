import React from 'react';

const AppFeature = (props) => (<div className="AppFeature">
        <ul>
            {props.data.map((item, i) => (<li key={i}>{item}</li>))}
        </ul>
    </div>);

export default AppFeature;