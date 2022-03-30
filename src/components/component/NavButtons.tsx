import React from 'react';

interface NavButtonProps {
    title: string;
}

export const NavButton: React.FC<NavButtonProps> = props => {

return (
    <div>
        <link href="/login" className='btn btn-outline-dark'>
                    <i className='fa fa-sign-in me-1'></i>{"Вход"}
                </link>
                <link href="/register" className='btn btn-outline-dark ms-2'>
                    <i className='fa fa-user-plus me-1'></i>{"Регистрация"}
                </link>
                <link href="/cart" className='btn btn-outline-dark ms-2'>
                    <i className='fa fa-shopping-cart me-1'></i>{"Корзина"} ({state.length})
                </link>
    </div>
)
}

// можно ли делать все кнопки (которые не будут больше использованы  в других местах на сайте) в одном компоненте?

// если да, то можно ли в этот компонент добавить остальные кнопки, которые не принадлежат к navbar, но тоже будут использованы 1 раз на сайте (значки соц.сетей в футере, например?)

// ссылки

// state

// нужно ли писать export