import MaterialTable from "material-table";

const TotalTable = ({ columns, data }) => {
  return (
    <MaterialTable
      title="Total"
      columns={columns}
      data={data}
      options={{
        exportButton: false,
        grouping: false,
        sorting: false,
        search: false,
        paging: false,
        headerStyle: {
          backgroundColor: "#1F2937",
          color: "#FFF",
          fontSize: '14px'
        },
        tableLayout: 'auto',
      }}
    />
  );
}

export default TotalTable;
