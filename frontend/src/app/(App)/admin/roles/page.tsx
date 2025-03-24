// "use client";

// import {
//   Table,
//   TableHeader,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableHead,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { Edit, Trash } from "lucide-react";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import FeaturesDialog from "@/components/dialogue/page";

// // Define the role data structure.
// interface Role {
//   id: string;
//   name: string;
//   permissions: string[];
// }

// // Sample roles.
// const roles: Role[] = [
//   {
//     id: "R001",
//     name: "Admin",
//     permissions: ["Manage Users", "Manage Roles", "Manage Content"],
//   },
//   {
//     id: "R002",
//     name: "Editor",
//     permissions: ["Manage Content", "Publish Content"],
//   },
//   {
//     id: "R003",
//     name: "User",
//     permissions: ["View Content"],
//   },
// ];

// export default function RoleManagementPage() {
//   return (
//     <div className=" lg:ml-[16rem] space-y-6 min-h-screen bg-MainPage-primary">
//       <div className="w-[80%] mx-auto pt-8 ">
//         {/* Page Title and New Role Button */}
//         <div className="flex justify-between items-center">
//           <h1 className="font-inter text-3xl">Roles</h1>
//           {/* <Button variant="default">New Role</Button> */}
//           <FeaturesDialog />
//         </div>
//       </div>
//       <div className="w-[80%] mx-auto space-y-4 flex flex-col p-8 bg-stone-50 rounded-lg">
//         {/* Table displaying roles and permissions */}
//         <Table className="flex-grow   rounded-xl">
//           <TableHeader className="bg-stone-100">
//             <TableRow>
//               <TableHead className="text-center">Role</TableHead>
//               <TableHead className="text-center">Permissions</TableHead>
//               <TableHead className="text-center">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody className="pt-4">
//             {roles.map((role) => (
//               <TableRow key={role.id}>
//                 <TableCell className="font-medium text-center">
//                   {role.name}
//                 </TableCell>
//                 <TableCell className="text-center">
//                   <span className="border border-green p-2 text-lime-400 text-xl font-inter ml-4">
//                     {role.permissions.length}
//                   </span>
//                   {/* Display the number of permissions */}
//                 </TableCell>
//                 <TableCell className="flex justify-center">
//                   <div className="flex gap-2 ">
//                     <Button variant="ghost" size="icon">
//                       <Edit className="w-4 h-4" />
//                     </Button>
//                     <Button variant="ghost" size="icon">
//                       <Trash className="w-4 h-4 text-red-600" />
//                     </Button>
//                   </div>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <div>
//           <Pagination>
//             <PaginationContent>
//               <PaginationItem>
//                 <PaginationPrevious href="#" />
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#" isActive>
//                   1
//                 </PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">2</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">3</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationNext href="#" />
//               </PaginationItem>
//             </PaginationContent>
//           </Pagination>
//         </div>
//       </div>
//     </div>
//   );
// }
// app/role-management/page.tsx
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
