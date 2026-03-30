"use client"
import Buttonsubmit from "@/app/components/admin/buttonsubmit";
import Descriptioninput from "@/app/components/admin/descriptioninput";
import Inputimage from "@/app/components/admin/inputimage";
import Inputname from "@/app/components/admin/inputname";
import Inputprice from "@/app/components/admin/inputprice";
import Inputstock from "@/app/components/admin/inputstock";
import { useActionState } from "react";
export default function Formaction({ createaction }) {
    const [result,action,loading] = useActionState(createaction,null)
    return (
        <form className="w-max h-max gap-2 mt-3 justify-center items-center flex flex-col" action={action} >
            <Inputimage />
            <Inputname category={"nama"} />
            <div className="w-full flex justify-between items-center" >
                <Inputprice />
                <Inputstock />
            </div>
            <Descriptioninput />
            <Buttonsubmit />
        </form>
    )
}