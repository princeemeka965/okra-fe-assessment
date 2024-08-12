function RoundCircle(props) {
    return <>
        <div className={`w-[16px] h-[16px] p-[2.85px] rounded-full ${props.shadow}`}>
            <div className={`w-[10px] h-[10px] rounded-full ${props.color}`} />
        </div>
    </>
};

export default RoundCircle;