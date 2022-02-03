import { useState } from "react";
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sidehidden } from "../../Store";
import style from './index.module.scss'
const { Header } = Layout;
const Topbar = () => {
    const [open, setopen] = useState(false)
    const [hidden,sethidden] = useRecoilState(sidehidden)
    const navigate = useNavigate()
    const changesider = () => {
        setopen(!open)
        sethidden(!hidden)
    }
    const exitlogin = () => {
        localStorage.clear("token")
        navigate('/')
    }
    const menu = (
        <Menu>
            <Menu.Item>
                个人中心
            </Menu.Item>
            <Menu.Item >
                设置
            </Menu.Item>
            <Menu.Item disabled>
                更新版本
            </Menu.Item>
            <Menu.Item danger onClick={exitlogin}>退出</Menu.Item>
        </Menu>
    );
    return (

        <>
            <Header className="site-layout-background" style={{ padding: 10, position: "relative" }}>
                {open ? <MenuUnfoldOutlined onClick={changesider} /> : <MenuFoldOutlined onClick={changesider} />}
                <div className={style.right}>
                    <span>欢迎森哥回来!</span>
                    <Dropdown overlay={menu}>
                        <Avatar size={48} src='http://wdppx.gitee.io/yougirl/boy.jpg' />
                    </Dropdown>
                </div>
            </Header>

        </>
    );
}

export default Topbar;
