import * as React from "react"
export const Spinner = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                stroke="#909092"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 1.333V4m0 8v2.667M3.287 3.287l1.886 1.886m5.654 5.654 1.886 1.886M1.333 8H4m8 0h2.667m-11.38 4.713 1.886-1.886m5.654-5.654 1.886-1.886"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
)
