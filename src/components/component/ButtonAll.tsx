import React from 'react';

interface ButtonAllProps {
    title: string;
}

export const ButtonAllProps: React.FC<ButtonAllProps> = props => {
    return(
        <div>
            <button className="btn btn-outline-dark me-2">{props.title}</button>
        </div>
    )
}