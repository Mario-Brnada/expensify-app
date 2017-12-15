import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpnsesSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
  <div>
    <ExpnsesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;