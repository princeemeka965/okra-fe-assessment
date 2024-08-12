import React, { useState } from "react";

const Textarea = React.forwardRef((props, ref) => {
    const [textValue, setTextValue] = useState(props.value);

    const handleChange = (event) => {
        setTextValue(event.target.value)
        props.onChange(event.target.value);
    }

    return <>
        <div className="w-full flex flex-col gap-2">
            <div className={`w-full rounded-md flex py-[10px] min-h-[134px] px-4 bg-surfaceSecondary focus-within:bg-surfaceWhite focus-within:border-[2px] ${props.error ? 'error focus-within:border-borderError' : 'input focus-within:border-borderPrimary'}`}
            >
                <textarea placeholder={props.placeholder} value={textValue} ref={ref} className={`w-full
                     peer focus:bg-surfaceWhite placeholder-surfaceSubdued bg-transparent outline-none`}
                    onChange={handleChange}
                />
            </div>
            {props.error ? <p className="text-xs text-borderError">{props.error}</p> : null}
        </div>
    </>
});

export default Textarea