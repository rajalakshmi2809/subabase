import { useState } from "react";
import GroupCard from "./components/GroupCard";
import AdditionalExpenseForm from "./components/AdditionalExpenseForm";
import ExpenseSummaryModal from "./components/ExpenseSummaryModal";

function App() {
  // Modal State for Expenses Summary
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      {/* Page Title */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Expense Management App
        </h1>

        {/* Top Section: Group Cards */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Your Groups</h2>
          <div className="flex gap-4 flex-wrap">
            <GroupCard
              icon="🏏"
              title="CSK Cricket Team"
              summary="Ticket Fees & Gear"
            />
            <GroupCard
              icon="✈️"
              title="Goa Trip"
              summary="Travel & Hotel"
            />
          </div>
        </div>

        {/* Middle Section: Expense Form */}
        <div className="mb-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Expense</h2>
          <AdditionalExpenseForm />
        </div>

        {/* Bottom Section: Summary Action */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors"
          >
            View Expenses Summary
          </button>
        </div>

        {/* The Modal Component */}
        <ExpenseSummaryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;