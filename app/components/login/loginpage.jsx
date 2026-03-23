import Form from "./form";

export default function Loginpage({action}){
    return(
        <>
        <Form loginfunc={action} />
        </>
    )
}