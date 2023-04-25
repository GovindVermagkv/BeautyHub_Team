import React, { useEffect, useState } from "react";
import "./Services.css";


export function Service() {
  const [services, setServices] = useState([
    {
      img: "https://www.homesalon.in/uploads/category/1653419715.jpg",
      name: "Packages",
      price: 500,
      discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nulla reiciendis doloremque recusandae illum corrupti repellendus adipisci ducimus ipsum accusamus maxime cupiditate quisquam aspernatur tempore praesentium, amet illo. Rerum, quod?'
    },
    {
      img: "https://www.homesalon.in/uploads/category/1653328024.jpg",
      name: "Facial-Cleanup",
      
      price: 400,
      discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nulla reiciendis doloremque recusandae illum corrupti repellendus adipisci ducimus ipsum accusamus maxime cupiditate quisquam aspernatur tempore praesentium, amet illo. Rerum, quod?'
    },
    {
      img: "https://www.homesalon.in/uploads/category/1653328104.jpg",
      name: "Bleach D-Tan",
      price: 530,
      discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nulla reiciendis doloremque recusandae illum corrupti repellendus adipisci ducimus ipsum accusamus maxime cupiditate quisquam aspernatur tempore praesentium, amet illo. Rerum, quod?'
    },
    {
      img: "https://www.homesalon.in/uploads/category/1653328163.jpg",
      name: "Mani-Padi",
      discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nulla reiciendis doloremque recusandae illum corrupti repellendus adipisci ducimus ipsum accusamus maxime cupiditate quisquam aspernatur tempore praesentium, amet illo. Rerum, quod?'
    },
    {
      img: "https://www.homesalon.in/uploads/category/1653328202.jpg",
      name: "Waxing",
      discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nulla reiciendis doloremque recusandae illum corrupti repellendus adipisci ducimus ipsum accusamus maxime cupiditate quisquam aspernatur tempore praesentium, amet illo. Rerum, quod?'
    },
    {
      img: "https://www.homesalon.in/uploads/category/1665067519.jpg",
      name: "Makeup",
      discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nulla reiciendis doloremque recusandae illum corrupti repellendus adipisci ducimus ipsum accusamus maxime cupiditate quisquam aspernatur tempore praesentium, amet illo. Rerum, quod?'
    },
    {
      img: "https://www.homesalon.in/uploads/category/1653330058.jpg",
      name: "Fre-Bridal", 
       discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nulla reiciendis doloremque recusandae illum corrupti repellendus adipisci ducimus ipsum accusamus maxime cupiditate quisquam aspernatur tempore praesentium, amet illo. Rerum, quod?'
    

    },
    {
      img: "https://www.homesalon.in/uploads/category/1653328547.jpg",
      name: "Body Deals",
      price: 504,
    },
    {
      img: "https://www.homesalon.in/uploads/category/1653330008.jpg",
      name: "Bridal Makeup",
    },
    {
      img: "https://www.homesalon.in/uploads/category/1653330162.jpg",
      name: "Threading",
    },
  ]);

  useEffect(() => {
    setServices(services);
  }, []);

  return (
    <>
      <h1>Our Services</h1>
      <div className="container">
           
      {services.map(k => {
        return (
         

            <div className="card-wrap">
              <div className="card-header four">
                <img src={k.img} className="card-header four" width="139px" height="139px" alt="" />
                <i className="fab fa-js-square"></i>
              </div>
              <div className="card-content">
                <p className="card-title">{k.name}</p>
                <p className="card-text">INR {k.price}</p>
              
                <a href="#"><button className="card-btn four">Book Now</button></a>
              </div>
            </div>
          
        );
      })}
      </div>
    </>
  );
}
