import { Spinner } from "./SvgIcons"

function Button(props) {
    return <>
        <button className={`flex justify-center gap-2 opacity-100 hover:opacity-50 ${props.class} ${props.disabled ? null : 'cursor-pointer'}`}>
            {props.disabled ? <span className="flex flex-col justify-center pt-1"><Spinner className="animate-spin" /></span> : null}
            <span className={`${props.disabled ? 'text-surfaceSubdued' : 'text-primaryCTA'} text-sm mt-[1px]`}>{props.value}</span>
        </button>
    </>
};

export default Button