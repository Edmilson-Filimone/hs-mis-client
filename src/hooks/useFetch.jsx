import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  //states
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErros] = useState(null);

  //axios get data
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url);
        const data = response.data;

        if (data) {
          setData(data);
          setLoading(false);
        }
      } catch (error) {
        setErros(errors)
      }
    }
    getData();
  }, []);

  return { data, loading, errors };
}

export default useFetch;
