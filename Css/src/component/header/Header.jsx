import React from "react";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Apni University</h1>
            <button>Register</button>
        </div>
    )
}

export default Header;