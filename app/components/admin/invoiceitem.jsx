import { Cash } from "react-bootstrap-icons";

export default function Invoiceitem({ namaitem, harga, status, tanggal, user}) {
    return (
        <div className="w-[98%] h-20 rounded-2xl bg-zinc-200 flex px-2 justify-between items-center" >
            <div className="flex items-center gap-2" >
                <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center" >
                    Dn
                </div>
                <div>
                    <h1 className="tracking-wide text-xl font-medium" >Nama barang</h1>
                    <p className="tracking-wider text-md font-thin" > pembeli | tanggal </p>
                </div>
            </div>
            <div className="mr-3 w-36 flex justify-center items-center flex-col " >
                <h1 className="text-2xl font-medium" >Rp.20.000</h1>
                <div className="bg-green-400 font-medium w-full text-center text-xs tracking-wide rounded-md px-1 py-1" > Paid </div>            
            </div>
        </div>
    )
}