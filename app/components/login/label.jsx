export default function Label({children,htmlfor})
{
    return (
        <label htmlFor={htmlfor} className="flex flex-col gap-2" >
        {children}
        </label>
    )
}