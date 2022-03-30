import React from 'react';

interface CardProps {
    title: string;
    //img: 
    p: string;
}

export const CardProps: React.FC<CardProps> = props => {
    return(
        <div>
            <div className="card h-100 text-center p-4">
                <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" className="card-img-top" alt="WD 2TB Elements Portable External Hard Drive - USB 3.0 " height="250px">
            <div className="card-body">
            <h5 className="card-title mb-0">{props.title}</h5>
            <p className="card-text lead fw-bold">{props.p}</p>   
        </div>
    )
}

// нужно ли добавлять кнопку в интерфейс
// кнопка- ссылка добавляется через link или a