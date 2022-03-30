import React from 'react';

interface ButtonWomenClothesProps {
    title: string;
}

export const ButtonMenClothesProps: React.FC<ButtonWomenClothesProps> = props => {
    return(
        <div>
           <button className="btn btn-outline-dark me-2">{props.title}</button>
        </div>
    )
}