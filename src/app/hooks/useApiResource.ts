import { useEffect, useState } from 'react';

interface ApiResourceState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApiResource<T>(
  loader: () => Promise<T>,
  dependencies: ReadonlyArray<unknown>,
): ApiResourceState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError(null);

    loader()
      .then((value) => {
        if (!cancelled) {
          setData(value);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message || 'Failed to load data.');
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, dependencies);

  return { data, loading, error };
}
