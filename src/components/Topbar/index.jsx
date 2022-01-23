import { useState } from "react";
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import style from './index.module.scss'
const { Header } = Layout;
const Topbar = () => {
    const [open, setopen] = useState(false)
    const changesider = () => {
        setopen(!open)
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
            <Menu.Item danger>退出</Menu.Item>
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
