import Link from "next/link";

export default function Navitem({ nama ,location,close}) {
    return (
        <div className="transition hover:bg-zinc-50 hover:shadow-xs text-2xl px-2 py-3  shadow-zinc-900 w-full" >
            <Link onClick={close} href={location} > {nama} </Link>
        </div>
    )
}