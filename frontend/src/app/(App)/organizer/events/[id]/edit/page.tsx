"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Mock event data
const mockEvent = {
  id: "660e8400-e29b-41d4-a716-446655440001",
  title: "Annual Business Meetup",
  description: "Join the leading minds in business and innovation!",
  start_time: "2025-03-15T09:00:00",
  end_time: "2025-03-15T17:00:00",
  location: "Addis Ababa, Ethiopia",
  category: "Business",
  ticket_types: [
    { type: "General Admission", price: 50.0, available: 100 },
    { type: "VIP", price: 150.0, available: 20 },
  ],
};

// Event categories
const categories = ["Business", "Tech", "Education", "Music", "Sports"];

export default function EventEditPage() {
  const [title, setTitle] = useState(mockEvent.title);
  const [description, setDescription] = useState(mockEvent.description);
  const [category, setCategory] = useState(mockEvent.category);
  const [startTime, setStartTime] = useState<Date | undefined>(
    new Date(mockEvent.start_time)
  );
  const [endTime, setEndTime] = useState<Date | undefined>(
    new Date(mockEvent.end_time)
  );
  const [location, setLocation] = useState(mockEvent.location);
  const [ticketTypes, setTicketTypes] = useState(mockEvent.ticket_types);

  const handleAddTicketType = () => {
    setTicketTypes([...ticketTypes, { type: "", price: 0.0, available: 0 }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      title,
      description,
      category,
      startTime,
      endTime,
      location,
      ticketTypes,
    });
  };

  return (
    <div className="p-6 lg:ml-[16rem] min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Edit Event</h1>
          <p className="text-gray-600 text-sm">
            Update the details of your event below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-1.5">
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter event title"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <Label htmlFor="description">Event Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter event description"
              rows={4}
            />
          </div>

          {/* Category */}
          <div className="space-y-1.5">
            <Label htmlFor="category">Event Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Start and End Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <Label htmlFor="startTime">Start Time</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
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
              <Label htmlFor="endTime">End Time</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
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

          {/* Location */}
          <div className="space-y-1.5">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter event location"
            />
          </div>

          {/* Ticket Types */}
          <div className="space-y-1.5">
            <Label>Ticket Types</Label>
            {ticketTypes.map((ticket, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 items-center">
                <Input
                  placeholder="Type (e.g., VIP)"
                  value={ticket.type}
                  onChange={(e) => {
                    const updatedTickets = [...ticketTypes];
                    updatedTickets[index].type = e.target.value;
                    setTicketTypes(updatedTickets);
                  }}
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={ticket.price}
                  onChange={(e) => {
                    const updatedTickets = [...ticketTypes];
                    updatedTickets[index].price = parseFloat(e.target.value);
                    setTicketTypes(updatedTickets);
                  }}
                />
                <Input
                  type="number"
                  placeholder="Available"
                  value={ticket.available}
                  onChange={(e) => {
                    const updatedTickets = [...ticketTypes];
                    updatedTickets[index].available = parseInt(e.target.value);
                    setTicketTypes(updatedTickets);
                  }}
                />
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={handleAddTicketType}
              className="mt-2"
            >
              Add Ticket Type
            </Button>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Update Event
          </Button>
        </form>
      </div>
    </div>
  );
}
