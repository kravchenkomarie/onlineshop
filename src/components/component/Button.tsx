import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    title: string;
}

export const Button: React.FC<ButtonProps> = props => {

    return(
        <div>
         <button onClick={props.onClick} className="btn btn-outline-dark me-2">{props.title}</button>
        </div>
    )
}