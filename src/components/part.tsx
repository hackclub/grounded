import React from 'react';

const Part = ({ title = "Part", desc = "Cool Project", quantity = 3, link = '', ref = ''}) => {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:shadow-xl transition-shadow duration-300 min-w-[280px]">
      {link && (
        <img
          src={link}
          alt={title}
          className="w-full h-48 object-contain"
        />
      )}
      <div className="p-4 text-white">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-slate-300">{desc}</p>
        <span className="mt-2 block text-sm font-medium text-emerald-400">
          Quantity: {quantity}
        </span>
        {link && (
          <a
            href={ref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-blue-400 hover:underline"
          >
            reference link
          </a>
        )}
      </div>
    </div>
  );
};

export default Part;
