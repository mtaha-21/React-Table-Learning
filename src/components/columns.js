import { format } from "date-fns";
// import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Name",
    Footer: "First Name",
    accessor: "first_name",
    disableFilters: true,
  },
  {
    Header: "Company Name",
    Footer: "Last Name",
    accessor: "last_name",
    disableFilters: true,
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    disableFilters: true,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    disableFilters: true,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    disableFilters: true,
  },
];
export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
