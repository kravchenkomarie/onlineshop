import React from 'react';

interface ButtonAccessoriesProps {
    title: string;
}

export const ButtonProps: React.FC<ButtonAccessoriesProps> = props => {

    return(
        <div>
         <button className="btn btn-outline-dark me-2">{props.title}</button>
        </div>
    )
}