// app/(admin)/events/[eventId]/page.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Ticket,
  AlertCircle,
  BarChart,
  Download,
} from "lucide-react";

// Mock data
const eventData = {
  id: "660e8400-e29b-41d4-a716-446655440001",
  title: "Annual Business Meetup",
  description: "Join the leading minds in business and innovation!",
  start_time: "2025-03-15T09:00:00",
  end_time: "2025-03-15T17:00:00",
  location: "Addis Ababa, Ethiopia",
  category: "Business",
  media: "/images/business-meetup.jpg",
  ticket_types: [
    { type: "General Admission", price: 50.0, available: 100 },
    { type: "VIP", price: 150.0, available: 20 },
  ],
  bookings: [
    {
      id: "770e8400-e29b-41d4-a716-446655440010",
      user_id: "550e8400-e29b-41d4-a716-446655440000",
      user_name: "Abebe Kebede",
      ticket_type: "General Admission",
      quantity: 2,
      total_price: 100.0,
      payment_status: "Completed",
      created_at: "2025-03-01T10:00:00",
    },
    {
      id: "770e8400-e29b-41d4-a716-446655440011",
      user_id: "550e8400-e29b-41d4-a716-446655440001",
      user_name: "Kebede Abebe",
      ticket_type: "VIP",
      quantity: 1,
      total_price: 150.0,
      payment_status: "Pending",
      created_at: "2025-03-02T12:00:00",
    },
  ],
  security_logs: [
    {
      id: "880e8400-e29b-41d4-a716-446655440020",
      user_id: "550e8400-e29b-41d4-a716-446655440000",
      user_name: "Abebe Kebede",
      action: "Ticket Purchase",
      risk_level: "Low",
      details: { ticket_type: "General Admission", quantity: 2 },
      logged_at: "2025-03-01T10:00:00",
    },
  ],
  analytics: {
    total_bookings: 3,
    total_revenue: 250.0,
    payment_status: {
      completed: 2,
      pending: 1,
      failed: 0,
      refunded: 0,
    },
  },
};

export default function AdminEventDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:ml-[16rem] gap-6 p-6 min-h-screen font-inter bg-MainPage-primary">
      {/* Main Content Section */}
      <div className="md:col-span-3 space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold font-spaceG">
            Event: {eventData.title}
          </h1>
        </div>

        {/* Event Summary Card */}
        <Card>
          <CardHeader>
            <CardTitle>Event Summary</CardTitle>
            <CardDescription>Key details about the event</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(eventData.start_time).toLocaleDateString()} -{" "}
                    {new Date(eventData.end_time).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Ticket className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    {eventData.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BarChart className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Category</p>
                  <p className="text-sm text-muted-foreground">
                    {eventData.category}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Summary Card */}
        <Card>
          <CardHeader>
            <CardTitle>Bookings Summary</CardTitle>
            <CardDescription>Overview of bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {eventData.bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center gap-4 p-4 hover:scale-[101%] rounded-lg"
                >
                  <Avatar>
                    <AvatarFallback>
                      {booking.user_name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{booking.user_name}</p>
                    <p className="text-sm text-muted-foreground">
                      {booking.ticket_type} · {booking.quantity} tickets
                    </p>
                  </div>
                  <Badge
                    variant={
                      booking.payment_status === "Completed"
                        ? "default"
                        : "secondary"
                    }
                    className="ml-auto"
                  >
                    {booking.payment_status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Logs Card */}
        <Card>
          <CardHeader>
            <CardTitle>Security Logs</CardTitle>
            <CardDescription>Recent security activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {eventData.security_logs.map((log) => (
                <div
                  key={log.id}
                  className="flex items-center gap-4 p-4 hover:scale-[101%] rounded-lg"
                >
                  <AlertCircle className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">{log.user_name}</p>
                    <p className="text-sm text-muted-foreground">
                      {log.action} · Risk: {log.risk_level}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground ml-auto">
                    {new Date(log.logged_at).toLocaleTimeString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions Section */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage this event</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
              <Button variant="outline" className="w-full">
                Send Notification
              </Button>
              <Button variant="destructive" className="w-full">
                Cancel Event
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
