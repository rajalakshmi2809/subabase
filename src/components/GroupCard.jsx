import React from 'react';

const GroupCard = ({ icon, title, summary, budget, active, accent, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full flex-col justify-between rounded-3xl border px-5 py-6 text-left transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-cyan-400/40 ${
        active
          ? 'border-cyan-400/60 bg-slate-900/90 shadow-[0_20px_60px_-30px_rgba(56,189,248,0.9)]'
          : 'border-white/10 bg-slate-950/70'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-linear-to-br ${accent} text-white shadow-lg shadow-slate-950/20`}>
          {icon}
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{summary}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-slate-800/90 px-3 py-1 text-sm text-slate-300">Budget</span>
        <span className="text-sm font-semibold text-cyan-300">₹{budget.toLocaleString()}</span>
      </div>
    </button>
  );
};

export default GroupCard;