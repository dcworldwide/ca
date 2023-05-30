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

function renderItems(items, activeId) {
    return (
        <ol>
            {items.map((item) => {
                return (
                    <li key={item.url}>
                        <StyledLink
                            to={item.url}
                            style={{
                                color: activeId === item.url.slice(1) ? "green" : "inherit",
                            }}
                        >
                            {item.title}
                        </StyledLink>
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