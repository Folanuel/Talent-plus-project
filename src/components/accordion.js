import { useState } from 'react';

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white rounded-lg shadow-md">
        <div
            className="flex items-center justify-between cursor-pointer p-4"
            onClick={toggleAccordion}
        >
            <div className="text-[#004BD3] font-bold">{title}</div>
            <div className="text-xl">
            {isOpen ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-current text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                />
                </svg>
            ) : (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-current text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v12M6 12h12"
                />
                </svg>
            )}
            </div>
        </div>
        {isOpen && (
            <div className="p-4">
            <p className='capitalize text-[#A1A1A1]'>{content}</p>
            </div>
        )}
        </div>
    );
}

export default Accordion;
