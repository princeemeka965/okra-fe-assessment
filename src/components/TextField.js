import { useState } from "react";

function Textarea(props) {
    const [hasError] = useState(props.error);
    const [textValue, setTextValue] = useState(props.value);

    const handleChange = (event) => {
        setTextValue(event.target.value)
    }

    return <>
        <div className="w-full flex flex-col gap-2">
            <div className={`w-full rounded-md flex py-[10px] min-h-[134px] px-4 bg-surfaceSecondary focus-within:bg-surfaceWhite focus-within:border-[2px] ${hasError ? 'error focus-within:border-borderError' : 'input focus-within:border-borderPrimary'}`}
            >
                <textarea placeholder={props.placeholder} value={textValue} className={`w-full
                     peer focus:bg-surfaceWhite placeholder-surfaceSubdued bg-transparent outline-none`}
                    onChange={handleChange}
                />
            </div>
        </div>

    </>
};

export default Textarea