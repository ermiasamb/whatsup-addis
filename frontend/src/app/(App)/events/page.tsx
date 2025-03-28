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
import { useRouter } from "next/navigation";
import { Calendar, MapPin, Search } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
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
  const { user } = useAuth();
  const router = useRouter();

  const handleEventClick = () => {
    if (user) {
      if (user && user?.role === "admin") {
        router.push("/admin/events/1");
      } else if (user && user?.role === "organizer") {
        router.push("organizer/event/1");
      } else {
        router.push("client/events/1");
      }
    } else {
      router.push("/auth/login");
    }
  };
  return (
    <div className="flex flex-col lg:ml-[16rem] md:flex-row p-8 h-full bg-MainPage-primary mx-auto">
      {/* Left Sidebar - Filters and Search */}
      <div className="w-full md:w-72 xl:w-60 space-y-6 mb-8 md:mb-0 md:mr-8">
        <Card className="border-none shadow-sm">
          <CardContent className="space-y-4">
            {/* Search Bar  */}
            <div className="flex relative pt-6">
              <Search className="relative top-3 left-5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                className="pl-8 h-10 bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Filter </label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full h-10 bg-white">
                  <SelectValue placeholder="All events" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All events</SelectItem>
                  <SelectItem value="today">Today&apos;s events</SelectItem>
                  <SelectItem value="upcoming">Upcoming events</SelectItem>
                  <SelectItem value="thisWeek">This week</SelectItem>
                  <SelectItem value="thisMonth">This month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort By  */}
            <div>
              <label className="text-sm font-medium block mb-2">Sort By</label>
              <Select defaultValue="date">
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

            {/* Apply Filters Button */}
            <Button className="w-full">Apply Filters</Button>
          </CardContent>
        </Card>
      </div>

      {/* Main Content - Events Grid */}
      <div className="flex-1">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-stone-800 font-poppins cursor-default duration-300">
            Events
          </h1>
          <p className="text-lg">{user?.role}</p>
        </div>

        {/* Events Grid */}
        {dummyEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-stone-500 text-lg">No events to book yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 xl:gap-4">
            {dummyEvents.map((event) => (
              <Card
                key={event.id}
                className={`flex flex-col h-[368px]  shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
              >
                <div className="flex-1">
                  <div className="h-[45%] w-full p-3 pt-3">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        alt="Event Image"
                        src="/profile4.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </div>

                  {/* Card Header */}
                  <CardHeader className="h-auto lg:h-10 w-full truncate pt-1 pb-2 px-4">
                    <CardTitle className="w-full text-left flex flex-col items-start text-lg text-stone-800">
                      {event.title}
                    </CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="h-auto flex flex-col px-4 pt-2">
                    {/* Text Content */}
                    <div className="space-y-3 font-poppins ml-0">
                      <p className="truncate h-8 text-stone-500 text-sm">
                        {event.description}
                      </p>
                      <p className="text-stone-600 text-sm flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-stone-400" />
                        {event.date}
                      </p>
                      <p className="text-stone-600 text-sm flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-stone-400" />
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
                    onClick={() => handleEventClick()}
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
