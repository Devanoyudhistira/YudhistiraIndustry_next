"use client"

export default function Inputprice() {
    return (
        <div className="flex flex-col" >
            <h1> Price </h1>
            <label htmlFor="price" className="w-max h-max bg-zinc-100 focus-within:border-zinc-500 focus-within:bg-zinc-50 transition py-1 px-1 border-2 border-zinc-200 flex-col flex rounded-md items-center gap-0.5 relative" >
                <div className="flex gap-2 items-center w-full px-2" >
                    <span className="text-md font-semibold" > Rp </span>
                    <input autoComplete="off" type="number" className="h-min w-22 border-zinc-100/0 transition" id="price" name="price" />
                </div>
            </label>
        </div>
    )
}