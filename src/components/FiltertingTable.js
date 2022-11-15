import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";
import { GlobalFilters } from "./GlobalFilters";

export const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // footerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <h3>React Table</h3>
      <div>Sorting, Filtering, Pagination</div>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <GlobalFilters filter={globalFilter} setFilter={setGlobalFilter} />
      <table
        {...getTableProps()}
        className="shadow-sm p-3 mb-5 bg-white rounded"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {/* <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
      <div className="pagination justify-content-end bottom">
        <button
          className="page-link"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"|<"}
        </button>{" "}
        <button
          className="page-link"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </button>{" "}
        <span style={{ padding: "5px" }}>
          {" "}
          <strong>
            {pageIndex + 1}
            {/* of {pageOptions.length} */}
          </strong>{" "}
        </span>
        <button
          className="page-link"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </button>{" "}
        <button
          className="page-link"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">|"}
        </button>{" "}
        {/* <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span> */}
        <span style={{ padding: "5px" }}>
          Rows:{" "}
          {/* Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          /> */}
        </span>{" "}
        <select
          style={{ borderRadius: "0.5rem" }}
          className="page-link"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
