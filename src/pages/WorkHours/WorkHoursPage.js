import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkHours } from "../../store/workhoursSlice";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

import BarsLoader from "../../components/loader/BarsLoader";
import WorkHoursBody from "./WorkHoursBody";

import "./workhours.css";

const WorkHoursPage = () => {
  let date = new Date();

  const [fromDate, setFromDate] = useState(() => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  });
  const [toDate, setToDate] = useState(() => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  });

  const { status, error } = useSelector((state) => state.workhours);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      fromDate: fromDate,
      toDate: toDate,
    };
    dispatch(fetchWorkHours(params));
  }, [dispatch, fromDate, toDate]);

  return (
    <div className="workhours-content">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <DesktopDatePicker
            label="From Date"
            value={fromDate}
            onChange={(newDate) => {
              setFromDate(newDate);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="To Date"
            value={toDate}
            onChange={(newDate) => {
              setToDate(newDate);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>

      {status === "failed" && <Alert severity="error">{error}</Alert>}
      {status === "loading" ? <BarsLoader /> : <WorkHoursBody />}
    </div>
  );
};

export default WorkHoursPage;
