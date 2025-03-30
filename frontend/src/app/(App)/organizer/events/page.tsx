"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";

interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  start_time: string;
  end_time: string;
  location: string;
  status: "Upcoming" | "Completed";
}

// Mock data for events
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Tech Conference 2025",
    description: "A conference for tech enthusiasts.",
    category: "Tech",
    start_time: "2025-04-15T09:00:00",
    end_time: "2025-04-15T17:00:00",
    location: "Addis Ababa, Ethiopia",
    status: "Upcoming",
  },
  {
    id: "2",
    title: "Marketing Workshop",
    description: "Learn marketing strategies.",
    category: "Business",
    start_time: "2025-03-30T10:00:00",
    end_time: "2025-03-30T14:00:00",
    location: "Remote - Online",
    status: "Completed",
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    description: "Pitch your startup ideas to investors.",
    category: "Startup",
    start_time: "2025-05-10T18:00:00",
    end_time: "2025-05-10T21:00:00",
    location: "Innovation Hub, Addis Ababa",
    status: "Upcoming",
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(mockEvents);

  const handleDelete = (id: string) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="p-8 lg:ml-[16rem] min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Events</h1>
        <Link href="/organizer/events/create">
          <Button className="gap-2 px-6 py-3 text-sm font-medium">
            <Plus className="h-5 w-5" />
            Create Event
          </Button>
        </Link>
      </div>

      {/* Events Table */}
      <Card className="shadow-md">
        <CardHeader className="border-b">
          <CardTitle className="text-lg font-semibold text-gray-800">
            Event List
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {events.length === 0 ? (
            <p className="text-gray-600 text-center">No events found.</p>
          ) : (
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="text-left text-sm font-medium text-gray-700">
                    Title
                  </TableHead>
                  <TableHead className="text-left text-sm font-medium text-gray-700">
                    Date
                  </TableHead>
                  <TableHead className="text-left text-sm font-medium text-gray-700">
                    Location
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
                {events.map((event) => (
                  <TableRow
                    key={event.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="py-4 text-sm text-gray-800">
                      {event.title}
                    </TableCell>
                    <TableCell className="py-4 text-sm text-gray-600">
                      {new Date(event.start_time).toLocaleDateString()} -{" "}
                      {new Date(event.end_time).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="py-4 text-sm text-gray-600">
                      {event.location}
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        variant={
                          event.status === "Upcoming" ? "default" : "secondary"
                        }
                        className={
                          event.status === "Upcoming"
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-600"
                        }
                      >
                        {event.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex gap-2">
                        <Link href={`/organizer/events/${event.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="px-3 py-2 text-sm"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={`/organizer/events/${event.id}/edit`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="px-3 py-2 text-sm"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>

                        <Button
                          variant="destructive"
                          size="sm"
                          className="px-3 py-2 text-sm"
                          onClick={() => handleDelete(event.id)}
                        >
                          <Trash2 className="h-4 w-4" />
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
