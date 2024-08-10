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
);

export const BookIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <path
            stroke="#303032"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 4.667A2.667 2.667 0 0 0 5.333 2h-4v10H6a2 2 0 0 1 2 2m0-9.333V14m0-9.333A2.667 2.667 0 0 1 10.667 2h4v10H10a2 2 0 0 0-2 2"
        />
    </svg>
);

export const ArrowIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill="none"
        {...props}
    >
        <path
            stroke="#303032"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h10m0 0v10m0-10L1 11"
        />
    </svg>
)

export const SlackIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <g
            stroke="#303032"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <path d="M10.667 2.333a1 1 0 1 0-2 0v3.334a1 1 0 1 0 2 0V2.333ZM12.667 5.667v1h1a1 1 0 1 0-1-1ZM7.333 10.333a1 1 0 0 0-2 0v3.334a1 1 0 1 0 2 0v-3.334ZM3.333 10.333v-1h-1a1 1 0 1 0 1 1ZM13.667 8.667h-3.334a1 1 0 1 0 0 2h3.334a1 1 0 1 0 0-2ZM10.333 12.667h-1v1a1 1 0 1 0 1-1ZM5.667 5.333H2.333a1 1 0 0 0 0 2h3.334a1 1 0 1 0 0-2ZM5.667 3.333h1v-1a1 1 0 1 0-1 1Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
)

export const ClosedBookIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <path
            stroke="#5E5E60"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.667 13V3a1.667 1.667 0 0 1 1.666-1.667h9v13.334h-9A1.667 1.667 0 0 1 2.667 13Zm0 0a1.667 1.667 0 0 1 1.666-1.667h9"
        />
    </svg>
)
