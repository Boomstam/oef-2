import {COLOR_TRANSLATIONS} from "../data/data";
import {Card} from "./Card";

export function Car(props) {
    const {car} = props;
    return (
        <Card title={car.name} extraClass="big">
            {
                <>
                    <Property car={car} propName="brand"/>
                    <Property car={car} propName="type"/>
                    <Color car={car}/>
                </>
            }
        </Card>);
}

function Property(props){
    const {car, propName} = props;
    if(!car[propName]) return null;
    return <div>{car[propName]}</div>;
}

function Color(props){
    const {car} = props;
    if(!car.color) return null;
    const colorTranslation = COLOR_TRANSLATIONS.find(ct => ct.dutch === car.color);
    const englishColor = colorTranslation ? colorTranslation.english : "white";
    return <div style={{backgroundColor:englishColor, color: "white"}}>{car.color}</div>
}