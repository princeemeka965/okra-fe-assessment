const Card = (props) => {
    const { children } = props;
    return <>
        <div className={`rounded-2xl flex justify-between p-6 card-shadow ${props.class}`}>
            {children}
        </div>
    </>
};

export default Card