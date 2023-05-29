import classes from './login.module.css'

const Login = ()=>{
    return(
        <div className={classes.ctn}>
            <input type="text" placeholder='Enter username' className={classes.ip_f} />
            <input type="password" placeholder='Enter password' className={classes.ip_f}/>
            <button className={classes.btn}>Log In</button>
        </div>
    )
}


export default Login