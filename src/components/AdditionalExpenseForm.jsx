import { useState } from "react";

const AdditionalExpenseForm = ({ selectedGroup, onAddExpense }) => {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedGroup) {
      return;
    }

    onAddExpense({
      title: title.trim() || "New expense",
      description: description.trim() || "No description",
      amount: Number(amount),
      date,
    });

    setAmount("");
    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-200">Expense name</label>
        <input
          type="text"
          placeholder="e.g. Transport, snacks, hotel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-200">Amount</label>
        <input
          type="number"
          min="1"
          placeholder="₹ 1,500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-200">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            required
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-200">Category</label>
          <select
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          >
            <option value="">Select category</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Equipment">Equipment</option>
            <option value="Hotel">Hotel</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Add expense to {selectedGroup?.title || "group"}
      </button>
    </form>
  );
};

export default AdditionalExpenseForm;