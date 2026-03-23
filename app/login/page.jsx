import Login from "../actions/login/login";
import Loginpage from "../components/login/loginpage";

export default function Page() {
    return (
        <div className="w-screen h-screen overflow-x-hidden flex-col gap-3  flex items-center justify-center" >
            <div className="flex flex-col justify-center items-start mb-10 text-center  " >
                <h1 className="text-6xl self-center font-black mb-0.5" > Brand </h1>
                <h3 className="text-2xl font-bold " > start manage your business </h3>
            </div>
            <Loginpage action={Login} />
        </div>
    )
}