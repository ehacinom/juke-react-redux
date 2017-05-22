import React from 'react';
import Songs from '../components/Songs'

export default function Station (props) {
    return (
        <div>
        <h2>{props.station}</h2>
        <Songs {...props} />
        </div>
    );
}