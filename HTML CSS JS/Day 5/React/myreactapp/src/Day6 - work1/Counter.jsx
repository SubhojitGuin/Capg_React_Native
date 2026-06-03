export default function Counter(props) {
    return (
        <div style={{backgroundColor: props.backgroundColor}}>
            <h1>Value: {props.value}</h1>
            <button onClick={props.onIncrease}>Increase Value</button>
        </div>
    );
}