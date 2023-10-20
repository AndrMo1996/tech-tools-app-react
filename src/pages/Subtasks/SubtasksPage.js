import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Container, Grid, TextField } from "@mui/material";
import { Oval } from "react-loader-spinner";
import Checkbox from "../../components/checkbox/Checkbox";

import { NOT_COMPLETED_STATUSES } from "../../config/data/SubtasksConsts";
import {
  clearEntities,
  createSubtasks,
  getSubtaskEntities,
  toggleEntitySelected,
  toggleEntityTypeSelected,
} from "../../store/subtasksSlice";

import "./subtasks.css";

const SubtasksPage = () => {
  const [appKey, setAppKey] = useState('');
  const [taskId, setTaskId] = useState('');
  const [isSample, setIsSample] = useState(false);

  const { status, error, entities, entityTypes } = useSelector(
    (state) => state.subtasks
  );
  const dispatch = useDispatch();

  const handleGetEntities = async () => {
    dispatch(clearEntities());
    dispatch(getSubtaskEntities(appKey));
  };

  const handleCreateSubtasks = () => {
    dispatch(createSubtasks(taskId));
  };

  const handleOnChangeAppKey = (e) => {
    setAppKey(e.target.value);
  };

  const handleOnChangeTaskId = (e) => {
    setTaskId(e.target.value);
  };

  return (
    <div>
      <div className="subtask-menu">
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
            <Button variant="contained" onClick={handleGetEntities}>
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

        <div className="taskId-form">
          <div className="input-form">
            <TextField
              id="standard-basic"
              label="Enter Task Id"
              variant="standard"
              required
              style={{ width: 150 }}
              value={taskId}
              onChange={handleOnChangeTaskId}
            />
            <Button variant="contained" onClick={handleCreateSubtasks}>
              Create Subtasks
            </Button>
          </div>
          <div className="checkbox-form">
            <div className="checkbox-item">
              <Checkbox
                id="isSample"
                title="Is Sample Migration?"
                checked={isSample}
                onChangeHandle={() => setIsSample(!isSample)}
              />
            </div>
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
        <div className="entities-box">
          <Grid container spacing={2}>
            {entities.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Checkbox
                  id={item.id}
                  title={item.entity}
                  checked={item.isSelected}
                  onChangeHandle={() => dispatch(toggleEntitySelected(item.id))}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SubtasksPage;
