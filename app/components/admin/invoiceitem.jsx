import convertToMoney from "@/app/function/convert";
import { Cash } from "react-bootstrap-icons";

export default function Invoiceitem({ namaitem, harga, status, tanggal, user }) {
    const statusColor = (statusproduct) => {
        let style = ""
        switch (statusproduct) {
            case "lunas":
                style = "bg-green-400"
                break;            
            case "error":
                style = "bg-red-600"
                break;
            default: style = "bg-yellow-400"
                break;
        }

        return style
    }
    return (
        <div className="w-[98%] h-20 rounded-2xl bg-zinc-200 flex px-2 justify-between items-center" >
            <div className="flex w-max items-center gap-2" >
                <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center" >
                    Dn
                </div>
                <div>
                    <h1 className="tracking-wide text-md font-medium" >{namaitem}</h1>
                    <p className="tracking-wider text-xs font-thin" > {user} | {tanggal} </p>
                </div>
            </div>
            <div className="mr-3 w-20 flex justify-center items-center flex-col " >
                <h1 className="text-[17px] font-medium" > {convertToMoney(harga)} </h1>
                <div className={`${statusColor(status)} font-medium w-max text-center text-md tracking-wide rounded-md px-1 py-1`} > {status} </div>
            </div>
        </div>
    )
}