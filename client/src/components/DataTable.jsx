import React from "react";
import MaterialTable from "material-table";

const DataTable = ({ columns, data, title, actions }) => {
  return (
    <div>
      <MaterialTable
        columns={columns}
        data={data}
        title={title}
        actions={actions}
      />
    </div>
  );
};

export default DataTable;
