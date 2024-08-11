import { useEffect, useState } from 'react';
import Button from "../components/Button"
import Label from "../components/Label"
import { BrinteLogo } from "../components/SvgIcons"

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY); // Update state with current scroll position
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array means this effect runs once on mount and unmount

    const navArray = [
        {
            name: 'Products',
            id: '#'
        },
        {
            name: 'Customers',
            id: '#'
        },
        {
            name: 'Docs',
            id: '#'
        },
        {
            name: 'Our Story',
            id: '#'
        },
        {
            name: 'Pricing',
            id: '#'
        },
        {
            name: 'Contact',
            id: '#'
        }
    ]
    return <>
        <div className={`w-full top-0 z-50 fixed ${scrollPosition > 0 ? 'border-b-2' : ''}`}>
            <div className="w-full bg-surfaceWhite flex justify-between items-center py-[12px] px-[64px]">
                <div className="flex gap-3">
                    <BrinteLogo />
                    <Label class="rounded-full min-w-[36px] min-h-[20px] bg-semanticsInfo py-1 px-2 mt-[1px]" textClass='text-xs font-semibold text-textInfo' text="BETA" />
                </div>
                <div className="flex gap-6 p-1 nav">
                    {navArray.map((arrayList, index) => (
                        <span className="text-sm text-[#464649] font-[500]" key={`${index}-nav`}>
                            <a className="w-full flex hover:opacity-50 opacity-100" href={arrayList.id}>
                                {arrayList.name}
                            </a>
                        </span>
                    ))}
                </div>
                <div className="flex gap-2 p-1">
                    <Button class="bg-white px-[12px] py-[8px] rounded-md" textClass="text-label" value="Login" />
                    <Button class="bg-black px-[12px] py-[8px] rounded-md button-shadow" textClass="text-primaryCTA" value="Join waitlist" />
                </div>
            </div>
        </div>
    </>
};

export default Header