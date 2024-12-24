import { ReactNode } from "react"

interface ButtonType{
    className : string
    children : ReactNode
    onClick? : ()=> void
}
export function Button({className , children , onClick} : ButtonType ){
    return <button className={className} onClick={onClick}>
        {children}
    </button>
}