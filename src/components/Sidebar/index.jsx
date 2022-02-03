import { useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
} from '@ant-design/icons';
import axios from "axios";
import { useRecoilValue } from "recoil";
import { sidehidden } from "../../Store";
import './index.scss'
import { useEffect, useState } from "react";

const { Sider } = Layout;
const { SubMenu } = Menu;

const defaultIcon =  <UserOutlined/>

const Sidebar = () => {
    const [Menus,setMenu] = useState([])
    const ishidden = useRecoilValue(sidehidden)
    const navigate = useNavigate()
    // console.log({navigate});
    useEffect(()=>{
        axios.get('http://localhost:8000/sider')
        .then((v)=>{
            const {data} = v
            setMenu(data)
            // console.log(v);
        },(r)=>{
            console.warn(r);
        })
    },[])


    function renderMenu(menus = []) {
        return (
            menus.map(item => {
                const { key, title, icon, children, jurisdiction } = item;
                if (children) {
                    return (
                        <SubMenu key={key} icon={icon ?? defaultIcon} title={title}>
                            {renderMenu(children)}
                        </SubMenu>
                    );
                }
                if (jurisdiction) {
                    return (
                        <Menu.Item
                            key={key}
                            icon={icon ?? defaultIcon}
                            onClick={() => { navigate(key); } }
                        >
                            {title}
                        </Menu.Item>
                    );
                }
                return undefined



            })
        );
    }
    return (
        <Sider collapsed={ishidden} >
            <div className="Logo" >LOGO</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {renderMenu(Menus)}
            </Menu>
        </Sider>
    );
}

export default Sidebar;
