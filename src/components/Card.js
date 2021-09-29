export function Card(props) {
    const {children, title, extraClass} = props;
    const className = "card " + extraClass;
    //const displayMessage = displayData ? displayData : children.toString();
    console.log(children);
    var displayMessage = isPrimitive(children) ? children :
        (title ? title : children.props.children[0].props.children);
    return <div className={className} onClick={() => alert(displayMessage)}>
        {title && <h4>{title}</h4>}
        {children}
    </div>
}

function isPrimitive(test) {
    return test !== Object(test);
}