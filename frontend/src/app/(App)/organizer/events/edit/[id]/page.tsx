import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Ticket, BarChart } from "lucide-react";

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
  chat: [
    {
      id: "880e8400-e29b-41d4-a716-446655440020",
      user_id: "550e8400-e29b-41d4-a716-446655440000",
      user_name: "Abebe Kebede",
      message: "Is there parking available?",
      message_type: "Text",
      sent_at: "2025-03-10T09:00:00",
    },
    {
      id: "880e8400-e29b-41d4-a716-446655440021",
      user_id: "550e8400-e29b-41d4-a716-446655440001",
      user_name: "Kebede Abebe",
      message: "Can I upgrade my ticket to VIP?",
      message_type: "Text",
      sent_at: "2025-03-10T10:00:00",
    },
  ],
  analytics: {
    total_bookings: 3,
    total_revenue: 250.0,
    tickets_sold: 3,
  },
};

export default function EventDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:ml-[16rem] gap-6 p-6 min-h-screen font-inter bg-MainPage-primary">
      {/* Main Content Section */}
      <div className="md:col-span-3 space-y-6">
        {/* Event Details Section */}
        <Card>
          <CardHeader>
            <CardTitle>{eventData.title}</CardTitle>
            <CardDescription>{eventData.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <strong>Date:</strong>{" "}
                {new Date(eventData.start_time).toLocaleDateString()} -{" "}
                {new Date(eventData.end_time).toLocaleDateString()}
              </p>
              <p>
                <strong>Location:</strong> {eventData.location}
              </p>
              <p>
                <strong>Category:</strong> {eventData.category}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Section */}
        <Card>
          <CardHeader>
            <CardTitle>Bookings</CardTitle>
            <CardDescription>List of bookings for this event</CardDescription>
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

        {/* Chat Section */}
        <Card>
          <CardHeader>
            <CardTitle>Chat</CardTitle>
            <CardDescription>Communicate with attendees</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {eventData.chat.map((message) => (
                <div
                  key={message.id}
                  className="flex items-start gap-4 p-4 hover:scale-[101%] rounded-lg"
                >
                  <Avatar>
                    <AvatarFallback>
                      {message.user_name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{message.user_name}</p>
                    <p className="text-sm text-muted-foreground">
                      {message.message}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground ml-auto">
                    {new Date(message.sent_at).toLocaleTimeString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Input placeholder="Type a message..." />
            <Button className="ml-2">Send</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Analytics Section */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Event performance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <BarChart className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Total Bookings</p>
                  <p className="text-sm text-muted-foreground">
                    {eventData.analytics.total_bookings}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Ticket className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Tickets Sold</p>
                  <p className="text-sm text-muted-foreground">
                    {eventData.analytics.tickets_sold}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Total Revenue</p>
                  <p className="text-sm text-muted-foreground">
                    ${eventData.analytics.total_revenue.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
