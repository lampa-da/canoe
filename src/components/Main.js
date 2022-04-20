import React, { useEffect, createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {getChoices} from "../store/choices"

import SubmittionForm from "../components/SubmittionForm";
import SummaryTable from "../components/SummaryTable";
import PageNotFound from "../components/PageNotFound";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    const choices = await dispatch(getChoices());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubmittionForm />} />
        <Route path="/choices" element={<SummaryTable />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main;