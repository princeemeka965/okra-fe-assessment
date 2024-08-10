function Label(props) {
    return <>
        <div className={`${props.class} flex`}>
            <span className={`${props.textClass}`}>{props.text}</span>
        </div>
    </>
};

export default Label