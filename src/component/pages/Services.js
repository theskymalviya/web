import React from "react";
import ServiceCard from "../ServiceCard";
import Sdata from "../Sdata";

const Services = () => {
  return (
    <>
      <section>
        <div className="container my-4">
          <h1 className="text-center py-lg-4 py-2">Our Services</h1>
          <div className="row gy-5">
            {Sdata.map((val) => {
              const { id, title, disc, img } = val;
              return (
                <ServiceCard
                  key={id}
                  titleText={title}
                  discText={disc}
                  imgSrc={img}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
