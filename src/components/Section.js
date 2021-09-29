export function Section(props) {
    const {title, children} = props;
    return <div className="section">
        <button onClick={() => alert('ha')}>click</button>
        <h3>{title}</h3>
        {children}
    </div>
}