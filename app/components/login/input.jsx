export default function Inputlogin({name,type,id}){
    return (
        <input className="h-15 transition focus:border-black w-[90vw] text-xl font-medium py-1 px-1 rounded-4xl bg-zinc-200 border-0 border-zinc-300" type={type} name={name} id={id} />
    )
}