export default function Popularitem() {
    return (
        <div className=" flex-none w-54 h-52 flex flex-col items-start justify-between bg-zinc-50 shadow-xs shadow-zinc-950/50 rounded-xl px-2 py-1" >
            <div className="w-full bg-black h-30 mt-2 rounded-xl" ></div>
            <h1 className="-mt-6 font-bold text-md capitalize tracking-wide" > nama barang </h1>
            <div className="flex w-full justify-between items-center" >
                <h5 className="text-[15px] font-medium" >200 Terjual</h5>
                <h2 className="text-[15px] font-semibold" >Rp 1.000.000</h2>
            </div>
        </div>
    )
}