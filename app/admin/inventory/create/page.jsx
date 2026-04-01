import { createaction } from "@/app/actions/crud/crud";
import Formaction from "@/app/components/admin/formaction";


export default function Createproduct() {
    return (
        <div className=" scroll-smooth overflow-y-auto w-max  -mt-2" >
            <h1 className="text-2xl font-bold " >Product Image</h1>
            <Formaction createaction={createaction} />            
        </div>
    )
}