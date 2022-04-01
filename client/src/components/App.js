import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Expenses from './Expenses';
import Header from './Header';
import Incomes from './Incomes';
import Settings from './Settings';
import Welcome from './Welcome';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/incomes" element={<Incomes />} />
        <Route exact path="/expenses" element={<Expenses />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route path="*" element={<h1>There is nothing here!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;