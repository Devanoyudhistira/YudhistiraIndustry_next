"use client"
import { Receipt } from "react-bootstrap-icons"
import * as motion from "motion/react-client"

export default function Button({data}) {

    const handleDownload = async () => {
        const res = await fetch(`/api/pdf?orderId=${data.orderid}`);
        const blob = await res.blob();
    
        const url = window.URL.createObjectURL(blob);
    
        const a = document.createElement("a");
        a.href = url;
        a.download = `invoice-${data.orderid}.pdf`;
        a.click();
    
        window.URL.revokeObjectURL(url);
      };

    return (
        <motion.button onClick={handleDownload} whileTap={{ scale: 0.9 }}
            transition={{
                duration: 0.1,
            }} className="bg-green-300  w-82 h-20 rounded-xl mt-4 items-center justify-center gap-5 flex px-6 cursor-pointer shadow-xl shadow-emerald-400/20 inset-50 " >
            <Receipt className="text-green-500" size={30} />
            <div className="text-left" >
                <h1 className="text-md font-bold border-b-2 border-green-800 w-min " > Invoice.pdf </h1>
                <p className="text-xs font-medium" > tekan untuk menyimpan nota anda </p>
            </div>
        </motion.button>
    )

}