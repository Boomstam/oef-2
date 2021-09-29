import {Card} from "./Card";

export default function Person(props) {
    const {person} = props;
    if(!person)return null;
    return(
        <Card title={person.name}>
            {
                <>
                    <div>{person.age}</div>
                    <div>{person.city}</div>
                </>
            }
        </Card>
    );
}