import styled from "@emotion/styled"
import { default as React, useEffect, useState } from "react"

function getIds(items) {
    return items.reduce((acc, item) => {
        if (item.url) {
            // url has a # as first character, remove it to get the raw CSS-id
            acc.push(item.url.slice(1))
        }
        if (item.items) {
            acc.push(...getIds(item.items))
        }
        return acc
    }, [])
}

function useActiveId(itemIds) {
    const [activeId, setActiveId] = useState(`test`)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: `0% 0% -80% 0%` }
        )
        itemIds.forEach((id) => {
            let el = document.getElementById(id)
            el && observer.observe(document.getElementById(id))
        })
        return () => {
            itemIds.forEach((id) => {
                let el = document.getElementById(id)
                el && observer.unobserve(document.getElementById(id))
            })
        }
    }, [itemIds])
    return activeId
}


const StyledLink = styled("a")`
    // --theme-ui-colors-transparent: transparent;
    // --theme-ui-colors-black: #000;
    // --theme-ui-colors-white: #fff;
    // --theme-ui-colors-gray-1: #f7fafc;
    // --theme-ui-colors-gray-2: #edf2f7;
    // --theme-ui-colors-gray-3: #e2e8f0;
    // --theme-ui-colors-gray-4: #cbd5e0;
    // --theme-ui-colors-gray-5: #a0aec0;
    // --theme-ui-colors-gray-6: #718096;
    // --theme-ui-colors-gray-7: #4a5568;
    // --theme-ui-colors-gray-8: #2d3748;
    // --theme-ui-colors-gray-9: #1a202c;
    // --theme-ui-colors-red-1: #fff5f5;
    // --theme-ui-colors-red-2: #fed7d7;
    // --theme-ui-colors-red-3: #feb2b2;
    // --theme-ui-colors-red-4: #fc8181;
    // --theme-ui-colors-red-5: #f56565;
    // --theme-ui-colors-red-6: #e53e3e;
    // --theme-ui-colors-red-7: #c53030;
    // --theme-ui-colors-red-8: #9b2c2c;
    // --theme-ui-colors-red-9: #742a2a;
    // --theme-ui-colors-orange-1: #fffaf0;
    // --theme-ui-colors-orange-2: #feebc8;
    // --theme-ui-colors-orange-3: #fbd38d;
    // --theme-ui-colors-orange-4: #f6ad55;
    // --theme-ui-colors-orange-5: #ed8936;
    // --theme-ui-colors-orange-6: #dd6b20;
    // --theme-ui-colors-orange-7: #c05621;
    // --theme-ui-colors-orange-8: #9c4221;
    // --theme-ui-colors-orange-9: #7b341e;
    // --theme-ui-colors-yellow-1: #fffff0;
    // --theme-ui-colors-yellow-2: #fefcbf;
    // --theme-ui-colors-yellow-3: #faf089;
    // --theme-ui-colors-yellow-4: #f6e05e;
    // --theme-ui-colors-yellow-5: #ecc94b;
    // --theme-ui-colors-yellow-6: #d69e2e;
    // --theme-ui-colors-yellow-7: #b7791f;
    // --theme-ui-colors-yellow-8: #975a16;
    // --theme-ui-colors-yellow-9: #744210;
    // --theme-ui-colors-green-1: #f0fff4;
    // --theme-ui-colors-green-2: #c6f6d5;
    // --theme-ui-colors-green-3: #9ae6b4;
    // --theme-ui-colors-green-4: #68d391;
    // --theme-ui-colors-green-5: #48bb78;
    // --theme-ui-colors-green-6: #38a169;
    // --theme-ui-colors-green-7: #2f855a;
    // --theme-ui-colors-green-8: #276749;
    // --theme-ui-colors-green-9: #22543d;
    // --theme-ui-colors-teal-1: #e6fffa;
    // --theme-ui-colors-teal-2: #b2f5ea;
    // --theme-ui-colors-teal-3: #81e6d9;
    // --theme-ui-colors-teal-4: #4fd1c5;
    // --theme-ui-colors-teal-5: #38b2ac;
    // --theme-ui-colors-teal-6: #319795;
    // --theme-ui-colors-teal-7: #2c7a7b;
    // --theme-ui-colors-teal-8: #285e61;
    // --theme-ui-colors-teal-9: #234e52;
    // --theme-ui-colors-blue-1: #ebf8ff;
    // --theme-ui-colors-blue-2: #bee3f8;
    // --theme-ui-colors-blue-3: #90cdf4;
    // --theme-ui-colors-blue-4: #63b3ed;
    // --theme-ui-colors-blue-5: #4299e1;
    // --theme-ui-colors-blue-6: #3182ce;
    // --theme-ui-colors-blue-7: #2b6cb0;
    // --theme-ui-colors-blue-8: #2c5282;
    // --theme-ui-colors-blue-9: #2a4365;
    // --theme-ui-colors-indigo-1: #ebf4ff;
    // --theme-ui-colors-indigo-2: #c3dafe;
    // --theme-ui-colors-indigo-3: #a3bffa;
    // --theme-ui-colors-indigo-4: #7f9cf5;
    // --theme-ui-colors-indigo-5: #667eea;
    // --theme-ui-colors-indigo-6: #5a67d8;
    // --theme-ui-colors-indigo-7: #4c51bf;
    // --theme-ui-colors-indigo-8: #434190;
    // --theme-ui-colors-indigo-9: #3c366b;
    // --theme-ui-colors-purple-1: #faf5ff;
    // --theme-ui-colors-purple-2: #e9d8fd;
    // --theme-ui-colors-purple-3: #d6bcfa;
    // --theme-ui-colors-purple-4: #b794f4;
    // --theme-ui-colors-purple-5: #9f7aea;
    // --theme-ui-colors-purple-6: #805ad5;
    // --theme-ui-colors-purple-7: #6b46c1;
    // --theme-ui-colors-purple-8: #553c9a;
    // --theme-ui-colors-purple-9: #44337a;
    // --theme-ui-colors-pink-1: #fff5f7;
    // --theme-ui-colors-pink-2: #fed7e2;
    // --theme-ui-colors-pink-3: #fbb6ce;
    // --theme-ui-colors-pink-4: #f687b3;
    // --theme-ui-colors-pink-5: #ed64a6;
    // --theme-ui-colors-pink-6: #d53f8c;
    // --theme-ui-colors-pink-7: #b83280;
    // --theme-ui-colors-pink-8: #97266d;
    // --theme-ui-colors-pink-9: #702459;
    // --theme-ui-colors-grayDark: #2d3748;
    // --theme-ui-colors-text: #f6f6f6;
    // --theme-ui-colors-background: #222b40;
    // --theme-ui-colors-primary: rgb(92, 212, 125);
    // --theme-ui-colors-primaryHover: #2c5282;
    // --theme-ui-colors-secondary: #718096;
    // --theme-ui-colors-muted: #e2e8f0;
    // --theme-ui-colors-success: rgb(92, 212, 125);
    // --theme-ui-colors-info: #63b3ed;
    // --theme-ui-colors-warning: #faf089;
    // --theme-ui-colors-danger: #feb2b2;
    // --theme-ui-colors-light: #f7fafc;
    // --theme-ui-colors-dark: #2d3748;
    // --theme-ui-colors-textMuted: #718096;
    // --theme-ui-colors-mutedText: #DFE5F3;
    // --theme-ui-colors-mutedBackground: #425c86;
    // --theme-ui-colors-mutedPrimary: rgb(176, 251, 188);
    // --theme-ui-colors-mutedTextBg: #99A8CF;
    // --theme-ui-colors-watermarkBg: #4E608C;
    // color: var(--theme-ui-colors-mutedText);
    // text-decoration: none;
    // --underlineWidth: 2px;
    // --blockLength: 1rem;
    // background-image: linear-gradient(90deg, var(--theme-ui-colors-background), var(--theme-ui-colors-background)), linear-gradient(var(--theme-ui-colors-mutedPrimary), var(--theme-ui-colors-mutedPrimary)), linear-gradient(var(--theme-ui-colors-primary), var(--theme-ui-colors-primary));
    // background-repeat: no-repeat;
    // background-size: var(--blockLength) var(--underlineWidth), 0 var(--underlineWidth), 0 var(--underlineWidth);
    // background-position: calc(var(--blockLength) * -1) 100 %, 100 % 100 %, 0 100 %;
    // transition: background-size cubic-bezier(.39, .575, .565, 1) 0.3s, background-position cubic-bezier(.39, .575, .565, 1) 0.3s, color cubic-bezier(.39, .575, .565, 1) 0.3s;

    // &:hover {
    //     color: var(--theme-ui-colors-mutedPrimary);
    //     background-size: var(--blockLength) var(--underlineWidth),0 var(--underlineWidth),100% var(--underlineWidth);
    //     background-position: calc(100% + var(--blockLength)) 100%,100% 100%,0 100%;
    // }

  
}
`

