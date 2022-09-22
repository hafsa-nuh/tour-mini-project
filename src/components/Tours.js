import React from "react";
import Tour from "./Tour";
const Tours = ({tours,removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {/* we are iterating on the child which is the Tour  */}
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} ></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
