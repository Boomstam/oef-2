import Person from "./Person";
import {Section} from "./Section";

export default function Persons(props) {
    const {persons, title} = props;
    const sortedPersons = [...persons].sort((a, b) => (a.age > b.age) ? 1 : -1);
    return <Section title={title}>
            {sortedPersons.map(p => <Person person={p} key={p.id} />)}
    </Section>
}