import React, { useState } from "react";

const Input = React.forwardRef((props, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(props.value);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (event) => {
        if (event.target.value === "") {
            setIsFocused(false);
        }
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
        props.onChange(event.target.value)
    }

    return (
        <>
            <div className="w-full flex flex-col gap-2">
                <div className={`w-full rounded-md flex flex-col h-[58px] gap-1 py-[10px] px-4 bg-surfaceSecondary focus-within:bg-surfaceWhite focus-within:border-[2px] ${props.error ? 'error focus-within:border-borderError' : 'input focus-within:border-borderPrimary'}`}
                >
                    <span className="text-[10px] text-surfaceSubdued">{isFocused ? props.label : ''}</span>
                    <input type={props.type} placeholder={isFocused ? props.placeholder : props.label} value={inputValue} className={`w-full
                     peer focus:bg-surfaceWhite placeholder-surfaceSubdued bg-transparent outline-none ${isFocused ? 'mt-0' : 'mt-1'}`}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        autoComplete="off"
                        ref={ref}
                        name={props.name}
                    />
                </div>
                {props.error ? <p className="text-xs text-borderError">{props.error}</p> : null}
            </div>
        </>
    )
});

export default Input