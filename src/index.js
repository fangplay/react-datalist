import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import './index.css';
import customers from './customers';
//import results1 from './results1';
//import results2 from './results2';

const columns = [
  {
    name: "Customer Name",
    selector: "customername",
    sortable: true
  },
  {
    name: "Type",
    selector: "customertier",
    sortable: true
  },
  {
    name: "Telephone",
    selector: "customerphone",
    sortable: true
  },
  {
    name: "Edit Data",
    selector: "<a>Edit</a>",
    sortable: true
  }
];

const column1 = [
  {
    name: "Total Members",
    selector: "total_members"
  },
  {
    name: "Total Mount",
    selector: "total_amount"
  },
  {
    name: "Avarage Tier",
    selector: "tier_name"
  }
];

const rows2 =[
  {
    name: "Transaction",
    selector: "totaltransaction"
  },
  {
    name: "Point",
    selector: "totalpoint"
  },
  {
    name: "Remaining Point",
    selector: "remainingpoint"
  },
  {
    name: "Lifetime",
    selector: "lifetimevalue"
  },
  {
    name: "Total Value",
    selector: "total"
  }
];

const result1 = {
  "total_members": 5,
  "total_amount": 731899,
  "tier_name": "Platinum"
};

const result2 = {
  "totaltransaction": 5,
  "totalpoint": 47699,
  "remainingpoint": 89983,
  "lifetimevalue": 985339,
  "total": 5
};

const isIndeterminate = indeterminate => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };

function App() {
  return (
    <div className="App">
      <div className="container col-md-6">
        <h3>Member Results</h3>
        <p>Total Members : {result1.total_members}</p>
        <p>Total Amount : {result1.total_amount}</p>
        <p>Tier Average : {result1.tier_name}</p>
      </div>
      <div className="container col-md-6">
        <h3>Data Results</h3>
        <p>Total Transaction : {result2.totaltransaction}</p>
        <p>Total Pionts : {result2.totalpoint}</p>
        <p>Total Remaining Piont : {result2.remainingpoint}</p>
        <p>Total Lifetime : {result2.lifetimevalue}</p>
        <p>Total Data : {result2.total}</p>
      </div>
      <div className="container col-md-12">
        <Card>
        <DataTable
          title="Customers Data"
          columns={columns}
          data={customers}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
          edit={<a>Edit</a>}
        />
        </Card>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
