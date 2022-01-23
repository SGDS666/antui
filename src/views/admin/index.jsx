/* eslint-disable react/jsx-pascal-case */
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import ZhangSen from '../ZhangSen';
import Demo1 from '../../Test/demo1'
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Home from './Home';
import 发布管理 from './发布管理';
import 权限管理 from './权限管理';
import 审核管理 from './审核管理';
import 新闻管理 from './新闻管理';
import 用户管理 from './用户管理';

const {Content} = Layout
const Admin = () => {

    return (
        <Layout>
            <Sidebar />
            <Layout className="site-layout">
                <Topbar />
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Routes>
                        <Route path='zs' element={<ZhangSen />}>
                            <Route path='demo' element={<Demo1 />} />
                        </Route>
                        <Route path='send' element={<发布管理 />} />
                        <Route path='power' element={<权限管理 />} />
                        <Route path='examine' element={<审核管理 />} />
                        <Route path='news' element={<新闻管理 />} />
                        <Route path='user' element={<用户管理 />} />
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Content>

            </Layout>
        </Layout>
    );
}

export default Admin;
