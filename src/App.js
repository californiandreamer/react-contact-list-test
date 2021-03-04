import "./App.css";
import { useEffect, useState } from "react";
import { DATA } from "./data";
import Header from "./misc/Header/Header";
import Search from "./misc/Search/Search";
import List from "./misc/List/List";

function App() {
    const initialData = DATA;
    const [data, setData] = useState(initialData);
    const [searchValue, setSearchValue] = useState("");

    // const onSearch = (e) => {
    //     const value = e.target.value;
    //     if (value !== "") {
    //         const filteredItems = data.filter((item) =>
    //             item.first_name.toLowerCase().includes(value)
    //         );
    //         setData([...filteredItems]);
    //     }
    // };

    const handleClick = (id, value) => {
        const itemIndex = data.map((item) => item.id).indexOf(id);
        let items = [...data];
        let item = { ...data[itemIndex] };
        item.isChecked = value;
        items[itemIndex] = item;
        setData([...items]);
    };

    const logIds = () => {
        const filteredItems = data.filter((item) => item.isChecked === true);
        const idsList = filteredItems.map((item) => item.id);
        console.log("IDs", idsList);
    };

    useEffect(() => {
        logIds();
    }, [data]);

    return (
        <div className="App">
            <Header title={"Hello Tea Code Team"} />
            <Search onChange={(e) => setSearchValue(e.target.value)} />
            <List
                data={data}
                onClick={(id, value) => handleClick(id, value)}
                searchValue={searchValue}
            />
        </div>
    );
}

export default App;
