import { useState } from "react";

const Tour = ({ id, title, description, image, cost, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div
      className="card mt-3 mx-auto mb-3"
      style={{ width: "40rem", minHeight: "15rem" }}
    >
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="d-flex justify-content-between mb-2">
          <h5 className="card-title font-monospace fw-bolder">{title}</h5>
          <h6 className="bg-info bg-opacity-25 text-primary opacity-100 p-1 fw-bold">
            {cost}
          </h6>
        </div>
        <p className="card-text text-secondary text-start font-monospace">
          {readMore ? description : `${description.substring(0, 250)}...`}
          <a
            href="#"
            style={{ textDecoration: "none", marginLeft: "2px" }}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show less" : "Read more"}
          </a>
        </p>
        <div className="d-grid gap-2 col-6 mx-auto">
          <a
            href="#"
            className="btn btn-outline-danger"
            onClick={() => removeTour(id)}
          >
            Not Interested
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tour;
