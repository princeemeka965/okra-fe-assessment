import Button from "../components/Button";
import CustomSelectInput from "../components/CustomSelectInput";
import Input from "../components/Input";
import Textarea from "../components/TextField";

function ContactForm() {
    return <>
        <div className="flex w-full py-[128px] px-[395px] my-[69px] gap-5">
            <div className="w-full flex flex-col gap-5">
                <p className="text-7xl text-darkPrimary">Contact sales</p>
                <p className="text-xl text-darkSecondary">Send us a message and we’ll promptly get back to you.</p>
            </div>
            <div className="w-full flex flex-col gap-5">
                <div className="w-full flex gap-4">
                    <Input label="First name" placeholder="First name" />
                    <Input label="Last name" placeholder="Last name" />
                </div>
                <div className="w-full flex gap-4">
                    <Input label="Email" placeholder="Email" type="email" />
                </div>
                <div className="w-full flex gap-4">
                    <Input label="Company Name" placeholder="Company Name" />
                </div>
                <div className="w-full flex gap-4">
                    <Input label="Website URL" placeholder="Website URL" type="url" />
                </div>
                <div className="w-full flex gap-4">
                    <CustomSelectInput
                        placeholder="How did you find us?"
                        options={['Search engine', 'Recommended by friends or colleague', 'Social media', 'Blog or publication', 'Others']}
                        onChange={(value) => console.log('Selected:', value)}
                    />
                </div>
                <div className="w-full flex gap-4">
                    <Textarea placeholder="Message" />
                </div>
                <div className="w-full flex gap-4">
                    <Button class="bg-borderPrimary py-2 px-3 rounded-lg button" textClass="font-[500] text-primaryCTA" value="Contact sales" />
                </div>
            </div>
        </div>
    </>
};

export default ContactForm;