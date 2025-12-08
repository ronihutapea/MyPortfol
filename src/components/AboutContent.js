import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from "react";
import React1 from "../assets/react1.png";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Saya memiliki minat kuat di bidang pengembangan web dan marketing,
          khususnya dalam industri finance. Saya pernah ikut dalam pengembangan
          aplikasi web menggunakan C#, ASP.NET, Blazor, MySQL, dan PostgreSQL
          selama program magang, saya juga mengembangkan kemampuan dalam
          analisis pasar dan strategi pemasaran digital. Dengan semangat belajar
          tinggi dan kemampuan bekerja tim maupun mandiri, saya siap
          berkontribusi melalui solusi inovatif yang menggabungkan teknologi dan
          pemasaran.
        </p>
        <Link to="/contact" className="btn  btn-light">
          Contact
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
