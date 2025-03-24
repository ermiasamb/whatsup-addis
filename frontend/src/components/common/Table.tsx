import React from "react";

interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} className="py-2 px-4 border-b">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
