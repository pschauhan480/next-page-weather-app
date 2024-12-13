// Static Site Generated Component
import { fetchNames } from "@/utils/fetch-names";

const NamesSSG = (props) => {
    const output = props.names.map((item, idx) => {
        return (
            <li key={`name-${idx}`}>
                {item.id} : {item.name}
            </li>
        )
    })

    return (
        <ul>
           {output} 
        </ul>
    )
}

export const getStaticProps = async (context) => {
    let names = []
    try {
        names = await fetchNames()
    } catch(err) {
        console.error(err)
    }
    return {
        props: {
            names
        }
    }
}

export default NamesSSG