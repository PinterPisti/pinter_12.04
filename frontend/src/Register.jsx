import {useState} from "react";


function Register() {
    const[username, setUsername] = useState("")
    const[email, setEmail] = useState("")
    const[phonenumber, setPhonenumber] = useState("")
    const[adress, setAdress] = useState("")
    const[password, setPassword] = useState("")
    const[error, setError] = useState("")

    const handleRegister = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch("http//localhost:3000/register")({
                method: "POST",
                header: {"Content-type": "application/json"},
                body: JSON.stringify({username,email,phonenumber,adress,password})
            })
            const data = await res.json()

            if(res.ok)
            {
                setError("siker")
                setUsername("")
                setEmail("")
                setPhonenumber("")
                setAdress("")
                setPassword("")
            }
            
        } catch (error) {
            setError(error)
        }
    }

    return (
     <>
     <h1>Regisztracio</h1>
     <div>
        <form onSubmit={handleRegister}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}required/>
            </div>
            <div>
                <label>email</label>
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}required/>
            </div>
            <div>
                <label>password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}required/>
            </div>
            <div>
                <label>Address</label>
                <input type="text" value={adress} onChange={(e)=> setAdress(e.target.value)}required/>
            </div>
            <div>
                <label>phonenumber</label>
                <input type="text" value={adress} onChange={(e)=> setPhonenumber(e.target.value)}required/>
            </div>
            <button type="submit">hajra</button>
        </form>
     </div>
     </>
        
    )
  }
  
  export default Register
  