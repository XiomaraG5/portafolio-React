import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { Component } from 'react';

export default class AppRouters extends Component {
  render() {
      return <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
             
          </Routes>
      </BrowserRouter>;
  }
}
