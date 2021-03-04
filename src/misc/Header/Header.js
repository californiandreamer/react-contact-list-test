import React from "react";
import s from "./Header.module.css";

const Header = ({ title }) => {
    return (
        <header className={s.header}>
            <div className={s.title}>{title}</div>
        </header>
    );
};

export default Header;
