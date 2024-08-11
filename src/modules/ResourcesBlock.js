import Card from "../components/Card";
import { ArrowIcon, BookIcon, ClosedBookIcon, SlackIcon } from "../components/SvgIcons";

function ResourcesBlock() {
    return <>
        <div className="w-full flex flex-col bg-surfaceSecondary py-[128px] px-[395px] gap-20">
            <div className="w-full flex">
                <div className="w-[395px] flex flex-col gap-3">
                    <p className="text-[56px] text-darkPrimary">Helpful resources</p>
                    <p className="text-base text-darkSecondary">Find helpful tools, tips, and materials from our community, help center, and docs.</p>
                </div>
            </div>
            <div className="w-full flex gap-4">
                <div className="w-full flex">
                    <Card class="bg-purpleLight hover:bg-purpleSkin h-[372px] w-full">
                        <div class="flex flex-col w-full justify-between h-full">
                            <div class="flex w-full justify-between items-center">
                                <div className='flex gap-2'>
                                    <span className='mt-[3px]'><BookIcon /></span>
                                    <span className='text-sm'>See Brinte docs</span>
                                </div>
                                <>
                                    <ArrowIcon />
                                </>
                            </div>
                            <>
                                <span className='text-xl font-[500px]'>Brinte docs</span>
                            </>
                        </div>
                    </Card>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Card class="bg-orangeLight hover:bg-orangeSkin h-[178px] w-full">
                        <div class="flex flex-col w-full justify-between h-full">
                            <div class="flex w-full justify-between items-center">
                                <div className='flex gap-2'>
                                    <span className='mt-[3px]'><SlackIcon /></span>
                                    <span className='text-sm'>Join Slack community</span>
                                </div>
                                <>
                                    <ArrowIcon />
                                </>
                            </div>
                            <>
                                <span className='text-xl font-[500px]'>Brinte community</span>
                            </>
                        </div>
                    </Card>

                    <Card class="bg-greyFade hover:bg-greyDark h-[178px] w-full">
                        <div class="flex flex-col w-full justify-between h-full">
                            <div class="flex w-full justify-between items-center">
                                <div className='flex gap-2'>
                                    <span className='mt-[3px]'><ClosedBookIcon /></span>
                                    <span className='text-sm text-darkSecondary'>Go to help center</span>
                                </div>
                                <>
                                    <ArrowIcon />
                                </>
                            </div>
                            <>
                                <span className='text-xl font-[500px]'>Brinte support</span>
                            </>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    </>
};

export default ResourcesBlock;