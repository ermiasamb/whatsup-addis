"use client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Ticket, Users, AlertCircle, ArrowRight } from "lucide-react";
//Todo: query parameter to add on the routes
const adminCards = [
  {
    title: "Today's Events",
    description: "3 events happening today",
    icon: <Calendar className="h-6 w-6" />,
    link: "/admin/events",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Upcoming Events",
    description: "12 events in the next 7 days",
    icon: <Calendar className="h-6 w-6" />,
    link: "/admin/events",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Recent Bookings",
    description: "156 bookings in the last 24 hours",
    icon: <Ticket className="h-6 w-6" />,
    link: "/admin/bookings",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "User Management",
    description: "12,451 total users",
    icon: <Users className="h-6 w-6" />,
    link: "/admin/users",
    color: "bg-amber-50 text-amber-600",
  },
];

// Quick stats
const quickStats = [
  { label: "Total Events", value: "124" },
  { label: "Total Revenue", value: "ETB 1.2M" },
  { label: "Active Users", value: "12,451" },
  { label: "Bookings This Month", value: "3,842" },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 lg:ml-[16rem] min-h-screen bg-MainPage-primary">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
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

      {/* Main Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {adminCards.map((card) => (
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

      {/* Only shown if there's a high priority alert */}
      <Card className="border-none shadow-sm border-l-4 border-l-red-500">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <div className="flex-1">
              <h3 className="font-medium">Security Alert</h3>
              <p className="text-sm text-muted-foreground">
                Multiple failed login attempts detected
              </p>
            </div>
            <Link
              href="/admin/security"
              className="text-sm text-primary flex items-center"
            >
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
