import React from "react";
import useFetchData from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data, pending, error } = useFetchData('http://localhost:8000/blogs');

  return (
    <div className="home">
      <h1>Homepage</h1>
      {error && <div>{error}</div>}
      {pending && <div>Loading data...</div>}
      {data && <BlogList b={data} />}
    </div>
  );
};

export default Home;
