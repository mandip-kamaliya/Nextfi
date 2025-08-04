import Link from "next/link"
import Button from "./Button"


export default function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link href="/Create-Exchange">Create Exchange</Link></li>
                <li><Link href="/liquidity">liquidity</Link></li>
                <li><Link href="/Swap">Swap</Link></li>
            </ul>
           <Button></Button>
        </nav>

    )
}