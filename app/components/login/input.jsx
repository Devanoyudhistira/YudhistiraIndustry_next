export default function Inputlogin({name,type,id,error}){
    return (
        <input autocomplete='off' className=
        {`h-15 transition focus:border-black w-[90vw] text-xl font-medium py-1 px-1 rounded-xl bg-zinc-200 border-2  ${error.error ? 'border-red-500' : ' border-zinc-400' }`} type={type} name={name} id={id} />
    )
}