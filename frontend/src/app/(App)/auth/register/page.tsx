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
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Link from "next/link";
import FormInput from "@/components/common/FormInput";
import FormButton from "@/components/common/FormButton";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RegistrationForm() {
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
  const [selectedRole, setSelectedRole] = useState<string>("user");

  return (
    <div className="min-h-screen lg:ml-[16rem] mx-auto flex items-center justify-center font-poppins bg-MainPage-primary">
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-8 max-w-xl w-full">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Your Account
          </h1>
          <p className="text-gray-600 text-md">
            Join us to explore amazing events!
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          {/* Full Name */}
          <FormInput id="fullName" label="Full Name" placeholder="John Alex" />
          {/* Email */}
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="john@example.com"
          />
          {/* Password */}
          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            showPasswordToggle
          />
          {/* Date of Birth */}
          <div className="space-y-1.5">
            <Label htmlFor="dob" className="text-gray-700 text-sm font-medium">
              Date of Birth
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal text-gray-500",
                    dateOfBirth && "text-gray-900"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateOfBirth ? (
                    format(dateOfBirth, "yyyy-MM-dd")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateOfBirth}
                  onSelect={setDateOfBirth}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {/* Phone Number */}
          <FormInput id="phone" label="Phone" placeholder="+123456789" />
          {/* Location */}
          <div className="space-y-1.5">
            <Label
              htmlFor="location"
              className="text-gray-700 text-sm font-medium"
            >
              Location
            </Label>
            <Input
              id="location"
              placeholder="City, Country"
              className="w-full"
            />
          </div>
          <FormInput
            id="location"
            label="Location"
            placeholder="City, Country"
          />
          {/* Profile Picture Upload */}
          <FormInput
            id="ProfilePicture"
            label="Profile Picture"
            type="file"
            accept="image/*"
          />
          {/* choice register as a user or organizer */}

          {/* <Select value={selectedRole} onValueChange={setSelectedRole}>
            <Label className="">Register as </Label>
            <SelectTrigger className="bg-stone-600 text-white">
              <SelectValue placeholder="User" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="organizer">Organizer</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}
          <div className="flex items-center space-y-6 space-x-2">
            <RadioGroup value={selectedRole} onValueChange={setSelectedRole}>
              <Label>Register as</Label>
              <div className="flex gap-8">
                <div className="flex space-x-2">
                  <RadioGroupItem value="user" id="user" />
                  <Label htmlFor="user">User</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="organizer" id="organizer" />
                  <Label htmlFor="organizer">Organizer</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          {selectedRole === "organizer" && (
            <div>
              <FormInput id="organization" label="Organization Name" />
              <FormInput id="website" label="website" />
            </div>
          )}
          {/* Sign Up Button */}
          <FormButton
            type="submit"
            label="Sign Up"
            className="bg-sky-500 hover:bg-sky-500/90"
          />
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-sky-600 py-3 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
