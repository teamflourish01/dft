import React from 'react';
import '../button/Button.css';

const Button = ({ label }) => {
    return (
        <button className="btn">
            <span>{label}</span>
        </button>
    );
};

export default Button;
