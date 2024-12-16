// Client Site Rendered Component

import { fetchNames } from "@/utils/fetch-names";
import { useState, useEffect } from "react";

const NamesCSR = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            let names;
            try {
                names = await fetchNames();
            } catch (err) {
                console.error(err);
                names = [];
            }
            setData(names);
        };
        fetchData();
    });

    const output = data?.map((item, idx) => {
        return (
            <li key={`name-${idx}`}>
                {item.id} : {item.name}
            </li>
        );
    });

    return <ul>{output}</ul>;
};

export default NamesCSR;
