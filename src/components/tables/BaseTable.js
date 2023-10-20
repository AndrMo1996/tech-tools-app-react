import MaterialTable from "material-table";

const BaseTable = ({ name, columns, data }) => {
  return (
    <MaterialTable
      title={name}
      columns={columns}
      data={data}
      options={{
        exportButton: true,
        exportAllData: true,
        grouping: true,
        sorting: true,
        headerStyle: {
          backgroundColor: "#1F2937",
          color: "#FFF",
        },
      }}
    />
  );
}

export default BaseTable;
