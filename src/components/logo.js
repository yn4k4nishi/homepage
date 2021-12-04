import * as React from "react"
import { rotate, up, down, extend, extend2 } from "./logo.module.css"

const Logo = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" >
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="white"/>
                <circle className={rotate} cx="50" cy="50" r="15" stroke="black" stroke-width="3" fill="white"/>
                <path d="M 50 35 A 1 1 90 0 1 50 65 A 1 1 90 0 0 50 35 Z" stroke="black" stroke-width="3" fill="none" className={up} />
                <path d="M 50 65 A 1 1 90 0 1 50 35 A 1 1 90 0 0 50 65 Z" stroke="black" stroke-width="3" fill="none" className={down} />
                <line x1="50" y1="34" x2="50" y2="66" stroke="black" stroke-width="3" className={extend} />
                <line x1="50" y1="20" x2="55" y2="20" stroke="black" stroke-width="3" className={extend2} />
                <line x1="45" y1="50" x2="55" y2="50" stroke="black" stroke-width="3" className={extend2} />
                <line x1="45" y1="80" x2="50" y2="80" stroke="black" stroke-width="3" className={extend2} />
            </svg>
        </>
    )
}

export default Logo
