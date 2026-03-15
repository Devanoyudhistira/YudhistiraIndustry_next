"use client"
export default function Backdrop ({children}){
    return(
        <div className="w-screen fixed top-0 left-0 z-10000 h-screen bg-black/70 flex items-center justify-center " >
            {children}
        </div>
    )
}