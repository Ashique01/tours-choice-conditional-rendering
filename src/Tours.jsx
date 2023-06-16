import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="text-center mt-5">
        <h2 className="text-primary display-3 fw-bolder">My Tours</h2>
      </div>
      <div className="row">
        {tours.map((tour) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-12">
              <Tour {...tour} key={tour.id} removeTour={removeTour} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
