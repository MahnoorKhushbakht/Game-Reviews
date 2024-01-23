import Link from "next/link"
export default function NavBar(){
    return(
        <nav>
        <ul className="flex gap-2 font-orbitron">
            <li>
                <Link className="text-orange-500 hover:underline font-bold font-orbitron" href="/">Indie Gamer</Link>
            </li>
            <li className="ml-auto">
                <Link className="text-orange-500 hover:underline" href="/about" prefetch={false}>About</Link>
            </li>
            <li>
                <Link className="text-orange-500 hover:underline" href="/reviews">Reviews</Link>
            </li>
        </ul>
        </nav>
    )
}