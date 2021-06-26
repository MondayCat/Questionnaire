import React,{Component} from 'react'
import './index.css'
// import { Layout } from 'antd';
// import 'antd/dist/antd.css'
// import {UserOutlined} from '@ant-design/icons';
import imgPath from './head.png';

// const { Header, Footer, Sider, Content } = Layout;

// const imgPath = require('./head.png');
export default class PageHeader extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <div id="userName"><img src={imgPath} alt="头像"/>xiejing</div>
                </header>
            </div>
        )
    }
}




