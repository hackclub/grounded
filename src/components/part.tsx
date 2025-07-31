import React from 'react';

const Part = ({ title = "Part", desc = "Cool Project", quantity = 3, link = '' }) => {
  return (
    <div
      className="relative bg-cover bg-center rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:shadow-xl transition-shadow duration-300"
      style={{
        backgroundImage: `url(${link})`,
        height: '220px',
        minWidth: '280px',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-end p-4 text-white">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-slate-300">{desc}</p>
        <span className="mt-2 text-sm font-medium text-emerald-400">Quantity: {quantity}</span>
      </div>
    </div>
  );
};

export default Part;
