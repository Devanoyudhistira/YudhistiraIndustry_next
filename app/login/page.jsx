import Login from "../actions/login/login";

export default function Loginpage(){
    return(
        <form action={Login} className="flex px-3 py-1 flex-col gap-2 items-center bg-blue-400" >
            <h1> Login </h1>
            <label htmlFor="email">
                <h1>Email</h1>
                <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="password">
                <h1>Email</h1>
                <input type="password" name="password" id="password" />
            </label>
            <button type="submit" className="p-2 border-2" >Login</button>
        </form>
    )
}