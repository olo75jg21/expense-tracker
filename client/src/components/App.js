import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import Dashboard from './dashboard/Dashboard';
import Expenses from './expense/Expenses';
import Header from './Header';
import Incomes from './income/Incomes';
import Settings from './Settings';
import Welcome from './Welcome';

import { fetchUser } from '../actions/index';

const App = () => {
  const dispatch = useDispatch();

  // every time componenet renders, check if user is logged in
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <BrowserRouter>
      <div className="container-fluid bg-lightd vh-100'">
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/incomes" element={<Incomes />} />
          <Route exact path="/expenses" element={<Expenses />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route path="*" element={<h1>There is nothing here!</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;