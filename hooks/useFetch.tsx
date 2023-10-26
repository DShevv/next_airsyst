import { useEffect, useState } from "react";

interface Props {
  endpoint: string;
  options?: RequestInit;
}

export function useFetch<T>({ endpoint, options }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    if (!endpoint) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.airsyst.kz/${endpoint}`, options);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const resData = (await res.json()) as T;

        setData(resData);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
}
