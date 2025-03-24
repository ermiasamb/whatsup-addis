// app/(admin)/events/[eventId]/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Ticket, BarChart, User } from "lucide-react";
import SummaryCard from "@/components/common/SummaryCard";

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
  attendees: [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      full_name: "Abebe Kebede",
      email: "abebe.kebede@example.com",
      profile_picture: "/images/abebe-avatar.jpg",
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440001",
      full_name: "Kebede Abebe",
      email: "kebede.abebe@example.com",
      profile_picture: "/images/kebede-avatar.jpg",
    },
    {
      id: "550e8409b-41d4-a716-446655440001",
      full_name: "Kebede Abebe",
      email: "kebede.abebe@example.com",
      profile_picture: "/images/kebede-avatar.jpg",
    },
    {
      id: "550e8406-446655440001",
      full_name: "Kebede Abebe",
      email: "kebede.abebe@example.com",
      profile_picture: "/images/kebede-avatar.jpg",
    },
    {
      id: "550e8400-e29b-41d4-a7655440001",
      full_name: "Kebede Abebe",
      email: "kebede.abebe@example.com",
      profile_picture: "/images/kebede-avatar.jpg",
    },
    {
      id: "550e8400-e29b-4101",
      full_name: "Kebede Abebe",
      email: "kebede.abebe@example.com",
      profile_picture: "/images/kebede-avatar.jpg",
    },
  ],
  analytics: {
    total_bookings: {
      amount: 3,
      icon: <Ticket className="h-6 w-6 text-primary"></Ticket>,
    },
    total_revenue: {
      amount: 250.0, // Updated to reflect actual revenue
      icon: <BarChart className="h-6 w-6 text-primary"></BarChart>,
    },
    tickets_sold: {
      amount: 3,
      icon: <Ticket className="h-6 w-6 text-primary"></Ticket>,
    },
    total_attendees: {
      amount: 2, // Dynamically calculated from attendees array
      icon: <User className="h-6 w-6 text-primary"></User>,
    },
  },
};

export default function AdminEventDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:ml-[16rem] gap-6 p-6 min-h-screen font-inter bg-MainPage-primary">
      {/* Summary Analytics Cards */}
      <div className="md:col-span-4 grid grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Render all analytics cards dynamically */}
        {Object.entries(eventData.analytics).map(([key, { amount, icon }]) => {
          return (
            <SummaryCard title={key} key={key} value={amount} icon={icon} />
          );
        })}
      </div>

      {/* Combined Event Details and Attendees Summary Card */}
      <div className="md:col-span-4 ">
        <Card>
          <CardHeader>
            <CardTitle className="text-center p-2 text-stone-800 text-2xl">
              Event Overview
            </CardTitle>
          </CardHeader>
          <CardContent className=" ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8  p-4">
              {/* Event Details Section */}
              <div className="space-y-6 font-poppins ">
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

              {/* Attendees Summary Section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-xl text-center  flex-1 text-stone-800 ">
                    Attendees
                  </p>
                  <p className="text-sm text-white bg-gray-400 p-1 rounded-full">
                    {eventData.attendees.length} attendees
                  </p>
                </div>
                <div className="space-y-4 h-96 overflow-y-scroll">
                  {eventData.attendees.map((attendee) => (
                    <div
                      key={attendee.id}
                      className="flex items-center gap-4 p-4  hover:bg-gray-50 rounded-lg transition-all"
                    >
                      <Avatar>
                        <AvatarImage src={attendee.profile_picture} />
                        <AvatarFallback>
                          {attendee.full_name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{attendee.full_name}</p>
                        <p className="text-sm text-muted-foreground">
                          {attendee.email}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
