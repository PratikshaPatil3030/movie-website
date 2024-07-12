
"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";


export default function Slider({ movies }) {
  
  return (
    <div>
       <Carousel className="slider">
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <div  style={{backgroundImage:`url(${movie.image})`,
                    backgroundSize:"cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition:"center",
                    height:"auto",
                    width:"auto",
          }} >
          <Image
                
                src={movie.image}
                alt={movie.title}
               height={200}
               width={300}
               style={{
                marginTop:"60px",
                height: "80vh",
                width: "100%",
                objectFit: "contain",
                display: "block",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
              }}
              />
         </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}
