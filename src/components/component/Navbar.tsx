import React from 'react';

interface NavbarProps {
    title: string;
}

export const Navbar: React.FC<NavbarProps> = props => {

    return (
        <div>
           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <link className="nav-link active" aria-current="page" href="/">
                  {props.title}
                </link>
              </li>
              <li className="nav-item">
                <link className="nav-link" href="/products">
                {props.title}
                </link>
              </li>
              <li className="nav-item">
                <link className="nav-link" href="/about">
                {props.title}
                </link>
              </li>
              <li className="nav-item">
                <link className="nav-link" href="/contact">
                {props.title}
                </link>
              </li>
            </ul>
        </div>
    )
}