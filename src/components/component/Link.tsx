import React from 'react';

interface LinkProps {
    title: string;
    link: string;
}

export const Link: React.FC<LinkProps> = props => {

    return(
        <div>
          <a className="btn btn-outline-dark" href={props.link}>{props.title}</a>
        </div>
    )
}

// как задавать конкретный заголовок (title) - например, "заказать"?
// как задвать несколько заголовков в одном компоненте и можно ли так делать? Или необходимо каждому заголовку делать свою "обертку в виде компонента"?
// нужно ли еще добавлять какие-то данные в интерфейс в данном примере?