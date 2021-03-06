import {COLOR_TRANSLATIONS} from "../data/data";

export default function Cars(props) {
    const {title, cars} = props;
    return (<div className="section">
        <h3>{title}</h3>
        <div>
            {cars.map(c => <Car car={c} key={c.name} />)}
        </div>
    </div>);
}

function Car(props) {
    const {car} = props;
    return (
        <div className="card">
            <h4>{car.name}</h4>
            <Property car={car} propName="brand"/>
            <Property car={car} propName="type"/>
            <Color car={car}/>
        </div>);
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