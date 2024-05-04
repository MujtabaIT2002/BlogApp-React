import { useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error('Could not fetch the data');
        }
        const data = await response.json();
        setData(data);
        setPending(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [url]); 

  return { data, pending, error };
}

export default useFetchData;
