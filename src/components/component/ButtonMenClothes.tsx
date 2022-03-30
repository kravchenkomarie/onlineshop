import React from 'react';

interface ButtonMenClothesProps {
    title: string;
}

export const ButtonMenClothesProps: React.FC<ButtonMenClothesProps> = props => {
    return(
        <div>
           <button className="btn btn-outline-dark me-2">{props.title}</button>
        </div>
    )
}