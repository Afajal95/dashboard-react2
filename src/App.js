import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Navbar />
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
