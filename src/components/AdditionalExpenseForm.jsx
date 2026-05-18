import { useState } from "react";

const AdditionalExpenseForm = () => {
  // State for form inputs (Beginner level state management)
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Expense Added:", { amount, description, date });
    alert("Expense added successfully!");
    
    // Clear the form after submission
    setAmount("");
    setDescription("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      {/* Amount Input */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Amount
        </label>
        <input
          type="number"
          placeholder="Enter amount (e.g., 500)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      {/* Description Input */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <input
          type="text"
          placeholder="What was this expense for?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      {/* Date Input */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2 transition-colors"
      >
        Add Expense
      </button>
    </form>
  );
};

export default AdditionalExpenseForm;