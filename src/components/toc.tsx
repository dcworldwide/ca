import styled from "@emotion/styled"
import { Link } from "gatsby-link"
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


const StyledLink = styled(Link)`
    cursor: pointer;
    outline: 2px solid transparent;
    outline-offset: 2px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;  
}
`

function renderItems(items, activeId, style) {
    return (
        <ul style={style || { paddingInlineStart: 0 }}>
            {items.map((item) => {
                const active = activeId === item.url.slice(1)
                return (
                    <li key={item.url}>
                        <StyledLink
                            to={item.url}
                            style={{
                                color: active ? "blue" : "inherit",
                                fontWeight: active ? "600" : "inherit",
                                textDecoration: active ? "underline" : "inherit",
                                textUnderlineOffset: 6
                            }}
                        >
                            {item.title}
                        </StyledLink>
                        {item.items && renderItems(item.items, activeId, {})}
                    </li>
                )
            })}
        </ul>
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