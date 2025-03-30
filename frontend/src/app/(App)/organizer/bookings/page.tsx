"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Mock booking data
const mockBookings = [
  {
    id: "1",
    eventTitle: "Tech Conference 2025",
    attendeeName: "John Doe",
    ticketType: "VIP",
    bookingDate: "2025-03-01T10:00:00",
    status: "Confirmed",
  },
  {
    id: "2",
    eventTitle: "Marketing Workshop",
    attendeeName: "Jane Smith",
    ticketType: "General Admission",
    bookingDate: "2025-03-02T14:00:00",
    status: "Pending",
  },
  {
    id: "3",
    eventTitle: "Startup Pitch Night",
    attendeeName: "Alice Johnson",
    ticketType: "VIP",
    bookingDate: "2025-03-03T18:00:00",
    status: "Cancelled",
  },
];

export default function OrganizerBookingPage() {
  const [bookings] = useState(mockBookings);

  return (
    <div className="p-8 lg:ml-[16rem] min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Bookings</h1>
      </div>

      {/* Bookings Table */}
      <Card className="shadow-md">
        <CardHeader className="border-b">
          <CardTitle className="text-lg font-semibold text-gray-800">
            Booking List
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {bookings.length === 0 ? (
            <p className="text-gray-600 text-center">No bookings found.</p>
          ) : (
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="text-left text-sm font-medium text-gray-700">
                    Event
                  </TableHead>
                  <TableHead className="text-left text-sm font-medium text-gray-700">
                    Attendee
                  </TableHead>
                  <TableHead className="text-left text-sm font-medium text-gray-700">
                    Ticket Type
                  </TableHead>
                  <TableHead className="text-left text-sm font-medium text-gray-700">
                    Booking Date
                  </TableHead>
                  <TableHead className="text-left text-sm font-medium text-gray-700">
                    Status
                  </TableHead>
                  <TableHead className="text-left text-sm font-medium text-gray-700">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow
                    key={booking.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="py-4 text-sm text-gray-800">
                      {booking.eventTitle}
                    </TableCell>
                    <TableCell className="py-4 text-sm text-gray-600">
                      {booking.attendeeName}
                    </TableCell>
                    <TableCell className="py-4 text-sm text-gray-600">
                      {booking.ticketType}
                    </TableCell>
                    <TableCell className="py-4 text-sm text-gray-600">
                      {new Date(booking.bookingDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        variant={
                          booking.status === "Confirmed"
                            ? "default"
                            : booking.status === "Pending"
                            ? "secondary"
                            : "destructive"
                        }
                        className={
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-600"
                            : booking.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }
                      >
                        {booking.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="px-3 py-2 text-sm"
                        >
                          View
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="px-3 py-2 text-sm"
                        >
                          Cancel
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
