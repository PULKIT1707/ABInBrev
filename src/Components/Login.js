import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import credentials from '../data/Credentials.json';

const Login = () => {    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const loginFunction = (e) => {
        e.preventDefault();
        credentials.map((val) => {
            if(val.email === email){
                if(val.password === password){
                    return setIsAuth(true);
                }
            }
            return 0;
        });
        console.log(isAuth);
    }

  return (
    <>
        <form action="" onSubmit={loginFunction}>
            <div>
                <TextField id="emailId" label="Email" variant="outlined" type="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <TextField id="passwordId" label="Password" variant="outlined" type="password" autoComplete="off" value={[password]} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div>
                <Button variant="contained" type="submit" >Submit</Button>
            </div>
        </form>
    </>
  )
}

export default Login