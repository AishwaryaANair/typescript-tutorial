// types/transaction.ts

export type TransactionCategory =
  | "food"
  | "transport"
  | "entertainment"
  | "shopping"
  | "utilities"
  | "income"
  | "other";

export type TransactionType = "income" | "expense";

export interface Transaction {
  id: string;
  amount: number;
  category: TransactionCategory;
  type: TransactionType;
  description: string;
  date: Date;
  createdAt: Date;
}

export interface CreateTransactionData {
  amount: number;
  category: TransactionCategory;
  type: TransactionType;
  description: string;
  date: string; // Form will give us string, we'll convert to Date
}

// Helper type for form validation
export interface TransactionFormErrors {
  amount?: string;
  category?: string;
  type?: string;
  description?: string;
  date?: string;
}
