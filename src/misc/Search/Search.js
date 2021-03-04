import React from "react";
import s from "./Search.module.css";
import LoupeImg from "../../assets/loupe.png";

const Search = ({ onChange }) => {
    return (
        <div className={s.wrapper}>
            <img className={s.image} src={LoupeImg} alt="search" />
            <input className={s.input} onChange={(e) => onChange(e)} />
        </div>
    );
};

export default Search;