const StyledLinkActive = styled("a")`
    // --theme-ui-colors-transparent: transparent;
    // --theme-ui-colors-black: #000;
    // --theme-ui-colors-white: #fff;
    // --theme-ui-colors-gray-1: #f7fafc;
    // --theme-ui-colors-gray-2: #edf2f7;
    // --theme-ui-colors-gray-3: #e2e8f0;
    // --theme-ui-colors-gray-4: #cbd5e0;
    // --theme-ui-colors-gray-5: #a0aec0;
    // --theme-ui-colors-gray-6: #718096;
    // --theme-ui-colors-gray-7: #4a5568;
    // --theme-ui-colors-gray-8: #2d3748;
    // --theme-ui-colors-gray-9: #1a202c;
    // --theme-ui-colors-red-1: #fff5f5;
    // --theme-ui-colors-red-2: #fed7d7;
    // --theme-ui-colors-red-3: #feb2b2;
    // --theme-ui-colors-red-4: #fc8181;
    // --theme-ui-colors-red-5: #f56565;
    // --theme-ui-colors-red-6: #e53e3e;
    // --theme-ui-colors-red-7: #c53030;
    // --theme-ui-colors-red-8: #9b2c2c;
    // --theme-ui-colors-red-9: #742a2a;
    // --theme-ui-colors-orange-1: #fffaf0;
    // --theme-ui-colors-orange-2: #feebc8;
    // --theme-ui-colors-orange-3: #fbd38d;
    // --theme-ui-colors-orange-4: #f6ad55;
    // --theme-ui-colors-orange-5: #ed8936;
    // --theme-ui-colors-orange-6: #dd6b20;
    // --theme-ui-colors-orange-7: #c05621;
    // --theme-ui-colors-orange-8: #9c4221;
    // --theme-ui-colors-orange-9: #7b341e;
    // --theme-ui-colors-yellow-1: #fffff0;
    // --theme-ui-colors-yellow-2: #fefcbf;
    // --theme-ui-colors-yellow-3: #faf089;
    // --theme-ui-colors-yellow-4: #f6e05e;
    // --theme-ui-colors-yellow-5: #ecc94b;
    // --theme-ui-colors-yellow-6: #d69e2e;
    // --theme-ui-colors-yellow-7: #b7791f;
    // --theme-ui-colors-yellow-8: #975a16;
    // --theme-ui-colors-yellow-9: #744210;
    // --theme-ui-colors-green-1: #f0fff4;
    // --theme-ui-colors-green-2: #c6f6d5;
    // --theme-ui-colors-green-3: #9ae6b4;
    // --theme-ui-colors-green-4: #68d391;
    // --theme-ui-colors-green-5: #48bb78;
    // --theme-ui-colors-green-6: #38a169;
    // --theme-ui-colors-green-7: #2f855a;
    // --theme-ui-colors-green-8: #276749;
    // --theme-ui-colors-green-9: #22543d;
    // --theme-ui-colors-teal-1: #e6fffa;
    // --theme-ui-colors-teal-2: #b2f5ea;
    // --theme-ui-colors-teal-3: #81e6d9;
    // --theme-ui-colors-teal-4: #4fd1c5;
    // --theme-ui-colors-teal-5: #38b2ac;
    // --theme-ui-colors-teal-6: #319795;
    // --theme-ui-colors-teal-7: #2c7a7b;
    // --theme-ui-colors-teal-8: #285e61;
    // --theme-ui-colors-teal-9: #234e52;
    // --theme-ui-colors-blue-1: #ebf8ff;
    // --theme-ui-colors-blue-2: #bee3f8;
    // --theme-ui-colors-blue-3: #90cdf4;
    // --theme-ui-colors-blue-4: #63b3ed;
    // --theme-ui-colors-blue-5: #4299e1;
    // --theme-ui-colors-blue-6: #3182ce;
    // --theme-ui-colors-blue-7: #2b6cb0;
    // --theme-ui-colors-blue-8: #2c5282;
    // --theme-ui-colors-blue-9: #2a4365;
    // --theme-ui-colors-indigo-1: #ebf4ff;
    // --theme-ui-colors-indigo-2: #c3dafe;
    // --theme-ui-colors-indigo-3: #a3bffa;
    // --theme-ui-colors-indigo-4: #7f9cf5;
    // --theme-ui-colors-indigo-5: #667eea;
    // --theme-ui-colors-indigo-6: #5a67d8;
    // --theme-ui-colors-indigo-7: #4c51bf;
    // --theme-ui-colors-indigo-8: #434190;
    // --theme-ui-colors-indigo-9: #3c366b;
    // --theme-ui-colors-purple-1: #faf5ff;
    // --theme-ui-colors-purple-2: #e9d8fd;
    // --theme-ui-colors-purple-3: #d6bcfa;
    // --theme-ui-colors-purple-4: #b794f4;
    // --theme-ui-colors-purple-5: #9f7aea;
    // --theme-ui-colors-purple-6: #805ad5;
    // --theme-ui-colors-purple-7: #6b46c1;
    // --theme-ui-colors-purple-8: #553c9a;
    // --theme-ui-colors-purple-9: #44337a;
    // --theme-ui-colors-pink-1: #fff5f7;
    // --theme-ui-colors-pink-2: #fed7e2;
    // --theme-ui-colors-pink-3: #fbb6ce;
    // --theme-ui-colors-pink-4: #f687b3;
    // --theme-ui-colors-pink-5: #ed64a6;
    // --theme-ui-colors-pink-6: #d53f8c;
    // --theme-ui-colors-pink-7: #b83280;
    // --theme-ui-colors-pink-8: #97266d;
    // --theme-ui-colors-pink-9: #702459;
    // --theme-ui-colors-grayDark: #2d3748;
    // --theme-ui-colors-text: #f6f6f6;
    // --theme-ui-colors-background: #222b40;
    // --theme-ui-colors-primary: rgb(92, 212, 125);
    // --theme-ui-colors-primaryHover: #2c5282;
    // --theme-ui-colors-secondary: #718096;
    // --theme-ui-colors-muted: #e2e8f0;
    // --theme-ui-colors-success: rgb(92, 212, 125);
    // --theme-ui-colors-info: #63b3ed;
    // --theme-ui-colors-warning: #faf089;
    // --theme-ui-colors-danger: #feb2b2;
    // --theme-ui-colors-light: #f7fafc;
    // --theme-ui-colors-dark: #2d3748;
    // --theme-ui-colors-textMuted: #718096;
    // --theme-ui-colors-mutedText: #DFE5F3;
    // --theme-ui-colors-mutedBackground: #425c86;
    // --theme-ui-colors-mutedPrimary: rgb(176, 251, 188);
    // --theme-ui-colors-mutedTextBg: #99A8CF;
    // --theme-ui-colors-watermarkBg: #4E608C;
    // color: var(--theme-ui-colors-mutedText);
    // text-decoration: none;
    // --underlineWidth: 2px;
    // --blockLength: 1.5rem;
    // background-image: linear-gradient(90deg, var(--theme-ui-colors-background), var(--theme-ui-colors-background)), linear-gradient(var(--theme-ui-colors-mutedPrimary), var(--theme-ui-colors-mutedPrimary)), linear-gradient(var(--theme-ui-colors-primary), var(--theme-ui-colors-primary));
    // background-repeat: no-repeat;
    // background-size: var(--blockLength) var(--underlineWidth),100% var(--underlineWidth),0 var(--underlineWidth);
    // background-position: calc(var(--blockLength) * -1) 100 %, 100 % 100 %, 0 100 %;
    // transition: background-size 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) 0s, background-position 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) 0s, color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) 0s;
    // border: none;

    // &:hover {
    //     color: var(--theme-ui-colors-mutedPrimary);
    //     background-size: var(--blockLength) var(--underlineWidth),0 var(--underlineWidth),100% var(--underlineWidth);
    //     background-position: calc(100% + var(--blockLength)) 100%,100% 100%,0 100%;
    // }

  
}
`

function renderItems(items, activeId) {
    return (
        <ol>
            {items.map((item) => {
                return (
                    <li key={item.url}>
                        {activeId === item.url.slice(1)
                            ? <StyledLinkActive
                                href={item.url}
                                style={{
                                    color: activeId === item.url.slice(1) ? "green" : "inherit",
                                }}
                            >
                                {item.title}
                            </StyledLinkActive>
                            : <StyledLink
                                href={item.url}
                                style={{
                                    color: activeId === item.url.slice(1) ? "green" : "inherit",
                                }}
                            >
                                {item.title}
                            </StyledLink>
                        }

                        {item.items && renderItems(item.items, activeId)}
                    </li>
                )
            })}
        </ol>
    )
}

function TableOfContents(props) {
    const idList = getIds(props.items)
    const activeId = useActiveId(idList)
    return (
        <details open>
            <summary>Table of Contents</summary>
            {renderItems(props.items, activeId)}
        </details>
    )
}

export default TableOfContents