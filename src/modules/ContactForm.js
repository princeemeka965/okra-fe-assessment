import { useState } from "react";
import Button from "../components/Button";
import CustomSelectInput from "../components/CustomSelectInput";
import Input from "../components/Input";
import Textarea from "../components/TextField";

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        websiteUrl: '',
        howDidYouFindUs: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return <>
        <div className="flex w-full py-[128px] px-[395px] my-[69px] gap-5">
            <div className="w-full flex flex-col gap-5">
                <p className="text-7xl text-darkPrimary">Contact sales</p>
                <p className="text-xl text-darkSecondary">Send us a message and we’ll promptly get back to you.</p>
            </div>
            <div className="w-full flex flex-col gap-5">
                <div className="w-full flex gap-4">
                    <Input label="First name" placeholder="First name" name="firstName" onChange={handleChange} />
                    <Input label="Last name" placeholder="Last name" name="lastName" onChange={handleChange} />
                </div>
                <div className="w-full flex gap-4">
                    <Input label="Email" placeholder="Email" type="email" name="email" onChange={handleChange} />
                </div>
                <div className="w-full flex gap-4">
                    <Input label="Company Name" placeholder="Company Name" name="companyName" onChange={handleChange} />
                </div>
                <div className="w-full flex gap-4">
                    <Input label="Website URL" placeholder="Website URL" type="url" name="websiteUrl" onChange={handleChange} />
                </div>
                <div className="w-full flex gap-4">
                    <CustomSelectInput
                        placeholder="How did you find us?"
                        options={['Search engine', 'Recommended by friends or colleague', 'Social media', 'Blog or publication', 'Others']}
                        name="howDidYouFindUs"
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full flex gap-4">
                    <Textarea placeholder="Message" name="message" onChange={handleChange} />
                </div>
                <div className="w-full flex gap-4">
                    <Button class="bg-borderPrimary py-2 px-3 rounded-lg button" textClass="font-[500] text-primaryCTA" value="Contact sales" />
                </div>
            </div>
        </div>
    </>
};

export default ContactForm;