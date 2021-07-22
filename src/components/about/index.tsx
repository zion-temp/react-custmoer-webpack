import React, { FC, useEffect, useState } from "react";

import { useObserver, useLocalStore } from "mobx-react";
import "./index.less";
import { Button } from "antd";

import Store from "../../store";
const About: FC = () => {
	const homeStore: any = useLocalStore(() => Store);
	
	useEffect(() => {
		console.log(homeStore.homeNum);
		return () => {
			console.log("执行副作用");
		};
	}, []);
	const addNum = () => {
		homeStore.addNum();
	};
	return useObserver(() => (
		<div>
			<Button type="primary" onClick={addNum}>
				About
			</Button>
			<div>{homeStore.homeNum}</div>
		</div>
	));
};
export default About;
