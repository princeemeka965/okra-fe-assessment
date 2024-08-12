import { SuccessIcon } from "../components/SvgIcons";

function SuccessForm() {
    return <>
        <div className="flex w-full py-[128px] px-[395px] my-[69px] gap-10">
            <div className="w-full flex flex-col gap-5">
                <p className="text-7xl text-darkPrimary">Thank you</p>
                <p className="text-xl text-darkSecondary">A member of our team will be in touch with you shortly.</p>
            </div>
            <div className="w-full flex flex-col gap-5">
                <span className="-mt-10 flex w-full justify-center">
                    <SuccessIcon />
                </span>
            </div>
        </div>
    </>
};

export default SuccessForm;