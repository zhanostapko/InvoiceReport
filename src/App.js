import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TableWrapper from './components/General/TableWrapper';
import './App.css';
import NotFound from './components/UI/NotFound/NotFound';
import Header from './components/UI/Header/Header';
import Detail from './components/Detail/Detail';
import Footer from './components/UI/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TableWrapper />} />
        <Route path="/:invoiceId" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
