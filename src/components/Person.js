export default function Person(props) {
    const {person} = props;
    if(!person)return null;
    return(
        <div className="card">
            <div>{person.name}</div>
            <div>{person.age}</div>
            <div>{person.city}</div>
        </div>
    );
}