import Inputimage from "@/app/components/admin/inputimage";

export default function Createproduct({ createaction }) {
    return (
        <div className="fixed top-0 left-0 w-screen h-full mt-15 px-4 py-2" >
            <h1 className="text-2xl font-bold " >Product Image</h1>
            <form encType="multipart/form-data" className="w-full h-max justify-center items-center flex flex-col" action={createaction} >
                <Inputimage />
            </form>
        </div>
    )
}