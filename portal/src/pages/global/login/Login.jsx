import { useState } from 'react'
import classes from './login.module.css'

const Login = ()=>{

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const nameHandler = (e)=>{
        setName(e.target.value)
    }
    const passwordHandler = (e)=>{
        setPassword(e.target.value)
    }

    const createRequest = (name, password)=>{
        const request = {
            "autheticationValues":{
                "username":name,
                "pasword":password
            }
        }
        return request
    }

    const submitHandler = ()=>{
        const request = createRequest(name,password)
        console.log(request)
        setName("")
        setPassword("")
    }

    return(
        <div className={classes.ctn}>
            <input type="text" placeholder='Enter username' className={classes.ip_f}
                onChange={nameHandler}
                value={name}
            />
            <input type="password" placeholder='Enter password' className={classes.ip_f}
                onChange={passwordHandler}
                value={password}
            />
            <button className={classes.btn} onClick={submitHandler}>Log In</button>
        </div>
    )
}


export default Login