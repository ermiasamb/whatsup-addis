// app/users/page.tsx
"use client";

import { useState } from "react";
import { DataTable } from "@/components/common/DataTable";
import { Pagination } from "@/components/common/Pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Filter, MoreVertical } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  registrationDate: string;
  totalBookings: number;
  totalPayments: string;
  status: string;
  role: string;
}

const users: User[] = [
  {
    id: "U001",
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    location: "New York, USA",
    registrationDate: "2023-01-15",
    totalBookings: 12,
    totalPayments: "$1,500",
    status: "Active",
    role: "Admin",
  },
  {
    id: "U002",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "234-567-8901",
    location: "Los Angeles, USA",
    registrationDate: "2023-02-20",
    totalBookings: 8,
    totalPayments: "$1,200",
    status: "Active",
    role: "User",
  },
  {
    id: "U003",
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "345-678-9012",
    location: "Chicago, USA",
    registrationDate: "2023-03-10",
    totalBookings: 5,
    totalPayments: "$800",
    status: "Inactive",
    role: "Editor",
  },
  {
    id: "U004",
    fullName: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "456-789-0123",
    location: "Houston, USA",
    registrationDate: "2023-04-05",
    totalBookings: 15,
    totalPayments: "$2,000",
    status: "Active",
    role: "User",
  },
  {
    id: "U005",
    fullName: "Charlie Davis",
    email: "charlie.davis@example.com",
    phone: "567-890-1234",
    location: "Phoenix, USA",
    registrationDate: "2023-05-12",
    totalBookings: 10,
    totalPayments: "$1,300",
    status: "Active",
    role: "Admin",
  },
  {
    id: "U006",
    fullName: "Eve Wilson",
    email: "eve.wilson@example.com",
    phone: "678-901-2345",
    location: "Philadelphia, USA",
    registrationDate: "2023-06-18",
    totalBookings: 7,
    totalPayments: "$900",
    status: "Inactive",
    role: "User",
  },
  {
    id: "U007",
    fullName: "Frank Miller",
    email: "frank.miller@example.com",
    phone: "789-012-3456",
    location: "San Antonio, USA",
    registrationDate: "2023-07-22",
    totalBookings: 20,
    totalPayments: "$2,500",
    status: "Active",
    role: "Editor",
  },
  {
    id: "U008",
    fullName: "Grace Lee",
    email: "grace.lee@example.com",
    phone: "890-123-4567",
    location: "San Diego, USA",
    registrationDate: "2023-08-30",
    totalBookings: 3,
    totalPayments: "$400",
    status: "Inactive",
    role: "User",
  },
  {
    id: "U009",
    fullName: "Henry Garcia",
    email: "henry.garcia@example.com",
    phone: "901-234-5678",
    location: "Dallas, USA",
    registrationDate: "2023-09-14",
    totalBookings: 14,
    totalPayments: "$1,800",
    status: "Active",
    role: "Admin",
  },
  {
    id: "U010",
    fullName: "Ivy Martinez",
    email: "ivy.martinez@example.com",
    phone: "012-345-6789",
    location: "San Jose, USA",
    registrationDate: "2023-10-25",
    totalBookings: 6,
    totalPayments: "$700",
    status: "Inactive",
    role: "User",
  },
];

const columns = [
  { key: "id", label: "ID", sortable: false },
  { key: "fullName", label: "Name", sortable: true },
  { key: "email", label: "Email", sortable: true },
  { key: "phone", label: "Phone", sortable: false },
  { key: "location", label: "Location", sortable: false },
  { key: "registrationDate", label: "Reg. Date", sortable: true },
  { key: "totalBookings", label: "Bookings", sortable: true },
  { key: "totalPayments", label: "Payments", sortable: false },
  { key: "status", label: "Status", sortable: true },
  { key: "role", label: "Role", sortable: false },
];

export default function UserList() {
  const [sortColumn, setSortColumn] = useState<keyof User | undefined>(
    undefined
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (column: keyof User) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortColumn) return 0;

    const aVal = a[sortColumn];
    const bVal = b[sortColumn];

    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const renderCell = (user: User, column: { key: string }) => {
    switch (column.key) {
      case "status":
        return (
          <Badge variant={user.status === "Active" ? "default" : "destructive"}>
            {user.status}
          </Badge>
        );
      default:
        return user[column.key as keyof User];
    }
  };

  const actions = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
        <DropdownMenuItem>Change Role</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div className="p-6 space-y-4 lg:ml-[16rem] flex flex-col min-h-screen bg-MainPage-primary">
      <h1 className="font-inter text-xl">Users</h1>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <Input
            placeholder="Search users..."
            className="w-[30rem] bg-white border-stone-400"
          />
          <div className="flex gap-8">
            <Button variant="outline">Clear Filters</Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export to CSV
            </Button>
            <Button variant="default">Add User</Button>
          </div>
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px] bg-white">
              <Filter className="w-4 h-4 mr-2" />
              Filter By Column
            </SelectTrigger>
            <SelectContent>
              {columns
                .filter((col) => col.key !== "actions")
                .map((col) => (
                  <SelectItem key={col.key} value={col.key}>
                    {col.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] bg-white">
              Items per page: 10
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={sortedUsers}
        sortColumn={sortColumn}
        sortOrder={sortOrder}
        onSort={handleSort}
        renderCell={renderCell}
        actions={actions}
      />
      <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
    </div>
  );
}
