import React, { useRef, useState } from 'react';
import style from './index.module.scss'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [[name,setname],[password,setpassword]] = [useState(null),useState(null)]
    const navigate = useNavigate()

    console.log({name,password});
    return (
        <div className={style.main}>
            <h1 className={style.title}>邪恶地球研究计划</h1>
            <input className={style.inp} value={name}  onChange={(e)=>{setname(e.target.value)}} placeholder='输入用户名'></input>
            <input className={style.inp} value={password} onChange={e=>{setpassword(e.target.value)}} placeholder='输入密码' type='password'></input>
            <button className={style.but} onClick={()=>{
                if(name&&password){
                    
                    localStorage.setItem("token",name+password)
                    navigate('/admin')
                }else alert('请输入用户名和密码')
                
                }}>
                    点击登录
            </button>
        </div>
    );
}

export default Login;
