import React, { useState, useCallback } from 'react';

import { API_URL } from '../../config/config';

export default function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (uri, method = 'GET', body = null, headers) => {
      setIsLoading(true);

      try {
        const res = await fetch(`${API_URL}/${uri}`, {
          method,
          body,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const resData = await res.json();

        if (!res.ok) {
          throw new Error(resData.message);
        }

        setIsLoading(false);
        return resData;
      } catch (err) {
        setIsLoading(false);

        setError(err.message);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  return { sendRequest, isLoading, error, clearError };
}
