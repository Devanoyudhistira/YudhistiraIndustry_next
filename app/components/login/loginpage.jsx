"use client"
import { useActionState } from "react";
import Form from "./form";

export default function Loginpage({ action }) {
    const [state, func, pending] = useActionState(action,false)
    

    return (
        <>
            <Form result={state} loginfunc={func} pending={pending} />
        </>
    )
}
