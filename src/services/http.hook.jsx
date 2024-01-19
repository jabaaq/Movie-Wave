import { useState } from "react";

const imageBaseURL = 'https://image.tmdb.org/t/p/"';

// const fetchDataFromServer = function (url, callback, optionalParam) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => callback(data, optionalParam));
// };

// export { fetchDataFromServer, imageBaseURL };

const useHttp = () => {
  const [process, setProcess] = useState("");
  const [error, setError] = useState(null);

  const request = async (
    url,
    method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" }
  ) => {
    setProcess("loading");

    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new error(`Couldn't fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      setProcess("confirmed");
      return data;
    } catch (error) {
      setError(error.message);
      setProcess("error");
      throw error;
    }
  };
  return { request };
};

export { useHttp };
