import { useState } from "react";

function Input(props) {
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
    }

    return (
        <>
            <div className="w-full flex flex-col gap-2">
                <div className="w-full rounded-md flex flex-col h-[58px] gap-1 py-[10px] px-4 bg-surfaceSecondary input focus-within:bg-surfaceWhite focus-within:border-[2px] focus-within:border-borderPrimary"
                >
                    <span className="text-[10px] text-surfaceSubdued">{isFocused ? props.label : ''}</span>
                    <input type={props.type} placeholder={isFocused ? props.placeholder : props.label} value={inputValue} className={`w-full
                     peer focus:bg-surfaceWhite placeholder-surfaceSubdued bg-transparent outline-none ${isFocused ? 'mt-0' : 'mt-1'}`}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    )
};

export default Input