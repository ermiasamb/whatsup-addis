"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Ticket,
  ArrowRight,
  PlusCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Simplified organizer navigation cards - focused on essentials
const organizerCards = [
  {
    title: "My Events",
    description: "8 active events",
    icon: <Calendar className="h-6 w-6" />,
    link: "/organizer/events",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Bookings",
    description: "156 bookings in the last 24 hours",
    icon: <Ticket className="h-6 w-6" />,
    link: "/organizer/bookings",
    color: "bg-green-50 text-green-600",
  },
];
// Mock data for notifications
const notifications = [
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
];

// Simplified quick stats for organizer
const quickStats = [
  { label: "Total Events", value: "8" },
  { label: "Total Revenue", value: "ETB 245K" },
];

export default function OrganizerDashboard() {
  const router = useRouter();
  return (
    <div className="p-6 lg:ml-[16rem] min-h-screen bg-MainPage-primary">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Organizer Dashboard</h1>
        <Button
          className="flex items-center gap-2"
          onClick={() => router.push("/organizer/events/create")}
        >
          <PlusCircle className="h-4 w-4" />
          Create Event
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {quickStats.map((stat) => (
            <div key={stat.label} className="flex flex-col min-w-[120px]">
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
              <span className="text-2xl font-medium">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 ">
        {/* Main Navigation Cards */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 sm:h-40  mx-auto ">
          {organizerCards.map((card) => (
            <Link href={card.link} key={card.title}>
              <Card className="border-none shadow-sm hover:shadow-md transition-all cursor-pointer h-full">
                <CardContent className="p-5">
                  <div
                    className={`rounded-full w-10 h-10 flex items-center justify-center mb-3 ${card.color}`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-base font-medium mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        {/* Notifications Section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Recent updates and reminders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 w-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="space-y-1 flex flex-col p-2 ring-1 ring-inset ring-stone-200/60 shadow-sm"
                  >
                    <div className="flex items-center gap-1 xl:gap-4 flex-wrap lg:flex-nowrap">
                      <Badge className="text-center bg-badge_green hover:bg-badge_green">
                        {notification.type}
                      </Badge>
                      <p className="hidden 3xl:flex text-balance">
                        {notification.message}
                      </p>
                      <p className="text-sm text-muted-foreground ml-auto">
                        {new Date(notification.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    {/** small screen  */}
                    <p className="flex 3xl:hidden">{notification.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Bookings Card */}
      <Card className="border-none shadow-sm mt-8">
        <CardContent className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full w-8 h-8 flex items-center justify-center bg-green-50 text-green-600">
              <CheckCircle className="h-4 w-4" />
            </div>
            <h3 className="font-medium">Recent Bookings</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Abebe Kebede</p>
                <p className="text-sm text-muted-foreground">
                  2 tickets for Tech Conference
                </p>
              </div>
              <span className="text-xs text-muted-foreground">2h ago</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Tigist Haile</p>
                <p className="text-sm text-muted-foreground">
                  4 tickets for Music Festival
                </p>
              </div>
              <span className="text-xs text-muted-foreground">5h ago</span>
            </div>
          </div>

          <div className="mt-4">
            <Link
              href="/organizer/bookings"
              className="text-sm text-primary flex items-center"
            >
              View all bookings <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
