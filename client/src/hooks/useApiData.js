import { useState, useEffect } from 'react';

export const useApiData = (endpoint) => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    console.log('useEffect fired from useApiData hook');

    fetch(endpoint)
      .then(response => response.json())
      .then(data => setResponseData({ data }))
      .catch(error => console.log(error));

  }, [endpoint]);

  return [responseData, setResponseData];
}