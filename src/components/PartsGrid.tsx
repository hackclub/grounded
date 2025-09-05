import React, { useEffect, useState } from 'react';
import Part from './part';

const PartsGrid = () => {
    const [parts, setParts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchParts = async () => {
            try {
                const response = await fetch('/api/parts');
                if (!response.ok) {
                    throw new Error(`API error: ${response.statusText}`);
                }
                const data = await response.json();
                setParts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchParts();
    }, []);

    if (loading) return <div className="text-white">Loading parts...</div>;
    if (error) return <div className="text-red-400">Error: {error}</div>;

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-12">
            {parts
                .filter((part) => part.include)
                .map((part, index) => (
                    <Part
                        key={index}
                        title={part.name || 'Unnamed Part'}
                        desc={part.description || 'No description'}
                        quantity={part.quantity || 0}
                        link={part.image || ''}
                        ref={part.ref || ''}
                    />
                ))}
        </div>

    );
};

export default PartsGrid;
