"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  MapPin,
  Tag,
  Ticket,
  BarChart,
  User,
  Edit,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import SummaryCard from "@/components/common/SummaryCard";

// Mock data for a single event
const eventData = {
  id: "660e8400-e29b-41d4-a716-446655440001",
  title: "Annual Business Meetup",
  description: "Join the leading minds in business and innovation!",
  start_time: "2025-03-15T09:00:00",
  end_time: "2025-03-15T17:00:00",
  location: "Addis Ababa, Ethiopia",
  category: "Business",
  media: "/images/business-meetup.jpg",
  status: "Published",
  ticket_types: [
    { type: "General Admission", price: 50.0, available: 100, sold: 75 },
    { type: "VIP", price: 150.0, available: 20, sold: 12 },
  ],
  bookings: [
    {
      id: "770e8400-e29b-41d4-a716-446655440010",
      user_name: "Abebe Kebede",
      ticket_type: "General Admission",
      quantity: 2,
      total_price: 100.0,
      payment_status: "Completed",
    },
    {
      id: "770e8400-e29b-41d4-a716-446655440011",
      user_name: "Kebede Abebe",
      ticket_type: "VIP",
      quantity: 1,
      total_price: 150.0,
      payment_status: "Pending",
    },
  ],
  analytics: {
    total_bookings: {
      amount: 87,
      icon: <Ticket className="h-6 w-6 text-primary" />,
    },
    total_revenue: {
      amount: 5250.0,
      icon: <BarChart className="h-6 w-6 text-primary" />,
    },
    tickets_sold: {
      amount: 87,
      icon: <Ticket className="h-6 w-6 text-primary" />,
    },
    total_attendees: {
      amount: 82,
      icon: <User className="h-6 w-6 text-primary" />,
    },
  },
};

export default function EventDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [event] = useState(eventData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch event data based on ID
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 lg:ml-[16rem] text-center">
        Loading event details...
      </div>
    );
  }

  // Check if user is authorized to view this page
  if (!user || user.role !== "organizer") {
    return (
      <div className="p-6 lg:ml-[16rem] text-center">
        <User className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Unauthorized Access</h2>
        <p className="mb-4">
          You don&apos;t have permission to view this page.
        </p>
        <Link href="/login">
          <Button>Log In</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:ml-[16rem] gap-6 p-6 min-h-screen bg-MainPage-primary">
      {/* Back button and Edit button */}
      <div className="md:col-span-4 flex justify-between items-center">
        <button
          onClick={() => router.back()}
          className="flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Events
        </button>

        <Link href={`/organizer/events/edit/${id}`}>
          <Button className="flex items-center gap-2">
            <Edit className="h-4 w-4" />
            Edit Event
          </Button>
        </Link>
      </div>

      {/* Event Title and Status */}
      <div className="md:col-span-4">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-2xl font-bold">{event.title}</h1>
        </div>
        <p className="text-muted-foreground">{event.description}</p>
      </div>

      {/* Summary Analytics Cards */}
      <div className="md:col-span-4 grid grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Render all analytics cards dynamically */}
        {Object.entries(event.analytics).map(([key, { amount, icon }]) => (
          <SummaryCard
            title={key.replace("_", " ")}
            key={key}
            value={
              key.includes("revenue")
                ? `ETB ${amount.toLocaleString()}`
                : amount
            }
            icon={icon}
          />
        ))}
      </div>

      {/* Event Details Card */}
      <div className="md:col-span-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Event Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Event Details Section */}
              <div className="space-y-6">
                <div className="relative w-full h-[200px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/profile1.jpg"
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(event.start_time).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Time</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(event.start_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      -
                      {new Date(event.end_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      {event.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Tag className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Category</p>
                    <p className="text-sm text-muted-foreground">
                      {event.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Ticket Types and Bookings Section */}
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-xl mb-4">Ticket Types</p>
                  <div className="space-y-3">
                    {event.ticket_types.map((ticket, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-muted/30 rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{ticket.type}</p>
                          <p className="text-sm text-muted-foreground">
                            ETB {ticket.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {ticket.sold} sold
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {ticket.available} available
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-medium text-xl">Recent Bookings</p>
                    <Link href={`/organizer/events/${id}/bookings`}>
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </Link>
                  </div>

                  <div className="space-y-3 max-h-[300px] overflow-y-auto">
                    {event.bookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {booking.user_name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{booking.user_name}</p>
                            <p className="text-xs text-muted-foreground">
                              {booking.ticket_type} · {booking.quantity} tickets
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            ETB {booking.total_price}
                          </p>
                          <Badge
                            variant={
                              booking.payment_status === "Completed"
                                ? "default"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {booking.payment_status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
