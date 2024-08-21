import React, { useEffect, useState } from "react";
import "../Homesection1/homesection.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Homesection = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/home')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data[0]); 
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        setCurrent(prev => (prev + 1) % data.Banner_images.length);
      }, 3000); 
      return () => clearInterval(interval);
    }
  }, [data]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <>
      <section>
        <div className="full-width">
          <div className="width-img" data-aos="slide-right"></div>
          <div className="full-widths" data-aos="fade-left">
            <div className="content-flex">
              <div className="main-content-1320">
                <div className="padding-dft">
                  <div className="adventure">
                    <div className="adventure-main">
                      <div className="adventure-flex">
                        <div className="adventure-left" data-aos="slide-right">
                          
                          <p className="find">{data.banner_heading}</p>
                          <p className="let"> {data.banner_subTitle}</p>
                          <p className="amet">{data.banner_text}</p>
                          <p className="nonummy"></p>
                        </div>
                        <div className="adventure-right">
                          <div className="image-container">
                            
                            {data.Banner_images.map((image, index) => (
                              <img
                                key={index}
                                src={`http://localhost:8080/homebannerimage/${image}`}
                                alt={`Banner ${index + 1}`}
                                className={`slide ${index === current ? 'active' : ''}`} // Active class for the current image
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homesection;





