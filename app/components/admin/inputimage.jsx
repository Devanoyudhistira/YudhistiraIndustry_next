"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Images } from "react-bootstrap-icons"
export default function Inputimage({originalvalue}) {
    const [preview, setPreview] = useState(originalvalue || null)
    const [file, setFile] = useState(null)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile) {
            setFile(selectedFile)
            const objectUrl = URL.createObjectURL(selectedFile)
            setPreview(objectUrl)
        }
    }

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview)
            }
        }
    }, [preview])

    return (<>
        <label htmlFor="imageinput" className="w-full h-70 has-invalid:border-red-500 flex items-center justify-center" >
            {!preview && <div className="w-90  h-75 text-gray-400 rounded-md bg-zinc-50 border-dashed border-2 flex flex-col gap-3 items-center justify-center border-gray-400" >
                    <Images  size={130} />
                    <h1 className="text-2xl font-semibold " >no image selected</h1>
                    <p className="text-md -mt-4 font-bold" > Image tidak boleh melebihi 6mb </p>
            </div>}
            <input type="file" hidden onChange={e => handleFileChange(e)} id="imageinput" name="imageinput" />
        {preview && <Image src={preview} alt="imagepreview" className="w-83 h-full object-cover object-center" width={1000} height={1000} />}
        </label>
    </>
    )
}