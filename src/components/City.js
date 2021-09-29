import {Card} from "./Card";

export default function City(props) {
    const {name, numberOfPersons} = props;
    return(
        <Card>
            {
                <>
                    <div>{name}</div>
                    <div>{numberOfPersons}</div>
                </>
            }
        </Card>
    );
}