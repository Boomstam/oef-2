export default function City(props) {
    const {name, numberOfPersons} = props;
    return(
        <div className="card">
            <div>{name}</div>
            <div>{numberOfPersons}</div>
        </div>
    );
}