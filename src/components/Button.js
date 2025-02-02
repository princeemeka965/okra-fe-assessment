import { Spinner } from "./SvgIcons"

function Button(props) {
    const handleClick = () => {
        props.onClick(true)
    }
    return <>
        <button className={`flex justify-center gap-2 opacity-100 hover:opacity-50 ${props.class} ${props.disabled ? null : 'cursor-pointer'}`} disabled={props.disabled} onClick={handleClick}>
            {props.disabled ? <span className="flex flex-col justify-center pt-1"><Spinner className="animate-spin" /></span> : null}
            <span className={`${props.disabled ? 'text-surfaceSubdued' : `${props.textClass}`} text-sm mt-[1px]`}>{props.value}</span>
        </button>
    </>
};

export default Button