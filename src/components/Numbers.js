import {Section} from "./Section";

export default function Numbers(props) {
    var {numbers, title} = props;
    //numbers = numbers.filter(n => n > 6);
    //numbers = numbers.map(n => n * 2);
    return <Section title={title}>
        {numbers.map((val, key) => <Number number={val} key={key} />)}
    </Section>
}


function Number(props) {
    const {number} = props;
    return <div className="card">{number}</div>
}