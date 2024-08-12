import RoundCircle from "../components/RoundCircle";
import { BrinteBold, BrinteIcon, LinkedInIcon, SlackIcon, XIcon, YoutubeIcon } from "../components/SvgIcons";

const resourcesList = [
    "Products", "Customers", "Docs", "Our Story", "Pricing"
]

const legalList = [
    "Terms", "Privacy"
]

function Footer() {
    return <>
        <div className="w-full flex flex-col gap-20 bg-surfaceOverlay min-h-[880px]">
            <div className="flex w-full flex-col pt-[240px] px-[309px] gap-20">
                <div className="w-full flex">
                    <div className="w-full flex">
                        <BrinteIcon />
                    </div>
                    <div className="w-full flex gap-6">
                        <div className="w-full flex flex-col gap-10">
                            <span className="text-xs font-[500] text-surfaceSubdued">
                                RESOURCES
                            </span>
                            <div className="w-full flex flex-col gap-7">
                                {resourcesList.map((list, index) => (
                                    <p className="text-[13px] font-[500] text-textLabel" key={`re${index}`}>
                                        {list}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-10">
                            <span className="text-xs font-[500] text-surfaceSubdued">
                                CONNECT WITH US
                            </span>
                            <div className="w-full flex flex-col gap-8">
                                <div className="w-full flex gap-3">
                                    <LinkedInIcon />
                                    <p className="text-[13px] -mt-[1px] font-[500] text-textLabel">
                                        LinkedIn
                                    </p>
                                </div>
                                <div className="w-full flex gap-3">
                                    <XIcon />
                                    <p className="text-[13px] -mt-[3px] font-[500] text-textLabel">
                                        X
                                    </p>
                                </div>
                                <div className="w-full flex gap-3">
                                    <YoutubeIcon />
                                    <p className="text-[13px] -mt-[3px] font-[500] text-textLabel">
                                        Youtube
                                    </p>
                                </div>
                                <div className="w-full flex gap-3">
                                    <SlackIcon />
                                    <p className="text-[13px] -mt-[3px] font-[500] text-textLabel">
                                        Slack
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-10">
                            <span className="text-xs font-[500] text-surfaceSubdued">
                                LEGAL
                            </span>
                            <div className="w-full flex flex-col gap-7">
                                {legalList.map((list, index) => (
                                    <p className="text-[13px] font-[500] text-textLabel" key={`le-${index}`}>
                                        {list}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-between">
                    <div className="w-full flex gap-2">
                        <RoundCircle shadow="bg-shadowSuccess" color="bg-surfaceSuccess" />
                        <p className="text-[13px] text-textLabel font-[500] -mt-[2.5px]">All systems operational</p>
                    </div>
                    <div className="flex w-full justify-end">
                        <p className="text-[13px] font-[400] text-darkSecondary">
                            © Brinte 2024
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full px-[96px]"><BrinteBold /></div>
        </div>
    </>
};

export default Footer;