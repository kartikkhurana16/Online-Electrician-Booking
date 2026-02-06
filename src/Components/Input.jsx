import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    error,
    icon,
    required = false,
    ...props
}, ref) {
    const id = useId();
    
    return (
        <div className='w-full mb-4'>
            {label && (
                <label 
                    className='inline-block mb-1 pl-1 font-medium' 
                    htmlFor={id}
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </span>
                )}
                <input
                    type={type}
                    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border ${
                        error ? 'border-red-500' : 'border-gray-200'
                    } w-full ${icon ? 'pl-10' : ''} ${className}`}
                    ref={ref}
                    id={id}
                    {...props}
                />
            </div>
            {error && (
                <p className="text-red-500 text-sm mt-1 pl-1">{error}</p>
            )}
        </div>
    );
});

export default Input;