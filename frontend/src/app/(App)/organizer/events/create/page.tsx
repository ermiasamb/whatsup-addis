"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function EventRegistrationForm() {
  const [startTime, setStartTime] = useState<Date | undefined>(undefined);
  const [endTime, setEndTime] = useState<Date | undefined>(undefined);
  const [selectedVenue, setSelectedVenue] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [ticketTypes, setTicketTypes] = useState<
    { type: string; price: number; quantity: number; description: string }[]
  >([]);
  const [seatRows, setSeatRows] = useState<number>(0);
  const [seatColumns, setSeatColumns] = useState<number>(0);
  const [seatImage, setSeatImage] = useState<File | null>(null);

  // Mock venue data
  const venues = [
    { id: "1", name: "Grand Ballroom", location: "Downtown", capacity: 500 },
    { id: "2", name: "City Hall", location: "City Center", capacity: 1000 },
    { id: "3", name: "Outdoor Arena", location: "Suburbs", capacity: 2000 },
  ];

  // Event categories
  const categories = [
    "Music",
    "Tech",
    "Business",
    "Sports",
    "Education",
    "Art",
    "Other",
  ];

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSeatImage(e.target.files[0]);
    }
  };

  const addTicketType = () => {
    setTicketTypes([
      ...ticketTypes,
      { type: "", price: 0, quantity: 0, description: "" },
    ]);
  };

  return (
    <div className="min-h-screen lg:ml-[16rem] flex items-center justify-center  bg-MainPage-primary p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">
            Register Your Event
          </h1>
          <p className="text-gray-600 text-sm">
            Fill in the details to create your event and start promoting it!
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          {/* Event Title */}
          <div className="space-y-1.5">
            <Label
              htmlFor="title"
              className="text-gray-700 text-sm font-medium"
            >
              Event Title
            </Label>
            <Input
              id="title"
              placeholder="Enter event title"
              className="w-full"
            />
          </div>

          {/* Event Description */}
          <div className="space-y-1.5">
            <Label
              htmlFor="description"
              className="text-gray-700 text-sm font-medium"
            >
              Event Description
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your event"
              className="w-full p-2 border rounded-md focus:outline-none"
              rows={4}
            />
          </div>

          {/* Event Category */}
          <div className="space-y-1.5">
            <Label
              htmlFor="category"
              className="text-gray-700 text-sm font-medium"
            >
              Event Category
            </Label>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Start and End Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <Label
                htmlFor="startTime"
                className="text-gray-700 text-sm font-medium"
              >
                Start Time
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal text-gray-500",
                      startTime && "text-gray-900"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startTime ? (
                      format(startTime, "PPP p")
                    ) : (
                      <span>Pick a date and time</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startTime}
                    onSelect={setStartTime}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="endTime"
                className="text-gray-700 text-sm font-medium"
              >
                End Time
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal text-gray-500",
                      endTime && "text-gray-900"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endTime ? (
                      format(endTime, "PPP p")
                    ) : (
                      <span>Pick a date and time</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endTime}
                    onSelect={setEndTime}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Location Selection */}
          <div className="space-y-1.5">
            <Label
              htmlFor="location"
              className="text-gray-700 text-sm font-medium"
            >
              Location
            </Label>
            <Input
              id="location"
              type="text"
              placeholder="Enter event location"
              className="w-full"
            />
          </div>

          {/* Venue Selection */}
          <div className="space-y-1.5">
            <Label
              htmlFor="venue"
              className="text-gray-700 text-sm font-medium"
            >
              Venue
            </Label>
            <Select value={selectedVenue} onValueChange={setSelectedVenue}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a venue" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Venues</SelectLabel>
                  {venues.map((venue) => (
                    <SelectItem key={venue.id} value={venue.id}>
                      {venue.name} - {venue.location} (Capacity:{" "}
                      {venue.capacity})
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Ticket Types */}
          <div className="space-y-1.5">
            <Label
              htmlFor="ticketTypes"
              className="text-gray-700 text-sm font-medium"
            >
              Ticket Types
            </Label>
            {ticketTypes.map((ticket, index) => (
              <div key={index} className="space-y-3">
                <Input
                  placeholder="Ticket Type (e.g., VIP, VVIP, General Admission)"
                  value={ticket.type}
                  onChange={(e) => {
                    const newTicketTypes = [...ticketTypes];
                    newTicketTypes[index].type = e.target.value;
                    setTicketTypes(newTicketTypes);
                  }}
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={ticket.price}
                  onChange={(e) => {
                    const newTicketTypes = [...ticketTypes];
                    newTicketTypes[index].price = parseFloat(e.target.value);
                    setTicketTypes(newTicketTypes);
                  }}
                />
                <Input
                  type="number"
                  placeholder="Quantity"
                  value={ticket.quantity}
                  onChange={(e) => {
                    const newTicketTypes = [...ticketTypes];
                    newTicketTypes[index].quantity = parseInt(e.target.value);
                    setTicketTypes(newTicketTypes);
                  }}
                />
                <Textarea
                  placeholder="Description"
                  value={ticket.description}
                  onChange={(e) => {
                    const newTicketTypes = [...ticketTypes];
                    newTicketTypes[index].description = e.target.value;
                    setTicketTypes(newTicketTypes);
                  }}
                  className="w-full p-2 border rounded-md focus:outline-none"
                  rows={2}
                />
              </div>
            ))}
            <Button
              type="button"
              variant="default"
              onClick={addTicketType}
              className="w-full"
            >
              Add Ticket Type
            </Button>
          </div>

          {/* Seat Arrangement (if applicable) */}
          {selectedVenue && (
            <div className="space-y-1.5">
              <Label
                htmlFor="seatArrangement"
                className="text-gray-700 text-sm font-medium"
              >
                Seat Arrangement
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Label htmlFor="seatRows">Number of rows</Label>
                  <Input
                    id="seatRows"
                    type="number"
                    placeholder="Number of rows"
                    value={seatRows}
                    onChange={(e) => setSeatRows(parseInt(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="seatColumn">Number of Column</Label>
                  <Input
                    id="seatColumn"
                    type="number"
                    placeholder="Number of columns"
                    value={seatColumns}
                    onChange={(e) => setSeatColumns(parseInt(e.target.value))}
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label
                  htmlFor="seat-image-upload"
                  className="cursor-pointer bg-gray-100 hover:bg-gray-200 p-2 rounded-md"
                >
                  <Upload className="h-5 w-5 text-gray-700" />
                  <input
                    id="seat-image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleMediaUpload}
                  />
                </label>
                {seatImage && (
                  <div className="relative">
                    <Image
                      width={100}
                      height={100}
                      src={URL.createObjectURL(seatImage)}
                      alt="Seat Arrangement"
                      className="h-16 w-16 object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Create Event Button */}
          <Button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-600/90 text-white font-medium py-2.5"
          >
            Create Event
          </Button>
        </form>
      </div>
    </div>
  );
}
