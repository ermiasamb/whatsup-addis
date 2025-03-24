// components/DataTable.tsx
"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { ArrowUp, ArrowDown } from "lucide-react";

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

interface DataTableProps<T> {
  columns: Column[];
  data: T[];
  sortColumn?: keyof T;
  sortOrder?: "asc" | "desc";
  onSort?: (column: keyof T) => void;
  renderCell: (item: T, column: Column) => React.ReactNode;
  actions?: (item: T) => React.ReactNode;
}

export function DataTable<T>({
  columns,
  data,
  sortColumn,
  sortOrder,
  onSort,
  renderCell,
  actions,
}: DataTableProps<T>) {
  return (
    <Table>
      <TableHeader className="bg-stone-100">
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.key} className="text-left">
              <div
                className={`flex items-center ${
                  col.sortable ? "cursor-pointer" : ""
                }`}
                onClick={() => col.sortable && onSort?.(col.key as keyof T)}
              >
                {col.label}
                {col.sortable && (
                  <span className="ml-2">
                    {sortColumn === col.key ? (
                      sortOrder === "asc" ? (
                        <ArrowUp className="w-4 h-4 text-gray-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-gray-600" />
                      )
                    ) : (
                      <span className="w-4 h-4 opacity-0" />
                    )}
                  </span>
                )}
              </div>
            </TableHead>
          ))}
          {actions && <TableHead>Actions</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            {columns.map((col) => (
              <TableCell key={col.key}>{renderCell(item, col)}</TableCell>
            ))}
            {actions && <TableCell>{actions(item)}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
