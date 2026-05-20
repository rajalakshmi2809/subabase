import React from 'react';

const ExpenseSummaryModal = ({ isOpen, onClose, total, groupTotal, recentExpenses, selectedGroup }) => {
  if (!isOpen) {
    return null;
  }

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-950 text-slate-100 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Expense summary</p>
            <h2 className="mt-2 text-3xl font-semibold">{selectedGroup?.title || "All groups"}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/20"
          >
            Close
          </button>
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
            <p className="text-sm text-slate-400">Group total</p>
            <p className="mt-3 text-3xl font-semibold text-cyan-300">{formatCurrency(groupTotal)}</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
            <p className="text-sm text-slate-400">Overall spend</p>
            <p className="mt-3 text-3xl font-semibold text-cyan-300">{formatCurrency(total)}</p>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-6">
          <h3 className="text-xl font-semibold text-white">Recent expenses</h3>
          {recentExpenses.length > 0 ? (
            <div className="mt-4 space-y-4">
              {recentExpenses.slice(0, 6).map((expense) => (
                <div key={expense.id} className="rounded-3xl bg-slate-900/95 p-4 ring-1 ring-white/10">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">{expense.title}</p>
                      <p className="mt-1 text-sm text-slate-400">{expense.date}</p>
                    </div>
                    <p className="text-sm font-semibold text-cyan-300">{formatCurrency(expense.amount)}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-400">{expense.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-3xl bg-slate-900/80 p-5 text-sm text-slate-400">No expenses added yet for this group.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummaryModal;