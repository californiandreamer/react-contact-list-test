import React, { useEffect, useState } from "react";
import s from "./List.module.css";

const List = ({ data, searchValue, onClick }) => {
    const [list, setList] = useState(data);

    const sortedData = list.sort((a, b) =>
        a.last_name > b.last_name ? 1 : -1
    );

    useEffect(() => {
        const filteredData = data.filter(
            (item) =>
                item.first_name.toLowerCase().includes(searchValue) ||
                item.last_name.toLowerCase().includes(searchValue)
        );
        setList(filteredData);
    }, [searchValue]);

    const renderList = sortedData.map((item) => (
        <button
            className={s.item}
            key={item.id}
            onClick={() => onClick(item.id, !item.isChecked)}
        >
            <div className={s.wrapper}>
                <div className={s.imageBox}>
                    <img className={s.image} src={item.avatar} alt="user" />
                </div>
                <div className={s.contentBox}>
                    <div className={s.name}>
                        {item.first_name} {item.last_name}
                    </div>
                    <div className={s.email}>{item.email}</div>
                </div>
            </div>
            <div>
                <div className={s.checkBoxInner}>
                    <input
                        className={s.checkBox}
                        type="checkbox"
                        checked={item.isChecked}
                    />
                </div>
            </div>
        </button>
    ));

    return <div className={s.container}>{renderList}</div>;
};

export default List;
