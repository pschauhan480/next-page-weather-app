// server side rendered component
import { fetchNames } from "@/utils/fetch-names";

const NamesSSR = (props) => {
    const output = props.names.map((item, idx) => {
        return (
            <li key={`name-${idx}`}>
                {item.id} : {item.name}
            </li>
        );
    });

    return <ul>{output}</ul>;
};

export const getServerSideProps = async (context) => {
    let names = [];
    try {
        names = await fetchNames();
    } catch (err) {
        console.error("fetch names error", err);
    }
    return {
        props: {
            names,
        },
    };
};

export default NamesSSR;
