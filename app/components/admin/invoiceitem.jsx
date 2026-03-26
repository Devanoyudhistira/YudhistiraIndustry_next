export default function Invoiceitem({ namaitem, harga, status, tanggal, user }) {
    return (
        <div className="w-full h-20 rounded-2xl bg-zinc-200 flex px-2 justify-between items-center" >
            <div className="flex items-center gap-2" >
                <div className="w-15 h-15 bg-blue-400 rounded-xl flex items-center justify-center" >
                    Dn
                </div>
                <div>
                    <h1>Nama barang</h1>
                    <p> pembeli | tanggal </p>
                </div>
            </div>
            <div className="mr-3" >
                <h1>harga</h1>
                <div className="bg-green-400 text-[18px] rounded-xl px-1 py-1" > Paid </div>
            </div>
        </div>
    )
}