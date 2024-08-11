import { useState } from 'react';

const useFormValidation = () => {
    const [errors, setErrors] = useState({});

    const validate = (formData) => {
        const newErrors = {};

        // Required fields validation
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email)
            newErrors.email = 'Email is required';
        if (!formData.message) newErrors.message = 'Message is required';


        // Email format validation
        if (formData.email && !isValidEmail(formData.email)) newErrors.email = 'Invalid email format';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    return { errors, validate, isValid };
};

function isValidEmail(email) {
    // Implement email validation logic here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export default useFormValidation;