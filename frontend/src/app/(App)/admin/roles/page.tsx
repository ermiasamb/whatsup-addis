"use client";

import { DataTable } from "@/components/common/DataTable";
import { Pagination } from "@/components/common/Pagination";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import FeaturesDialog from "@/components/dialogue/page";

interface Role {
  id: string;
  name: string;
  permissions: string[];
}

const roles: Role[] = [
  {
    id: "R001",
    name: "Admin",
    permissions: ["Manage Users", "Manage Roles", "Manage Content"],
  },
  {
    id: "R002",
    name: "Editor",
    permissions: ["Manage Content", "Publish Content"],
  },
  {
    id: "R003",
    name: "User",
    permissions: ["View Content"],
  },
];

const columns = [
  { key: "name", label: "Role" },
  { key: "permissions", label: "Permissions" },
  { key: "actions", label: "Actions" },
];

export default function RoleManagementPage() {
  interface Column {
    key: string;
    label: string;
  }

  const renderCell = (row: Role, column: Column) => {
    switch (column.key) {
      case "name":
        return row.name;
      case "permissions":
        return (
          <span className="border border-green p-2 text-lime-400 text-xl font-inter ml-4">
            {row.permissions.length}
          </span>
        );
      case "actions":
        return (
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash className="w-4 h-4 text-red-600" />
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="lg:ml-[16rem] space-y-6 min-h-screen bg-MainPage-primary">
      <div className="w-[80%] mx-auto pt-8">
        <div className="flex justify-between items-center">
          <h1 className="font-inter text-3xl">Roles</h1>
          <FeaturesDialog />
        </div>
      </div>
      <div className="w-[80%] mx-auto space-y-4 flex flex-col p-8 bg-stone-50 rounded-lg">
        <DataTable columns={columns} data={roles} renderCell={renderCell} />
        <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
      </div>
    </div>
  );
}
