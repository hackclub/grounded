import React from "react";
import Part from "./part";
import { useParts } from "@/components/partscontext";

export default function PartsGrid() {
  const { parts, loading, error } = useParts();

  if (loading) return <div className="text-white">Loading parts...</div>;
  if (error) return <div className="text-red-400">Error: {error}</div>;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-12">
      {parts.map((part, index) => (
        <Part
          key={index}
          title={part.name || "Unnamed Part"}
          desc={part.description || "No description"}
          quantity={part.quantity || 0}
          link={part.image || ""}
          ref={part.ref || ""}
          bom={part.bom || ""}
        />
      ))}
    </div>
  );
}
