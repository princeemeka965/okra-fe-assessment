import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import CustomSelectInput from "../components/CustomSelectInput";
import Input from "../components/Input";
import Textarea from "../components/TextField";
import useFormValidation from "../hooks/useFormValidation";

function ContactForm() {
    const inputRefs = useRef([]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        websiteUrl: '',
        howDidYouFindUs: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const { errors, validate } = useFormValidation();

    const handleSubmit = () => {
        setLoading(true);
        if (validate(formData)) {
            setTimeout(() => {
                // Submit form data
                console.log('Form submitted:', formData);
            }, 2000)
        }
        else {
            setLoading(false);
        }
    };

    const handleChange = (value, targetName) => {
        setFormData({
            ...formData,
            [targetName]: value,
        });
    };

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const errorFields = Object.keys(errors);

            // Find the first field that has an error
            const firstErrorFieldIndex = errorFields.findIndex(fieldName => errors[fieldName]);

            // Focus on the first input with an error
            if (firstErrorFieldIndex !== -1) {
                const errorFieldName = errorFields[firstErrorFieldIndex];
                const refIndex = inputRefs.current.findIndex(input => input?.name === errorFieldName);
                if (refIndex !== -1) {
                    inputRefs.current[refIndex]?.focus();
                }
            }
        }
    }, [errors, formData]);


    return <>
        <div className="flex w-full py-[128px] px-[395px] my-[69px] gap-5">
            <div className="w-full flex flex-col gap-5">
                <p className="text-7xl text-darkPrimary">Contact sales</p>
                <p className="text-xl text-darkSecondary">Send us a message and we’ll promptly get back to you.</p>
            </div>
            <div className="w-full flex flex-col gap-5">
                <div className="w-full flex gap-4">
                    <Input label="First name" placeholder="First name" name="firstName" value="" ref={el => (inputRefs.current[0] = el)} error={errors.firstName} onChange={(e) => handleChange(e, 'firstName')} />
                    <Input label="Last name" placeholder="Last name" name="lastName" value="" ref={el => (inputRefs.current[1] = el)} error={errors.lastName} onChange={(e) => handleChange(e, 'lastName')} />
                </div>
                <div className="w-full flex gap-4">
                    <Input label="Email" placeholder="Email" type="email" name="email" value="" ref={el => (inputRefs.current[2] = el)} error={errors.email} onChange={(e) => handleChange(e, 'email')} />
                </div>
                <div className="w-full flex gap-4">
                    <Input label="Company Name" placeholder="Company Name" name="companyName" value="" ref={el => (inputRefs.current[3] = el)} error={errors.companyName} onChange={(e) => handleChange(e, 'companyName')} />
                </div>
                <div className="w-full flex gap-4">
                    <Input label="Website URL" placeholder="Website URL" name="websiteUrl" value="" ref={el => (inputRefs.current[4] = el)} error={errors.websiteUrl} onChange={(e) => handleChange(e, 'websiteUrl')} />
                </div>
                <div className="w-full flex gap-4">
                    <CustomSelectInput
                        placeholder="How did you find us?"
                        options={['Search engine', 'Recommended by friends or colleague', 'Social media', 'Blog or publication', 'Others']}
                        name="howDidYouFindUs"
                        value=""
                        ref={el => (inputRefs.current[5] = el)} error={errors.howDidYouFindUs}
                        onChange={(e) => handleChange(e, 'howDidYouFindUs')}
                    />
                </div>
                <div className="w-full flex gap-4">
                    <Textarea placeholder="Message" name="message" value="" onChange={(e) => handleChange(e, 'message')} ref={el => (inputRefs.current[6] = el)} error={errors.message} />
                </div>
                <div className="w-full flex gap-4">
                    <Button class={`${loading ? 'bg-romanSilver' : 'bg-borderPrimary'} py-2 px-3 rounded-lg`} textClass="font-[500] text-primaryCTA" value={`${loading ? 'Sending message' : 'Contact sales'}`} disabled={loading} onClick={handleSubmit} />
                </div>
            </div>
        </div>
    </>
};

export default ContactForm;