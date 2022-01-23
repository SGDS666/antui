import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    UploadOutlined,
    ContactsOutlined,
    ContainerOutlined,
    AuditOutlined,
    GithubOutlined,
    RollbackOutlined,
} from '@ant-design/icons';
import './index.scss'

const {  Sider} = Layout;

const Sidebar = () => {
    return (
        <Sider>
            <div className="Logo" >LOGO</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to={'user'}>用户管理</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UploadOutlined />}>
                    <Link to={'send'}>发布管理</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ContactsOutlined />}>
                    <Link to={'power'}>权限管理</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ContainerOutlined />}>
                    <Link to={'news'}>新闻管理</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<AuditOutlined />}>
                    <Link to={'examine'}>审核管理</Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<GithubOutlined />}>
                    <Link to={'zs'}>ZhangSen</Link>
                </Menu.Item>
                <Menu.Item key="7" icon={<RollbackOutlined />}>
                    <Link to={''}>回到首页</Link>
                </Menu.Item>





            </Menu>
        </Sider>
    );
}

export default Sidebar;
