import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 

    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <a href="/">Lucas Saladini</a>
                </div>
                <ul>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Portfólio</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;