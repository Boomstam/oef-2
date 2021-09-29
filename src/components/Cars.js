import {COLOR_TRANSLATIONS} from "../data/data";
import {Section} from "./Section";
import {Car} from "./Car";

export default function Cars(props) {
    const {title, cars} = props;
    return <Section title={title}>
            {cars.map(c => <Car car={c} key={c.name} />)}
        </Section>
}
