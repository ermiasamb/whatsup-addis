"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Clock,
  Share2,
  Star,
  ChevronRight,
  Crown,
  Ticket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EventDetail() {
  const event = {
    id: "1",
    title: "Tech Conference 2023",
    description:
      "Join us for the biggest tech conference of the year! Learn from industry leaders and network with professionals.",
    category: "Tech",
    start_time: "2023-12-15T09:00:00",
    end_time: "2023-12-17T18:00:00",
    location: "Addis Ababa, Ethiopia",
    ticket_types: [
      { type: "Premium", price: 50.0 },
      { type: "VIP", price: 150.0 },
      { type: "General", price: 100.0 },
    ],
    media: {
      images: ["https://via.placeholder.com/800x400"],
    },
    rating: 4.5,
    reviews_count: 120,
  };

  const getTicketIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "premium":
        return <Crown className="w-10 h-10 text-[#FFD700]" />;
      case "vip":
        return <Star className="w-10 h-10 text-purple-900" />;
      default:
        return <Ticket className="w-10 h-10 text-blue-800" />;
    }
  };

  return (
    <div className="lg:ml-[16rem] max-w-screen-xl  overflow-x-hidden">
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden rounded-lg">
          <Image
            src="/profile1.jpg"
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <div className="text-white">
              <Badge variant="secondary" className="mb-2">
                {event.category}
              </Badge>
              <h1 className="text-4xl font-bold">{event.title}</h1>
              <p className="text-lg mt-2">{event.description}</p>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span>
                {new Date(event.start_time).toLocaleDateString()} -{" "}
                {new Date(event.end_time).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-500" />
              <span>
                {new Date(event.start_time).toLocaleTimeString()} -{" "}
                {new Date(event.end_time).toLocaleTimeString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ticket className="w-5 h-5 text-gray-500" />
              <span>{event.ticket_types.length} Ticket Types Available</span>
            </div>
          </CardContent>
        </Card>

        {/* Ticket Types */}
        <Card className="mt-6 xl:w-[60%] mx-auto ">
          <CardHeader>
            <CardTitle className="text-center text-xl text-white">
              Ticket Types
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {event.ticket_types.map((ticket, index) => (
              <Card
                key={index}
                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md ${
                  ticket.type.toLowerCase() === "vip"
                    ? "bg-gradient-to-r from-purple-400 to-purple-600"
                    : ticket.type.toLowerCase() === "premium"
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                    : "bg-gradient-to-r from-blue-400 to-blue-600"
                }`}
              >
                {getTicketIcon(ticket.type)}
                <CardTitle className="text-lg text-white font-semibold mt-2">
                  {ticket.type}
                </CardTitle>
                <CardContent>
                  <p className="text-sm text-white text-center">
                    ${ticket.price}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-transparent shadow-none">
                    <Link href="/booking" className="flex items-center">
                      Book Now
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Reviews */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-lg font-semibold">
                {event.rating} ({event.reviews_count} reviews)
              </span>
            </div>
            <p className="text-gray-700">
              No reviews yet. Be the first to review!
            </p>
          </CardContent>
        </Card>

        {/* Social Sharing */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Share This Event</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button variant="outline" className="flex items-center">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
            <Button variant="outline">Facebook</Button>
            <Button variant="outline">Twitter</Button>
            <Button variant="outline">WhatsApp</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
