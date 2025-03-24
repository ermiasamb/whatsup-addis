"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Edit, Save } from "lucide-react";
import { format } from "date-fns";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function UserProfilePage() {
  const [user, setUser] = useState({
    full_name: "John Alex",
    email: "john@example.com",
    dob: new Date("1990-01-01"),
    phone: "+123456789",
    location: "New York, USA",
    profile_picture: "/path/to/profile-picture.jpg",
    role: "user", // or "organizer"
    organization_name: "Event Masters",
    website: "https://eventmasters.com",
  });

  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(user.dob);
  const [isEditing, setIsEditing] = useState(false); // State to manage edit mode

  // Fetch user data from the database (example)
  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      // Replace with actual API call
      const response = await fetch("/api/user");
      const data = await response.json();
      setUser(data);
    };
    fetchUserData();
  }, []);

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  // Handle save changes
  const handleSaveChanges = () => {
    // Save changes logic (e.g., API call to update user data)
    console.log("Saving changes:", user);
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="min-h-screen lg:ml-[16rem] mx-auto  flex items-center justify-center font-poppins bg-MainPage-primary">
      <div className="bg-amber-100 rounded-xl shadow-lg p-8 space-y-8 max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center space-y-3 ">
          <h1 className="text-3xl font-bold text-gray-600">
            Profile Information
          </h1>
        </div>

        {/* Profile Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                View and update your personal details
              </CardDescription>
            </div>
            {!isEditing ? (
              <Button
                variant="outline"
                className="bg-sky-300 hover:bg-sky-300/90"
                onClick={() => setIsEditing(true)}
              >
                <Edit />
                Edit Profile
              </Button>
            ) : (
              <Button
                variant="default"
                className="bg-green-400 hover:bg-green-400/90"
                onClick={handleSaveChanges}
              >
                <Save /> Save Changes
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Profile Picture */}
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.profile_picture} alt={user.full_name} />
                <AvatarFallback>{user.full_name.charAt(0)}</AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button variant="outline">Change Profile Picture</Button>
              )}
            </div>

            {/* Full Name */}
            <div className="space-y-1.5">
              <Label
                htmlFor="fullName"
                className="text-gray-700 text-sm font-medium"
              >
                Full Name
              </Label>
              <Input
                id="fullName"
                value={user.full_name}
                readOnly={!isEditing}
                onChange={(e) => handleInputChange("full_name", e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="text-gray-700 text-sm font-medium"
              >
                Email
              </Label>
              <Input
                id="email"
                value={user.email}
                readOnly={!isEditing}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            {/* Date of Birth */}
            <div className="space-y-1.5">
              <Label
                htmlFor="dob"
                className="text-gray-700 text-sm font-medium"
              >
                Date of Birth
              </Label>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4 text-gray-500" />
                <span>{format(dateOfBirth || new Date(), "yyyy-MM-dd")}</span>
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <Label
                htmlFor="phone"
                className="text-gray-700 text-sm font-medium"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                value={user.phone}
                readOnly={!isEditing}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>

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
                value={user.location}
                readOnly={!isEditing}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </div>

            {/* Additional Info for Organizers */}
            {user.role === "organizer" && (
              <>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="organization"
                    className="text-gray-700 text-sm font-medium"
                  >
                    Organization Name
                  </Label>
                  <Input
                    id="organization"
                    value={user.organization_name}
                    readOnly={!isEditing}
                    onChange={(e) =>
                      handleInputChange("organization_name", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="website"
                    className="text-gray-700 text-sm font-medium"
                  >
                    Website
                  </Label>
                  <Input
                    id="website"
                    value={user.website}
                    readOnly={!isEditing}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                  />
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
