export default function Descriptioninput(){
    return(
        <div className="w-full h-34" >
            <h1 className="text-xl font-semibold capitalize" >description</h1>
            <label htmlFor="description" className="w-full h-full bg-zinc-50 focus-within:border-zinc-500 focus-within:bg-zinc-50 transition py-1 px-1 border-2 border-zinc-200 flex-col flex rounded-md items-center gap-0.5 relative" >
                <textarea name="description" id="description" className="resize-none px-1 py-1 text-md  font-medium w-full h-full border-zinc-100/0 transition" />
            </label>
        </div>
    )
}