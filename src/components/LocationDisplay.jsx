import React from 'react';

export default function LocationDisplay(props) {
    const {pathname}= props;
    return (
        <div data-testid="location-display">
            {pathname}
        </div>
    );
};