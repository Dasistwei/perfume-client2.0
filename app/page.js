
"use client"

import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/adminPage";
import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/loaders.css'
export default function Home() {
  // useEffect(() => {
  //   const loader = document.querySelector('.loader');
  //   if (loader) {
  //     loader.style.display = 'block'; // 显示 loading 动画
  
  //     const handleLoad = () => {
  //       loader.style.display = 'none'; // 隐藏 loading 动画
  //       console.log('Page loaded');
  //     };
  //     // 添加页面加载完成事件监听器
  //     document.addEventListener('DOMContentLoaded', handleLoad);
  
  //     // 清理副作用的函数
  //     return () => {
  //       document.removeEventListener('DOMContentLoaded', handleLoad); // 移除事件监听器
  //     };
  //   }
  // }, []); // 空依赖数组表示只在组件加载时执行一次
  return (
  <>
    <Head>
      <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:600,300" />
    </Head>  
    <ProductPage/>

  </>
  );
}
