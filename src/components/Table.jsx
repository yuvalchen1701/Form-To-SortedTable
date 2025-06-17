import { useState, useMemo } from "react";
import "./Table.css";
import SortBtn from "./SortBtn.jsx";
export default function Table({ list }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const showTable = list.length > 0;

  const sortedList = useMemo(() => {
    let sortTable = [...list];

    if (sortConfig.key) {
      sortTable.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        return 0;
      });
    }
    return sortTable;
  }, [list, sortConfig]);

  const handleSortConfig = (key, direction) => {
    setSortConfig({ key, direction });
  };

  return (
    <div className="table-container">
      {showTable && (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>
                <div className="th-group">
                  Algorithm question
                  <SortBtn sortKey="algorithm" onSort={handleSortConfig} />
                </div>
              </th>
              <th>
                <div className="th-group">
                  Front-end question
                  <SortBtn sortKey="frontEnd" onSort={handleSortConfig} />
                </div>
              </th>
              <th>
                <div className="th-group">
                  Total
                  <SortBtn sortKey="total" onSort={handleSortConfig} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedList.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.algorithm}</td>
                <td>{row.frontEnd}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
