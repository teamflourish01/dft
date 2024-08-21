import React from 'react';
import '../button/Button.css';

const Button = ({ label ,type}) => {
    return (
        <button type={type} className="btn">
            <span>{label}</span>
        </button>
    );
};

export default Button;
