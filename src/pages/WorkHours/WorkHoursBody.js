import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import BaseTable from "../../components/tables/BaseTable";
import TotalTable from "../../components/tables/TotalTable";

import {
  WorkHoursTableColums,
  TechEngineers,
} from "../../config/data/WorkHoursTableColumns";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function apllyProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const WorkHoursBody = () => {
  const [value, setValue] = useState(0);
  const workhours = JSON.parse(
    JSON.stringify(useSelector((state) => state.workhours.workhours))
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Billable Hours" {...apllyProps(0)} />
          <Tab label="Non-Billable Hours" {...apllyProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <div>
          <BaseTable
            name="Billable Hours"
            columns={WorkHoursTableColums}
            data={workhours.billable}
          />
          <br />
          <TotalTable columns={TechEngineers} data={workhours.total_billable} />
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <BaseTable
          name="Non-Billable Hours"
          columns={WorkHoursTableColums}
          data={workhours.non_billable}
        />
        <br />
        <TotalTable columns={TechEngineers} data={workhours.total_non_billable} />
      </TabPanel>
    </div>
  );
};

export default WorkHoursBody;
