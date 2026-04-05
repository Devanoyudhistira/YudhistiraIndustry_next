import convertToMoney from "@/app/function/convert";
import truncate from "@/app/function/truncat";
import { Cash } from "react-bootstrap-icons";

export default function Invoiceitem({ namaitem, harga, status, tanggal, user }) {
    const statusColor = (statusproduct) => {
        let style = ""
        switch (statusproduct) {
            case "lunas":
                style = "bg-purple-300 text-purple-800"
                break;
            case "error" || "expired":
                style = "bg-red-600"
                break;
            default: style = "bg-yellow-400"
                break;
        }

        return style
    }
    return (
        <div className="w-[96%] -ml-5 self-center h-22 rounded-xl bg-zinc-50 shadow-[1px_1px_3px_black] border border-zinc-900 flex flex-col px-1 py-2 justify-between items-center" >
            <div className="flex px-2 justify-between items-center w-full" >
                <div className="flex gap-2 justify-center items-center" >
                    <h1 className="w-min h-min p-2 bg-purple-200 rounded-md uppercase font-semibold text-md " > {Array.from(user)[0] + Array.from(user.split(" ")[1])[0]}  </h1>
                    <div className="flex flex-col items-start" >
                        <h3 className="font-semibold text-md" >{truncate(user, 18)}</h3>
                        <h4 className="font-semibold text-xs" >{tanggal}</h4>
                    </div>
                </div>
                <div className={`${statusColor(status)} p-1 rounded-md text-xs font-semibold capitalize`} > {status} </div>
            </div>
            <div className="w-full flex justify-between px-2 items-center ">
                <h1 className="text-xl font-semibold" > {namaitem} </h1>
                <h1 className="text-md font-semibold" > {new Intl.NumberFormat('id-ID').format(harga)} </h1>
            </div>
        </div>
    )
}