"use client"
export default function Inputname({category}){
    return(
        <label htmlFor="nama" className="justify-self-start self-start " >
            <h1 className="text-xl font-semibold capitalize " > nama produk </h1>
            <input autoComplete="off" className="border-zinc-200 bg-zinc-50/80 focus:border-gray-950 transition rounded-md w-90 h-13 px-0.5 py-1 font-medium " type="text" name={category} id={category} />
        </label>
    )
}