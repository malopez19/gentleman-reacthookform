import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null; 

interface FetchDataParams<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}

export const useFetch = <T>(url: string): FetchDataParams<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const fetchData = async () => {

      try {
        const response = await fetch(url, controller);
        if (!response.ok) {
          throw new Error("Error en la petición fetch");
        }

        const data = await response.json();

        setData(data);
        setError(null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};
