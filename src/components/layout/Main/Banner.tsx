import { Carousel } from "antd";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      style={{
        marginTop: "30px",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <Carousel autoplay>
        <div>
          <img
            src="https://images.unsplash.com/photo-1610072175216-df383b91b89d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner3"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1546361897-fab5d5344bf8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner2"
            className="carousel-image"
          ></img>
        </div>
        <div style={{ backgroundImage: "" }}>
          <img
            src="https://images.unsplash.com/photo-1602470708453-122a60d19f5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner1"
            className="carousel-image"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
