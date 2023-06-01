import styled from "@emotion/styled"
import React from "react"
import { useLocalStorageState } from "../hooks/useStorageState"
import { LS_CURRENCY } from "../utils/constants"
import { round } from "../utils/ui"
import HGroup from "./hgroup"

const Root = styled("div")`
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 9999;
    padding: 10px;
    background: rgba(255,255,255,0.6);
    font-weight: 700;
    border-radius: 10px;
`

export interface CurrencySelectorProps {
    style?: React.CSSProperties
    children
}

interface CurrencyOption {
    code: string
    usdRate: number
    format: string
}

export const CURRENCIES: CurrencyOption[] = [
    { code: 'USD', usdRate: 1, format: "${0}" },
    { code: 'AUD', usdRate: 1.4, format: "${0}" },
    { code: 'PHP', usdRate: 56, format: "{0} PHP" }
]

const DEFAULT_CURRENCY = CURRENCIES[0]

export function getCurrency(currency: string) {
    return CURRENCIES.find(x => x.code.toUpperCase() == currency.toUpperCase()) || DEFAULT_CURRENCY
}

const CurrencySelector = () => {

    const [currency, setCurrency] = useLocalStorageState<string>(LS_CURRENCY, DEFAULT_CURRENCY.code)

    const handleChange = (event) => {
        setCurrency(event.target.value)
    }

    return (
        <Root>
            <HGroup style={{ gap: 4 }}>
                <div>Currency</div>
                <select value={currency} onChange={handleChange}>
                    {CURRENCIES.map(x => {
                        return <option
                            key={x.code}
                            value={x.code}>
                            {x.code}
                        </option>
                    })}
                </select>
            </HGroup>
        </Root>
    )
}

export function Currency({ children }) {
    const [currency] = useLocalStorageState<string>(LS_CURRENCY, DEFAULT_CURRENCY.code)
    const selectedCurrency = getCurrency(currency)
    const value = (round(parseFloat(children as any) * selectedCurrency.usdRate))
    return <span>{selectedCurrency.format.replace("{0}", value.toString())}</span>
}

export default CurrencySelector