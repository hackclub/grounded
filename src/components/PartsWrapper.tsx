import React, { createContext, useContext, useEffect, useState } from "react";

type Part = {
  bom: string;
  name?: string;
  description?: string;
  quantity?: number;
  image?: string;
  ref?: string;
  include?: boolean;
};

type PartsContextType = {
  parts: Part[];
  loading: boolean;
  error: string | null;
};

const PartsContext = createContext<PartsContextType>({
  parts: [],
  loading: true,
  error: null,
});

export const PartsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [parts, setParts] = useState<Part[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchParts = async () => {
      try {
        const res = await fetch("/api/parts");
        if (!res.ok) throw new Error(`API error: ${res.statusText}`);
        const data = await res.json();
        if (!cancelled) {
          setParts(data.filter((p: Part) => p.include));
        }
      } catch (err: any) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchParts();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PartsContext.Provider value={{ parts, loading, error }}>
      {children}
    </PartsContext.Provider>
  );
};

export const useParts = () => useContext(PartsContext);
