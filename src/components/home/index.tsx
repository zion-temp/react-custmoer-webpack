import React,{FC} from "react";

import "./index.less";
import { Button } from 'antd';

import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  } from '@ant-design/icons';
const Home:FC = (res ) => {
  // console.log(res)
    const toabout = ()=>{
      (res as any).history.push({pathname: '/about'})
    }
    return <div>
                <Button type="primary" onClick={toabout}>Home</Button> 
                <HomeOutlined />
                <SettingFilled />
                <SmileOutlined />
                <SyncOutlined spin />
                <SmileOutlined rotate={180} />
                <LoadingOutlined /> 
        </div>;
};

export default Home;