import City from "./City";

export default function Cities(props) {
    const {cities, title} = props;
    return (<div className="section">
        <h3>{title}</h3>
        <div>
            {cities.map((c, index) => <City name={c.name} numberOfPersons={c.numberOfPersons} key={index} />)}
        </div>
        <br/>
    </div>);
}