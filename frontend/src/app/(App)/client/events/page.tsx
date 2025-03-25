"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  status: "Booked" | "Cancelled";
}

const dummyEvents: Event[] = [
  {
    id: "1",
    title: "Tech Conference",
    description:
      "Join us for the biggest tech conference of the year! Learn from industry leaders and network with professionals.",
    date: "2025-03-10",
    location: "Addis Ababa",
    status: "Booked",
  },
  {
    id: "2",
    title: "Smart City Technologies Exhibition",
    description:
      "Join us for the biggest tech conference of the year! Learn from industry leaders and network with professionals.",
    date: "2025-03-15",
    location: "Adama",
    status: "Cancelled",
  },
  {
    id: "3",
    title: "Developer Summit",
    description:
      "Join us for the biggest tech conference of the year! Learn from industry leaders and network with professionals.",
    date: "2025-04-05",
    location: "New Yorks",
    status: "Booked",
  },
];

export default function MyEvents() {
  return (
    <div className="flex flex-col lg:ml-[16rem] md:flex-row p-8 h-full  bg-MainPage-primary mx-auto">
      {/* Left Sidebar - Filters and Search */}
      <div className="w-auto  md:w-72  xl:w-60 space-y-6 mb-8 md:mb-0 md:mr-8 ">
        <h2 className="text-xl font-semibold text-stone-800">Filters</h2>

        {/* Search Bar */}
        <Input
          placeholder="Search events..."
          className="w-full h-10 bg-white"
        />

        {/* Status Filter */}
        {/* <div>
          <h3 className="text-lg font-medium text-stone-700 mb-3">Status</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="status-booked" />
              <label htmlFor="status-booked" className="text-stone-600">
                Booked
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="status-cancelled" />
              <label htmlFor="status-cancelled" className="text-stone-600">
                Cancelled
              </label>
            </div>
          </div>
        </div> */}

        {/* Sort By */}
        <div>
          <h3 className="text-lg font-medium text-stone-700 mb-3">Sort By</h3>
          <Select>
            <SelectTrigger className="w-full h-10 bg-white">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="location">Location</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content - Events Grid */}
      <div className="flex-1">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-stone-800 font-poppins cursor-default  duration-300">
            Events
          </h1>
        </div>

        {/* Events Grid */}
        {dummyEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-stone-500 text-lg">No events booked yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 xl:gap-4 ">
            {dummyEvents.map((event) => (
              <Card
                key={event.id}
                className={`flex flex-col h-[368px]  border-red-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                  event.status === "Booked"
                    ? "border-sky-100"
                    : "border-red-100"
                }`}
              >
                <div className="flex-1">
                  <div className="h-[50%] w-full relative">
                    {/* Image Container */}

                    <Image
                      alt="Event Image"
                      src="/profile4.jpg"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Card Header */}
                  <CardHeader className="h-auto lg:h-10    w-full overflow-hidden">
                    <CardTitle className="w-full text-left flex flex-col items-start text-lg text-stone-800 ">
                      {event.title}
                    </CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="h-auto flex flex-col mt-4">
                    {/* Text Content */}

                    <div className="space-y-1 font-poppins ml-0">
                      <p className="truncate h-8 text-stone-500">
                        {event.description}
                      </p>
                      <p className="text-stone-600 text-md line-clamp-2 flex gap-1">
                        <span className="font-medium">
                          <Calendar />
                        </span>{" "}
                        {event.date}
                      </p>
                      <p className="text-stone-600 text-md line-clamp-2 flex gap-1">
                        <span className="font-medium">
                          <MapPin />
                        </span>{" "}
                        {event.location}
                      </p>
                    </div>
                  </CardContent>
                </div>

                {/* Button */}
                <div>
                  <Button
                    variant="default"
                    className="w-full h-10 rounded-none"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
