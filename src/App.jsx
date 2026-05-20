import { useMemo, useState } from "react";
import { FiBarChart2, FiBriefcase, FiMap, FiTrendingUp, FiUsers } from "react-icons/fi";
import GroupCard from "./components/GroupCard";
import AdditionalExpenseForm from "./components/AdditionalExpenseForm";
import ExpenseSummaryModal from "./components/ExpenseSummaryModal";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const initialGroups = [
  {
    id: "csk",
    icon: <FiUsers className="h-7 w-7" />,
    title: "CSK Cricket Team",
    summary: "Ticket Fees & Gear",
    budget: 52000,
    accent: "from-sky-500 to-blue-600",
  },
  {
    id: "goa",
    icon: <FiMap className="h-7 w-7" />,
    title: "Goa Trip",
    summary: "Travel & Hotel",
    budget: 78000,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "office",
    icon: <FiBriefcase className="h-7 w-7" />,
    title: "Office Event",
    summary: "Catering & Supplies",
    budget: 43000,
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    id: "marketing",
    icon: <FiUsers className="h-7 w-7" />,
    title: "Marketing Team",
    summary: "Campaign & Ads",
    budget: 62000,
    accent: "from-orange-500 to-amber-600",
  },
];

const initialExpenses = [
  {
    id: 1,
    groupId: "csk",
    title: "Team meal",
    amount: 2200,
    date: "2026-05-10",
    description: "Lunch before practice",
  },
  {
    id: 2,
    groupId: "csk",
    title: "Uniforms",
    amount: 8600,
    date: "2026-05-12",
    description: "Match jerseys and caps",
  },
  {
    id: 3,
    groupId: "goa",
    title: "Hotel booking",
    amount: 31000,
    date: "2026-05-05",
    description: "Three nights stay",
  },
  {
    id: 4,
    groupId: "goa",
    title: "Flight tickets",
    amount: 17600,
    date: "2026-05-07",
    description: "Round-trip tickets",
  },
  {
    id: 5,
    groupId: "office",
    title: "Office snacks",
    amount: 4200,
    date: "2026-05-09",
    description: "Refreshments for meeting",
  },
  {
    id: 6,
    groupId: "office",
    title: "Decor items",
    amount: 8200,
    date: "2026-05-11",
    description: "Event decorations and banners",
  },
  {
    id: 7,
    groupId: "marketing",
    title: "Social ads",
    amount: 15000,
    date: "2026-05-08",
    description: "Promoted post campaigns",
  },
  {
    id: 8,
    groupId: "marketing",
    title: "Design assets",
    amount: 7800,
    date: "2026-05-13",
    description: "Creative design and copy",
  },
];

function App() {
  const [groups] = useState(initialGroups);
  const [selectedGroupId, setSelectedGroupId] = useState(initialGroups[0].id);
  const [expenses, setExpenses] = useState(initialExpenses);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedGroup = useMemo(
    () => groups.find((group) => group.id === selectedGroupId),
    [groups, selectedGroupId],
  );

  const groupExpenses = useMemo(
    () => expenses.filter((expense) => expense.groupId === selectedGroupId),
    [expenses, selectedGroupId],
  );

  const overallTotal = useMemo(
    () => expenses.reduce((sum, expense) => sum + expense.amount, 0),
    [expenses],
  );

  const groupTotal = useMemo(
    () => groupExpenses.reduce((sum, expense) => sum + expense.amount, 0),
    [groupExpenses],
  );

  const handleAddExpense = (expense) => {
    const nextExpense = {
      id: Date.now(),
      groupId: selectedGroupId,
      ...expense,
    };
    setExpenses((prev) => [nextExpense, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 rounded-3xl border border-white/10 bg-slate-900/90 px-6 py-7 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-200 ring-1 ring-cyan-400/20">
                <FiTrendingUp className="h-4 w-4" /> Expense Dashboard
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Manage group expenses with clarity and speed.
              </h1>
              <p className="mt-4 max-w-xl text-slate-300 sm:text-lg">
                Select a group, add expenses, and view instant totals in a polished dashboard.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-950/80 p-5 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Groups</p>
                <p className="mt-3 text-3xl font-semibold text-white">{groups.length}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Selected group</p>
                <p className="mt-3 text-3xl font-semibold text-white">{selectedGroup?.title}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Total spent</p>
                <p className="mt-3 text-3xl font-semibold text-cyan-300">{currency.format(overallTotal)}</p>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-10 rounded-3xl bg-white/5 p-6 shadow-lg shadow-slate-950/20 ring-1 ring-white/10 backdrop-blur-xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Your Groups</h2>
              <p className="mt-2 text-sm text-slate-400">Tap to switch between expense groups.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300 ring-1 ring-white/10">
              <FiBarChart2 className="h-4 w-4" /> Active group spending: {currency.format(groupTotal)}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {groups.map((group) => (
              <GroupCard
                key={group.id}
                icon={group.icon}
                title={group.title}
                summary={group.summary}
                budget={group.budget}
                active={selectedGroupId === group.id}
                accent={group.accent}
                onClick={() => setSelectedGroupId(group.id)}
              />
            ))}
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white/5 p-6 shadow-lg shadow-slate-950/20 ring-1 ring-white/10 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">Add Expense</h2>
                <p className="mt-2 text-sm text-slate-400">Add a new expense to the selected group.</p>
              </div>
              <span className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300 ring-1 ring-white/10">
                {selectedGroup?.title}
              </span>
            </div>
            <AdditionalExpenseForm selectedGroup={selectedGroup} onAddExpense={handleAddExpense} />
          </div>

          <aside className="rounded-3xl bg-white/5 p-6 shadow-lg shadow-slate-950/20 ring-1 ring-white/10 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Recent expenses</h2>
                <p className="mt-1 text-sm text-slate-400">Latest expenses for this group.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Summary
              </button>
            </div>

            {groupExpenses.length > 0 ? (
              <div className="space-y-4">
                {groupExpenses.slice(0, 5).map((expense) => (
                  <div key={expense.id} className="rounded-3xl bg-slate-950/80 p-4 ring-1 ring-white/10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-semibold text-white">{expense.title}</p>
                        <p className="mt-1 text-sm text-slate-400">{expense.description}</p>
                      </div>
                      <p className="text-lg font-semibold text-cyan-300">{currency.format(expense.amount)}</p>
                    </div>
                    <p className="mt-3 text-sm text-slate-500">{expense.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-700/70 bg-slate-950/70 p-6 text-center text-slate-400">
                No expenses added yet for this group.
              </div>
            )}
          </aside>
        </section>
      </div>

      <ExpenseSummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        total={overallTotal}
        groupTotal={groupTotal}
        recentExpenses={groupExpenses}
        selectedGroup={selectedGroup}
      />
    </div>
  );
}

export default App;
