import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getChoices } from "../store/choices";

import Navbar from "../components/Navbar";
import SubmissionForm from "../components/SubmissionForm";
import SummaryTable from "../components/SummaryTable";
import PageNotFound from "../components/PageNotFound";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    const choices = await dispatch(getChoices());
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SubmissionForm />} />
        <Route path="/choices" element={<SummaryTable />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
