// app/page.tsx
"use client";

import { useState } from "react";
import { Transaction, CreateTransactionData } from "../types/transactions";
import TransactionForm from "../components/TransactionForm";

export default function HomePage() {
  // State with proper TypeScript typing
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Function to handle new transactions with proper typing
  const handleAddTransaction = (formData: CreateTransactionData) => {
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      amount: formData.amount,
      category: formData.category,
      type: formData.type,
      description: formData.description,
      date: new Date(formData.date), // Convert string to Date
      createdAt: new Date(),
    };

    setTransactions((prev) => [newTransaction, ...prev]); // Add to beginning of array
  };

  return (
    <main className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Personal Finance Tracker</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Form Section */}
        <div>
          <TransactionForm onSubmit={handleAddTransaction} />
        </div>

        {/* Transaction List Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          {transactions.length === 0 ? (
            <p className="text-gray-500">
              No transactions yet. Add your first one!
            </p>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="p-4 border rounded-lg bg-white shadow-sm"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-600 capitalize">
                        {transaction.category} •{" "}
                        {transaction.date.toDateString()}
                      </p>
                    </div>
                    <p
                      className={`font-bold ${
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}$
                      {transaction.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
