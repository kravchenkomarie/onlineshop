import React from 'react';
import { Button } from '../../component/Button';


interface ButtonAllProps {
    onClick: () => void;
    title: string;
}

const categoryNames = ["Все", "Одежда для мужчин", "Одежда для женщин", "Аксессуары", "Электроника"];

export const ButtonAll: React.FC<ButtonAllProps> = props => {
    return(
        <div>
            {categoryNames.map((title, index) =>  
            <Button title={title} onClick={props.onClick} key={index} />
            ) }
          
        </div>
    )
}