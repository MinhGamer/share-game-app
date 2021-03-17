import React, { useState } from 'react';

import { API_URL } from '../../config/config';

export default function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (uri, method = 'GET', body, headers) => {
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/${uri}`, {
        method,
        body,
        headers,
      });

      const resData = await res.json();

      setIsLoading(false);
      return resData;
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return { sendRequest, isLoading, error };
}
