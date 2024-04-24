//   <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:600,300" rel="stylesheet" type="text/css"/>
//   <link rel="stylesheet" href="<%= CLIENT_URL %>/css/loaders.css">
// <link rel="stylesheet" href="../css/admin.css">
  // <script src="../js/admin.js"></script> 

  "use client"
  import { useState } from 'react';
  import Image from "next/image";
  import Script from 'next/script';
  import Link from 'next/link';
  import { useEffect } from "react";
  import '../../styles/admin.css'
  
  function Admin() {
    const [formData, setFormData] = useState({
      category: '木質',
      image: 'https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_enabled: '1',
      origin_price: '700',
      price: '650',
      title: '神秘東方',
      unit: '50ml'
    });  
    // const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    // const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // 在这里处理表单提交逻辑
      } catch (error) {
        console.error('Form submission error:', error);
      }
    };  
    return (
      <>
        <div className="container">
          <div className="header">
            <h1>admin</h1>
            <button>add product</button>
            <div className="loader">
              <div className="loader-inner ball-scale-ripple-multiple">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>      
            <div className="create">
              <button className="X">X</button>
              <div className="container">     
                <form onSubmit={handleSubmit} id="create_form">
                  <label htmlFor="category">category:</label><br />
                  <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} /><br />
                  <label htmlFor="image">image:</label><br />
                  <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} /><br />
                  <label htmlFor="is_enabled">is_enabled:</label><br />
                  <input type="text" id="is_enabled" name="is_enabled" value={formData.is_enabled} onChange={handleChange} /><br />
                  <label htmlFor="origin_price">origin_price:</label><br />
                  <input type="text" id="origin_price" name="origin_price" value={formData.origin_price} onChange={handleChange} /><br />
                  <label htmlFor="price">price:</label><br />
                  <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} /><br />
                  <label htmlFor="title">title:</label><br />
                  <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} /><br />
                  <label htmlFor="unit">unit:</label><br />
                  <input type="text" id="unit" name="unit" value={formData.unit} onChange={handleChange} /><br />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
            <div className="update">
              <button className="x">X</button>
              <div className="container">
                <form onSubmit={handleSubmit} id="update_form" className="hide">
                  <label htmlFor="category">category:</label><br />
                  <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} /><br />
                  <label htmlFor="image">image:</label><br />
                  <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} /><br />
                  <label htmlFor="is_enabled">is_enabled:</label><br />
                  <input type="text" id="is_enabled" name="is_enabled" value={formData.is_enabled} onChange={handleChange} /><br />
                  <label htmlFor="origin_price">origin_price:</label><br />
                  <input type="text" id="origin_price" name="origin_price" value={formData.origin_price} onChange={handleChange} /><br />
                  <label htmlFor="price">price:</label><br />
                  <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} /><br />
                  <label htmlFor="title">title:</label><br />
                  <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} /><br />
                  <label htmlFor="unit">unit:</label><br />
                  <input type="text" id="unit" name="unit" value={formData.unit} onChange={handleChange} /><br />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>     
          <table id="admin-table">     
          <thead>
            <tr>
              <th>no</th>
              <th>類別</th>
              <th>圖片</th>
              <th>啟用</th>
              <th>原價</th>
              <th>特價</th>
              <th>品名</th>
              <th>容量</th>
              <th></th>
            </tr>
          </thead> 
          </table>
      </div>
        <Script src="./admin.js" strategy="lazyOnload" /> 
      </>
      );
  }
  
  export default Admin