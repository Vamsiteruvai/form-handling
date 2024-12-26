import { useState } from "react"

function App(){

    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    
    let [error,setError]=useState({
        email:"",
        password:""
    })
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    function errorHandle(){
        if(email.trim()===""){
            setError((error)=>({...error,email:"enter email"}))
        }
        else if(!regex.test(email)){
            setError((error)=>({...error,email:"enter valid email address"}))
        }
        else{
            setError((error)=>({...error,email:""}))
        }

        if(password.trim()===""){
            setError((error)=>({...error,password:"enter password"}))
        }
        else if(password.trim().length<8){
            setError((error)=>({...error,password:"password must be 8 charectors"}))
        }
        else{
            setError((error)=>({...error,password:""}))
        }
    }
    return(
        <>
        <div className="bg-secondary bg-opacity-50 rounded w-25 position-absolute top-50 start-50 translate-middle h-50 d-inline-block p-3">
                <div className="mt-3 text-center" >
                    <label className="fs-2 fw-bolder text-white">Login Form</label>
                </div>
                <div>
                    <label className="fw-bolder text-white">Email</label>
                    <input value={email} className="form-control bg-secondary bg-opacity-50" onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    {error.email&&<span className="text-danger">{error.email}</span>}
                </div>
                <div>
                    <label className="mt-3 fw-bolder text-white">Password</label>
                    <input value={password} type="password" className="form-control bg-secondary bg-opacity-50" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    {error.password&&<span className="text-danger">{error.password}</span>}
                </div>
                <div>
                    <button className="btn btn-primary w-100 mt-4 fw-bolder" onClick={errorHandle}>Submit</button>
                </div>
            </div>
        </>
    )
}
export default App