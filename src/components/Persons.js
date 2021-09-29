import Person from "./Person";

export default function Persons(props) {
    const {persons, title} = props;
    const sortedPersons = [...persons].sort((a, b) => (a.age > b.age) ? 1 : -1);
    return (<div className="section">
        <h3>{title}</h3>
        <div>
            {sortedPersons.map(p => <Person person={p} key={p.id} />)}
        </div>
        <br/>
    </div>);
}