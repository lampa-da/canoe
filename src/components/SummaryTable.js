import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChoices } from "../store/choices";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import moment from "moment";

export const SummaryTable = () => {
  const choices = useSelector((state) => state.choices);

  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    await dispatch(getChoices());
  }, []);

  useEffect(() => {
    setRows(choices);
  }, [choices]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      type: "number",
      minWidth: 80,
      flex: 0.25,
    },
    {
      field: "choiceA",
      headerName: "Choice A",
      type: "string",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "choiceB",
      headerName: "Choice B",
      type: "string",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "choiceC",
      headerName: "Choice C",
      type: "string",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Registration Date",
      type: "date",
      minWidth: 120,
      flex: 0.5,
      renderCell: (params) => {
        return moment(params.value).format("L");
      },
    },
  ];

  return (
    <Box
      sx={{
        my: 4,
        mx: 4,
      }}
      component="div"
    >
      <h3>The Choices of the Courses</h3>
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Box>
  );
};
export default SummaryTable;
