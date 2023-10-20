import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import EstimateView from "./components/EstimateView/EstimateView";
import Checkbox from "../../components/checkbox/Checkbox";

import { Button, TextField } from "@mui/material";
import { Oval } from "react-loader-spinner";

import { NOT_COMPLETED_STATUSES } from "../../config/data/EstimatorConsts";
import {
  getEstimate,
  clearEstimate,
  toggleEntityTypeSelected,
} from "../../store/estimateSlice";

import "./estimator.css";

const EstimatorPage = () => {
  const [appKey, setAppKey] = useState('');

  const { status, error, entityTypes } = useSelector((state) => state.estimate);
  const dispatch = useDispatch();

  const handleGetEstimate = () => {
    dispatch(clearEstimate(""));
    dispatch(getEstimate(appKey));
  };

  const handleOnChangeAppKey = (e) => {
    setAppKey(e.target.value);
  };

  return (
    <div>
      <div className="control-menu">
        <div className="appKey-form">
          <div className="input-form">
            <TextField
              id="standard-basic"
              label="Enter Application Key"
              variant="standard"
              required
              style={{ width: 400 }}
              value={appKey}
              onChange={handleOnChangeAppKey}
            />
            <Button variant="contained" onClick={handleGetEstimate}>
              Get Entities
            </Button>
          </div>

          <div className="checkbox-form">
            {entityTypes.map((item) => (
              <div key={item.id} className="checkbox-item">
                <Checkbox
                  id={item.id}
                  title={item.title}
                  checked={item.isSelected}
                  onChangeHandle={() =>
                    dispatch(toggleEntityTypeSelected(item.id))
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="result-box">
        <div className="status-bar">
          {!NOT_COMPLETED_STATUSES.includes(status) && (
            <Oval color="green" height={15} width={15} />
          )}
          <p>{status}</p>
        </div>
        <EstimateView />
      </div>
    </div>
  );
};

export default EstimatorPage;
