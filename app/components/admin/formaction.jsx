"use client"
import Buttonsubmit from "@/app/components/admin/buttonsubmit";
import Descriptioninput from "@/app/components/admin/descriptioninput";
import Inputimage from "@/app/components/admin/inputimage";
import Inputname from "@/app/components/admin/inputname";
import Inputprice from "@/app/components/admin/inputprice";
import Inputstock from "@/app/components/admin/inputstock";
import { useActionState } from "react";
import { Pencil } from "react-bootstrap-icons";
export default function Formaction({icon, message,orignalid,originalimage,createaction,originaltext,originalprice,originalstock,originaldesc }) {
    const [result,action,loading] = useActionState(createaction,null)    
    return (
        <form className="w-max h-max gap-2 mt-3 justify-center items-center flex flex-col" action={action} >
            <input hidden type="text" value={orignalid || ""} name="id" />
            <Inputimage originalvalue={originalimage} />
            <Inputname originalvalue={originaltext} category={"nama"} />
            <div className="w-full flex justify-between items-center" >
                <Inputprice originalvalue={originalprice} />
                <Inputstock originalvalue={originalstock} />
            </div>
            <Descriptioninput originalvalue={originaldesc} />
            <Buttonsubmit loading={loading} message={message} icon={icon} />
        </form>
    )
}