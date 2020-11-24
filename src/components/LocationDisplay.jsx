import React from 'react';
import {useLocation} from "react-router-dom";

export default function LocationDisplay() {
    const {pathname}= useLocation();
    console.log(pathname);
    return (
        <div data-testid="location-display">
            {pathname}
        </div>
    );
};