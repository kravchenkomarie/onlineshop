import React from 'react';

interface ButtonElectronics {
    title: string;
}

export const ButtonElectronics: React.FC<ButtonElectronics> = props => {
    return (
        <button className="btn btn-outline-dark me-2">{props.title}</button>
    )
}