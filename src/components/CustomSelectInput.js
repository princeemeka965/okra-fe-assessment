import { useState } from 'react';

function CustomSelectInput(props) {
    const [selectedOption, setSelectedOption] = useState(props.placeholder || '');
    const [isOpen, setIsOpen] = useState(false);
    const [hasError] = useState(props.error);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (props.onChange) {
            props.onChange(option);
        }
    };

    return (
        <div className="relative w-full">
            <div className={`w-full rounded-md flex flex-col h-[58px] gap-1 py-[10px] px-4 bg-surfaceSecondary ${isOpen ? 'select-shadow bg-surfaceWhite border-[2px]' : 'border-gray-300'} ${hasError ? 'error-select-shadow border-borderError' : 'border-borderPrimary'} cursor-pointer`}
            >
                <div className={`w-full rounded-md flex items-center justify-between py-2 bg-transparent`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className='w-full flex flex-col gap-1'>
                        {isOpen ? <span className='text-[10px] text-[#5E5E60] -mt-2'>{props.placeholder}</span> : null}
                        <span className={selectedOption === props.placeholder ? 'text-gray-500' : 'text-gray-900'}>
                            {isOpen && selectedOption === props.placeholder ? '' : selectedOption}
                        </span>
                    </div>
                    <svg className={`fill-current h-4 w-4 text-gray-700 transform ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M5.516 7.548L10 12.032l4.484-4.484a1.25 1.25 0 011.768 1.768l-5 5a1.25 1.25 0 01-1.768 0l-5-5a1.25 1.25 0 111.768-1.768z" />
                    </svg>
                </div>
            </div>
            {isOpen && (
                <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {props.options.map(option => (
                        <li
                            key={option}
                            className={`px-4 py-2 hover:bg-gray-100 cursor-pointer`}
                            onClick={() => handleSelectOption(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CustomSelectInput;