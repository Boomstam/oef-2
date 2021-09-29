import {Section} from "./Section";
import {Card} from "./Card";

export default function Numbers(props) {
    var {numbers, title} = props;
    //numbers = numbers.filter(n => n > 6);
    //numbers = numbers.map(n => n * 2);
    return <Section title={title}>
        {numbers.map((val, index) => <Card key={index}>{val}</Card>)}
    </Section>
}