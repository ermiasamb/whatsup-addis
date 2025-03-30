"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Image from "next/image";
import FormInput from "@/components/common/FormInput";
import FormTextarea from "@/components/common/FormTextarea";
import FormButton from "@/components/common/FormButton";
// import { useAuth } from "@/context/AuthContext";

export default function BookingPage() {
  const { toast } = useToast();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [ticketType, setTicketType] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [specialRequests, setSpecialRequests] = useState<string>("");

  const ticketTypes = [
    { type: "VIP", price: 100 },
    { type: "General Admission", price: 50 },
    { type: "Student", price: 30 },
  ];

  const sections = [
    { name: "VIP", rows: 5, columns: 10 },
    { name: "General Admission", rows: 10, columns: 10 },
    { name: "Student", rows: 10, columns: 10 },
  ];

  const event = {
    name: "Concert of the Year",
    date: "2025-03-20",
    time: "19:00",
    location: "Grand Arena, City Center",
    image: "/seatmap.jpg",
  };

  const handleSeatClick = (seat: string, sectionName: string) => {
    const isAlreadySelected = selectedSeats.includes(seat);
    const updatedSeats = isAlreadySelected
      ? selectedSeats.filter((s) => s !== seat)
      : [...selectedSeats, seat];

    if (updatedSeats.length > quantity) {
      toast({
        title: "Seat Limit Reached",
        description: `You can only select ${quantity} seats.`,
        variant: "destructive",
      });
      return;
    }

    setSelectedSeats(updatedSeats);

    // Auto-set ticket type based on selected seat type
    if (updatedSeats.length > 0) {
      setTicketType(sectionName);
    } else {
      setTicketType(null);
    }
  };

  const handleTicketTypeChange = (type: string) => {
    setTicketType(type);
    setSelectedSeats([]);
  };

  const selectedTicket = ticketTypes.find((t) => t.type === ticketType);
  const totalPrice = selectedTicket ? selectedTicket.price * quantity : 0;
  const router = useRouter();

  const handleSubmit = () => {
    if (!ticketType || selectedSeats.length === 0) {
      toast({
        title: "Incomplete Booking",
        description: "Please select a ticket type and at least one seat.",
        variant: "destructive",
      });
      // route to booking page
      router.push("/client/bookings/list");
      return;
    }

    const bookingData = {
      ticketType,
      quantity,
      totalPrice,
      seatNumbers: selectedSeats,
      specialRequests,
    };

    console.log("Booking Data:", bookingData);
    toast({
      title: "Booking Successful",
      description: "Your seats have been reserved!",
    });
  };
  // const { user } = useAuth();
  // if (user?.role !== "client") {
  //   return (
  //     <div className="min-h-screen lg:ml-[16rem] flex items-center justify-center bg-MainPage-primary">
  //       <h1 className="text-2xl font-semibold text-muted-foreground">
  //         You are not authorized to view this page.
  //       </h1>
  //     </div>
  //   );
  // }
  return (
    <div className="min-h-screen max-w-[100vw] lg:ml-[16rem] flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 overflow-hidden ">
      {/* Main Container */}
      <div className="w-full max-w-6xl flex flex-col gap-6  ">
        {/* Seat Map and Seat Selection (Side by Side on Desktop) */}
        <div className="w-full flex flex-col lg:flex-row ">
          {/* Seat Map */}
          <div className="w-full lg:w-1/2 bg-white p-6 ">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {event.name}
            </h1>
            <p className="text-gray-600 text-lg mb-2">
              {event.date} at {event.time}
            </p>
            <p className="text-gray-600 text-lg mb-6">{event.location}</p>
            <div className="w-full h-64 relative rounded-xl overflow-hidden">
              <Image
                src={event.image}
                alt="Event Image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Seat Selection */}
          <div className="w-full lg:w-1/2 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Select Your Seats
            </h2>
            {sections.map((section) => (
              <div key={section.name} className="space-y-4 mb-6">
                <Label className="text-gray-700 font-semibold text-lg">
                  {section.name} Section
                </Label>
                <div
                  className="grid gap-2 overflow-x-auto max-h-48 p-2 bg-gray-50 rounded-lg"
                  style={{
                    gridTemplateColumns: `repeat(${section.columns}, minmax(40px, 1fr))`,
                  }}
                >
                  {Array.from(
                    { length: section.rows * section.columns },
                    (_, index) => {
                      const row = Math.floor(index / section.columns) + 1;
                      const column = (index % section.columns) + 1;
                      const seat = `${section.name[0]}R${row}C${column}`;
                      return (
                        <button
                          key={seat}
                          onClick={() => handleSeatClick(seat, section.name)}
                          className={cn(
                            "p-2 border rounded-md text-xs flex items-center justify-center transition-all duration-200",
                            selectedSeats.includes(seat)
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white hover:bg-blue-50 border-gray-200",
                            ticketType && section.name === ticketType
                              ? "border-blue-600"
                              : "border-gray-200"
                          )}
                        >
                          {seat}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form (Below Seat Map and Seat Selection on Desktop) */}
        <div className="w-full xl:w-[80%] mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Booking Details
          </h2>

          {/* Ticket Type Selection */}
          <div className="space-y-4 mb-6">
            <Label className="text-gray-700 font-semibold text-lg">
              Ticket Type
            </Label>
            <Select
              value={ticketType || ""}
              onValueChange={handleTicketTypeChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a ticket type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Ticket Types</SelectLabel>
                  {ticketTypes.map((ticket) => (
                    <SelectItem key={ticket.type} value={ticket.type}>
                      {ticket.type} - ${ticket.price}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Quantity Selection */}
          <FormInput
            id="ticketquantity"
            label="Ticket Quantity"
            type="number"
            placeholder="0"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          {/* Special Request */}
          <FormTextarea
            id="specialrequest"
            label="Special Request"
            placeholder="Enter any special requests..."
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
          />

          {/* Total Price */}
          <div className="text-2xl font-bold text-gray-900 my-6">
            Total: ${totalPrice.toFixed(2)}
          </div>

          {/* Submit Button */}
          <FormButton
            type="submit"
            label="Confirm Booking"
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
}
