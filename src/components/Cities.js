import City from "./City";
import {Section} from "./Section";

export default function Cities(props) {
    const {cities, title} = props;
    return <Section title={title}>
            {cities.map((c, index) => <City name={c.name} numberOfPersons={c.numberOfPersons} key={index} />)}
        </Section>
}