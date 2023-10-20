import { formatDate } from "../../helper/helpers";

export const createSubtask = async (taskId, entity) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}jira/subtask?taskId=${taskId}&entity=${entity}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Server error. Can't create subtask");
  }

  const subtask = await response.json();
  return subtask;
};

export const getWorkhours = async (fromDate, toDate) => {
  const url = `${
    process.env.REACT_APP_BASE_API_URL
  }jira/workhours?fromDate=${formatDate(fromDate)}&toDate=${formatDate(toDate)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Server error. Can't get workhours");
  }

  const data = await response.json();
  return data;
};