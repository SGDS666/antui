import React, {  useEffect, useState } from 'react';
import style from './index.module.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [[name,setname],[password,setpassword]] = [useState(''),useState('')]
    const navigate = useNavigate()
    const 登录状态检测 = async()=>{

        const {data} = await axios.get(`http://localhost:8000/users?name=${name}&password=${password}`)
        console.log(data);
        console.log(name,password);
       if(data.length){
           localStorage.setItem("token",[name,password])
           navigate('/admin')
       }else alert('请输入正确的账密')
    }

    return (
        <div className={style.main}>
            <h1 className={style.title}>AntdDEMO</h1>
            <input autoComplete="off" className={style.inp} value={name}  onChange={(e)=>{setname(e.target.value)}} placeholder='输入用户名'></input>
            <input autoComplete="off" className={style.inp} value={password} onChange={e=>{setpassword(e.target.value)}} placeholder='输入密码' type='password'></input>
            <button className={style.but} onClick={登录状态检测}>
                点击登录
            </button>
        </div>
    );
}

export default Login;
