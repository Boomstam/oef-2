export default function Numbers(props) {
    var {numbers, title} = props;
    //numbers = numbers.filter(n => n > 6);
    //numbers = numbers.map(n => n * 2);
    return (<div className="section">
        <h3>{title}</h3>
        <div>
            {numbers.map((n, index) => <Number number={n} key={index} />)}
        </div>
    </div>);
}

function Number(props) {
    const {number} = props;
    return <div className="card">{number}</div>
}