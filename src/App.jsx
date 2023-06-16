import { useEffect, useState } from "react";
import "./App.css";
import data from "./data.json";
import Tours from "./Tours";
import Loading from "./Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    return setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const tours = data;
      setTours(tours);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h3>There was an error</h3>;
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2 className="text-center mt-5 text-danger display-3 fw-bolder">
          No Tours Available
        </h2>
        <div className="d-grid justify-content-center gap-2 col-12">
          <button
            className="btn btn-primary"
            onClick={fetchTours}
            type="button"
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="container">
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    </main>
  );
}

export default App;
