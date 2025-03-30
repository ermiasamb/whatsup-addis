import { Calendar, Lock, MapPin, Search, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: "e-001",
    title: "Tech Summit 2025",
    date: "March 30, 2025",
    location: "Addis Ababa",
    image: "/profile3.jpg",
  },
  {
    id: "e-002",
    title: "Addis Music Festival",
    date: "April 15, 2025",
    location: "Addis Ababa",
    image: "/profile4.jpg",
  },
  {
    id: "e-003",
    title: "Business Networking",
    date: "May 10, 2025",
    location: "Addis Ababa",
    image: "/profile1.jpg",
  },
  {
    id: "e-004",
    title: "Art Exhibition",
    date: "June 5, 2025",
    location: "Addis Ababa",
    image: "/profile3.jpg",
  },
  {
    id: "e-005",
    title: "Sports Tournament",
    date: "July 20, 2025",
    location: "Addis Ababa",
    image: "/profile4.jpg",
  },
];

// Mock data for testimonials (limited to 3)
const testimonials = [
  {
    id: "t-001",
    text: "What’sup Addis made event planning so easy! Highly recommend.",
    name: "Abebe Kebede",
  },
  {
    id: "t-002",
    text: "I found amazing events I never knew existed. Great platform!",
    name: "Tigist Haile",
  },
  {
    id: "t-003",
    text: "The secure payment system gave me peace of mind. Thank you!",
    name: "Dawit Mekonnen",
  },
];

export default function page() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <div className="container md:w-5/6  flex flex-col-reverse mt-10 p-12 mx-auto items-center md:space-y-0 md:flex-row text-white ">
          {/* Left Item */}
          <div className="flex flex-col mb-32 space-y-8 mt-8 md:mt-0 md:w-1/2 mx-auto">
            <h1 className="max-w-md text-4xl font-bold text-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400  bg-clip-text text-transparent md:text-5xl md:text-left">
              Your Gateway To Awesome Events!
            </h1>
            <p className="max-w-lg md:max-w-sm text-left text-lg text-gray-200">
              What&apos;sup Addis transforms how people discover, manage, and
              optimize events through smart solutions.
            </p>
            <Link
              href="/auth/register"
              className="self-baseline p-3 px-6 cursor-pointer bg-lime-500 rounded-full text-white border border-brightRed hover:bg-lime-500/90"
            >
              <p className="w-full text-white">Get Started</p>
            </Link>
          </div>
          {/* Right Item */}
          <div className="flex flex-col ">
            <Image
              width={500}
              height={500}
              className="object-cover rounded-sm"
              src="/profile1.jpg"
              alt="hero image"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16  text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400  bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Card className="max-w-sm bg-white rounded-lg shadow-md">
              <CardHeader>
                <div className="flex justify-center my-2">
                  <Settings className="w-8 h-8 text-lime-500" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Smart Event Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Manage your events effortlessly with our intuitive tools.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="max-w-sm bg-white rounded-lg shadow-md">
              <CardHeader>
                <div className="flex justify-center my-2">
                  <Search className="w-8 h-8 text-lime-500" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Discover Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Explore a wide range of events tailored to your interests.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="max-w-sm bg-white rounded-lg shadow-md">
              <CardHeader>
                <div className="flex justify-center my-2">
                  <Lock className="w-8 h-8 text-lime-500" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Secure Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-[1rem]">
                  Book your tickets with confidence using our secure payment
                  system.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-16 text-white">
        <div className="container md:w-5/6 mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="p-2 bg-gray-100 rounded-lg shadow-md flex flex-col justify-between"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 object-cover h-[250px] w-full"
                />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="text-gray-600 mb-4">
                    <div className="flex flex-col w-fit space-y-2  mx-auto">
                      <div className="flex gap-2 ">
                        <Calendar className="w-5 h-5" />
                        {event.date}
                      </div>
                      <div className="flex gap-2 justify-start ">
                        <MapPin className="w-5 h-5" />
                        {event.location}
                      </div>
                    </div>
                  </CardDescription>
                  <div className="mt-auto">
                    <Link
                      href="/client/events/1"
                      className="inline-block bg-lime-500 text-white px-4 py-2 rounded-full hover:bg-lime-600 transition duration-300"
                    >
                      Learn more
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="max-w-sm bg-white rounded-lg shadow-md p-4"
              >
                <CardContent>
                  <p className="text-gray-600 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <CardTitle className="text-lg font-semibold mt-4">
                    - {testimonial.name}
                  </CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
