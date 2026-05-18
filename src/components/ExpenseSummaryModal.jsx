import React from 'react';

const ExpenseSummaryModal = ({ isOpen, onClose }) => {
  // If isOpen is false, don't render anything
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      
      {/* Modal Box */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 max-w-full m-4">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
          Expense Summary
        </h2>
        
        <div className="my-6 text-center">
          <p className="text-gray-600 mb-2">Your total expenses are:</p>
          <p className="text-4xl font-bold text-blue-600">₹5,000</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ExpenseSummaryModal;