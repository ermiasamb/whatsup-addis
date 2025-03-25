"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Filter, Download, Eye, MoreHorizontal } from "lucide-react";
import Link from "next/link";

// Mock data for bookings
const bookings = [
  {
    id: "b-001",
    user_name: "Abebe Kebede",
    user_email: "abebe@example.com",
    event: "Tech Summit 2025",
    event_id: "e-001",
    ticket_type: "VIP",
    quantity: 2,
    total_price: 3000,
    payment_status: "Completed",
    created_at: "2025-03-01T10:00:00",
  },
  {
    id: "b-002",
    user_name: "Tigist Haile",
    user_email: "tigist@example.com",
    event: "Addis Music Festival",
    event_id: "e-004",
    ticket_type: "General Admission",
    quantity: 4,
    total_price: 2000,
    payment_status: "Pending",
    created_at: "2025-03-02T12:00:00",
  },
  {
    id: "b-003",
    user_name: "Dawit Mekonnen",
    user_email: "dawit@example.com",
    event: "Business Conference 2025",
    event_id: "e-008",
    ticket_type: "Early Bird",
    quantity: 1,
    total_price: 500,
    payment_status: "Completed",
    created_at: "2025-03-02T14:30:00",
  },
  {
    id: "b-004",
    user_name: "Hanna Girma",
    user_email: "hanna@example.com",
    event: "Art Exhibition",
    event_id: "e-006",
    ticket_type: "Premium",
    quantity: 2,
    total_price: 1200,
    payment_status: "Failed",
    created_at: "2025-03-03T09:15:00",
  },
  {
    id: "b-005",
    user_name: "Yonas Tadesse",
    user_email: "yonas@example.com",
    event: "Sports Tournament",
    event_id: "e-007",
    ticket_type: "General Admission",
    quantity: 3,
    total_price: 900,
    payment_status: "Completed",
    created_at: "2025-03-03T16:45:00",
  },
  {
    id: "b-006",
    user_name: "Sara Mohammed",
    user_email: "sara@example.com",
    event: "Tech Summit 2025",
    event_id: "e-001",
    ticket_type: "Standard",
    quantity: 1,
    total_price: 800,
    payment_status: "Completed",
    created_at: "2025-03-04T11:20:00",
  },
  {
    id: "b-007",
    user_name: "Bereket Alemu",
    user_email: "bereket@example.com",
    event: "Jazz Night",
    event_id: "e-002",
    ticket_type: "VIP",
    quantity: 2,
    total_price: 2400,
    payment_status: "Refunded",
    created_at: "2025-03-04T13:10:00",
  },
  {
    id: "b-008",
    user_name: "Meron Abebe",
    user_email: "meron@example.com",
    event: "Business Networking",
    event_id: "e-003",
    ticket_type: "Standard",
    quantity: 1,
    total_price: 600,
    payment_status: "Pending",
    created_at: "2025-03-05T09:30:00",
  },
];

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filter bookings based on search term and status filter
  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || booking.payment_status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 lg:ml-[16rem] min-h-screen bg-background">
      {/* Header with breadcrumb */}
      <div className="mb-6">
        <div className="text-sm text-muted-foreground mb-1">
          <Link href="/admin/dashboard" className="hover:underline">
            Dashboard
          </Link>{" "}
          / Bookings
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Booking Management</h1>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters - Improved layout and responsiveness */}
      <Card className="mb-6 border-none shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, event, or booking ID..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Statuses</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Failed">Failed</SelectItem>
                  <SelectItem value="Refunded">Refunded</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bookings Table - Improved spacing and readability */}
      <Card className="border-none shadow-sm overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-medium">Booking ID</TableHead>
                  <TableHead className="font-medium">Customer</TableHead>
                  <TableHead className="font-medium">Event</TableHead>
                  <TableHead className="font-medium">Tickets</TableHead>
                  <TableHead className="font-medium">Amount</TableHead>
                  <TableHead className="font-medium">Status</TableHead>
                  <TableHead className="font-medium">Date</TableHead>
                  <TableHead className="text-right font-medium">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.map((booking) => (
                  <TableRow
                    key={booking.id}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">
                            {booking.user_name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">
                            {booking.user_name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {booking.user_email}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/admin/events/${booking.event_id}`}
                        className="text-sm font-medium hover:underline"
                      >
                        {booking.event}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <span className="font-medium">{booking.quantity}</span>{" "}
                        × {booking.ticket_type}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      ETB {booking.total_price.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          booking.payment_status === "Completed"
                            ? "default"
                            : booking.payment_status === "Pending"
                            ? "secondary"
                            : booking.payment_status === "Refunded"
                            ? "outline"
                            : "destructive"
                        }
                        className="text-xs font-medium"
                      >
                        {booking.payment_status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(booking.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="h-8 w-8"
                        >
                          <Link href={`/admin/bookings/${booking.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <div className="rounded-full bg-muted w-12 h-12 flex items-center justify-center mb-3">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="font-medium mb-1">No bookings found</p>
              <p className="text-sm text-muted-foreground max-w-sm">
                Try adjusting your search or filter to find what you&apos;re
                looking for.
              </p>
            </div>
          )}

          <div className="p-4 border-t">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div>Showing 1-8 of 3,842 bookings</div>
              <div className="flex items-center gap-2">
                <span>Rows per page:</span>
                <Select defaultValue="8">
                  <SelectTrigger className="h-8 w-[70px]">
                    <SelectValue placeholder="8" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="16">16</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="32">32</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
