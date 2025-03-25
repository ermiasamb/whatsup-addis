"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Ticket, Search, Bell } from "lucide-react";
import Link from "next/link";

// Mock data aligned with the database schema
const userData = {
  profile: {
    id: "550e8400-e29b-41d4-a716-446655440000",
    full_name: "Abebe Kebede",
    email: "abebe.kebede@example.com",
    profile_picture: "/images/abebe-avatar.jpg",
    fallback: "AK",
    location: "Addis Ababa, Ethiopia",
  },
  upcomingEvents: [
    {
      id: "660e8400-e29b-41d4-a716-446655440001",
      title: "Annual Business Meetup",
      description: "Join the leading minds in business and innovation!",
      start_time: "2025-03-15T09:00:00",
      end_time: "2025-03-15T17:00:00",
      location: "Addis Ababa, Ethiopia",
      category: "Business",
      media: "/images/business-meetup.jpg",
    },
    {
      id: "660e8400-e29b-41d4-a716-446655440002",
      title: "Web Development Workshop",
      description: "Learn the latest in web development technologies!",
      start_time: "2025-04-05T14:00:00",
      end_time: "2025-04-05T18:00:00",
      location: "Remote - Online",
      category: "Tech",
      media: "/images/web-dev-workshop.jpg",
    },
  ],
  notifications: [
    {
      id: "770e8400-e29b-41d4-a716-446655440003",
      message: "New features added to your account!",
      type: "Event Update",
      read_status: false,
      created_at: "2025-10-01T10:00:00",
    },
    {
      id: "770e8400-e29b-41d4-a716-446655440004",
      message: "Upcoming event: Annual Business Meetup",
      type: "Booking Reminder",
      read_status: true,
      created_at: "2025-09-25T09:00:00",
    },
  ],
};

export default function ClientDashboard() {
  return (
    <div className="p-6 lg:ml-[16rem] min-h-screen bg-MainPage-primary ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          Hello, {userData.profile.full_name}!
        </h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            className="pl-10 p-2 bg-white rounded-md border w-64"
            placeholder="Search events..."
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Content Section */}
        <div className="flex-1 space-y-6">
          {/* Quick Actions */}
          <div className="flex gap-4 mb-6 w-full">
            <Card className="w-[200px]">
              <CardHeader className="flex flex-col items-center p-4">
                <div className="flex justify-center">
                  <Ticket className="h-6 w-6 text-amber-800" />
                </div>
                <h1 className="text-sm">My Booking</h1>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Link href="/client/bookings">
                  <Button
                    variant="default"
                    className="flex w-full h-8 items-center gap-2"
                  >
                    open
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="w-[200px]">
              <CardHeader className="flex flex-col items-center p-4">
                <div className="flex justify-center">
                  <Calendar className="h-6 w-6 text-amber-800" />
                </div>
                <h1 className="text-sm">Explore Events</h1>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Link href="/client/events">
                  <Button
                    variant="default"
                    className="flex w-full h-8 items-center gap-2"
                  >
                    open
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events Section */}
          <Card>
            <CardHeader>
              <CardTitle>My Upcoming Events</CardTitle>
              <CardDescription>Events you&apos;ve booked</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userData.upcomingEvents.map((event) => (
                  <Link href={`/events/${event.id}`} key={event.id}>
                    <div className="flex items-center gap-4 p-4 hover:bg-muted/50 rounded-lg cursor-pointer">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={event.media} alt={event.title} />
                        <AvatarFallback>EV</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(event.start_time).toLocaleDateString()} ·{" "}
                          {event.location}
                        </p>
                      </div>
                      <Badge>{event.category}</Badge>
                    </div>
                  </Link>
                ))}
              </div>
              {userData.upcomingEvents.length === 0 && (
                <div className="text-center py-6">
                  <p className="text-muted-foreground">No upcoming events</p>
                  <Link href="/events">
                    <Button className="mt-2">Browse Events</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Section */}
        <div className="w-full md:w-80">
          {/* Notifications Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Notifications</CardTitle>
                <Bell className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>Recent updates and reminders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userData.notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-3 rounded-lg border bg-card"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant={
                          notification.read_status ? "secondary" : "default"
                        }
                      >
                        {notification.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground ml-auto">
                        {new Date(notification.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm">{notification.message}</p>
                  </div>
                ))}
                {userData.notifications.length === 0 && (
                  <p className="text-center text-muted-foreground py-4">
                    No new notifications
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
