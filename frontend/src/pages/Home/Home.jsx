import React from 'react';
import './Home.css';


// Define ExpenseTracker component outside Home
function ExpenseTracker() {
  const addExpenses = () => {
    console.log("Add expenses button clicked");
  };

  const viewExpenses = () => {
    console.log("View expenses button clicked");
  };

  const viewReport = () => {
    console.log("View report button clicked");
  };

  return (
    <div>
      <button className='btn add-expenses' onClick={addExpenses}>Add expenses</button>
      <button className='btn view-expenses' onClick={viewExpenses}>View expenses</button>
      <button className='btn view-report' onClick={viewReport}>View Report</button>
    </div>
  );
}
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Smart Finance Tracker</h1>
        <p>
          Track your expenses and manage your finances effectively.
          Stay on top of your budget with our easy-to-use finance tracker app.
        </p>
        <ExpenseTracker />
      </div>
    </div>
  );
};


export default Home;
