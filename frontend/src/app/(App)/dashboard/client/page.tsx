import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Ticket, Search, Bell, Gift } from "lucide-react";

// Mock data aligned with the database schema
const userData = {
  profile: {
    id: "550e8400-e29b-41d4-a716-446655440000", // UUID from `users` table
    full_name: "Abebe Kebede", // From `users.full_name`
    email: "abebe.kebede@example.com", // From `users.email`
    profile_picture: "/images/abebe-avatar.jpg", // From `users.profile_picture`
    fallback: "AK", // Fallback initials
    location: "Addis Ababa, Ethiopia", // From `users.location`
  },
  quickActions: [
    {
      icon: Ticket,
      title: "My Bookings",
      description: "View your event tickets", // Linked to `bookings` table
    },
    {
      icon: Calendar,
      title: "Upcoming Events",
      description: "Explore events you’ve booked", // Linked to `events` table
    },
    {
      icon: Gift,
      title: "Promotions",
      description: "Check out exclusive offers", // Linked to promotions (not in schema but relevant)
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "View updates and reminders", // Linked to `notifications` table
    },
  ],
  upcomingEvents: [
    {
      id: "660e8400-e29b-41d4-a716-446655440001", // UUID from `events` table
      title: "Annual Business Meetup", // From `events.title`
      description: "Join the leading minds in business and innovation!", // From `events.description`
      start_time: "2025-03-15T09:00:00", // From `events.start_time`
      end_time: "2025-03-15T17:00:00", // From `events.end_time`
      location: "Addis Ababa, Ethiopia", // From `events.location`
      category: "Business", // From `events.category`
      media: "/images/business-meetup.jpg", // From `events.media`
    },
    {
      id: "660e8400-e29b-41d4-a716-446655440002",
      title: "Web Development Workshop",
      description: "Learn the latest in web development technologies!",
      start_time: "2025-04-05T14:00:00",
      end_time: "2025-04-05T18:00:00",
      location: "Remote - Online",
      category: "Tech",
      media: "/images/web-dev-workshop.jpg",
    },
  ],
  notifications: [
    {
      id: "770e8400-e29b-41d4-a716-446655440003", // UUID from `notifications` table
      message: "New features added to your account!", // From `notifications.message`
      type: "Event Update", // From `notifications.type`
      read_status: false, // From `notifications.read_status`
      created_at: "2025-10-01T10:00:00", // From `notifications.created_at`
    },
    {
      id: "770e8400-e29b-41d4-a716-446655440004",
      message: "Upcoming event: Annual Business Meetup",
      type: "Booking Reminder",
      read_status: true,
      created_at: "2025-09-25T09:00:00",
    },
  ],
  promotions: [
    {
      id: "880e8400-e29b-41d4-a716-446655440005",
      title: "Exclusive Discount",
      description: "Get 20% off on all event bookings this month!",
      valid_until: "2023-10-31T23:59:59",
    },
    {
      id: "880e8400-e29b-41d4-a716-446655440006",
      title: "Early Bird Offer",
      description: "Book your tickets early and save 15%!",
      valid_until: "2023-11-15T23:59:59",
    },
  ],
};

export default function UserDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  lg:ml-[16rem] gap-6 p-6 min-h-screen font-inter bg-MainPage-primary">
      {/* Main Content Section */}
      <div className="md:col-span-3 space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold font-spaceG">
            Hello, {userData.profile.full_name}!
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-10 bg-white w-64" placeholder="Search..." />
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-6">
          {userData.quickActions.map((action, index) => (
            <Card key={index}>
              <CardHeader className="flex items-center gap-2">
                <action.icon className="h-6 w-6 text-primary" />
                <CardTitle>{action.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-accent-foreground">
                  {action.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="w-full">
                  Open
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Upcoming Events Section */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              Stay prepared for what&apos;s next
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4  transition-all duration-700">
              {userData.upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-4 p-4 hover:scale-[101%] rounded-lg"
                >
                  <Avatar>
                    <AvatarImage src={event.media} />
                    <AvatarFallback>EV</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(event.start_time).toLocaleString()} ·{" "}
                      {event.location}
                    </p>
                  </div>
                  <Button variant="secondary" className="ml-auto">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Content Section */}
      <div className="space-y-6">
        {/* Notifications Section */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Recent updates and reminders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 w-auto">
              {userData.notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="space-y-1 flex flex-col p-2 ring-1 ring-inset ring-stone-200/60 shadow-sm"
                >
                  <div className="flex items-center gap-1 xl:gap-4 flex-wrap lg:flex-nowrap">
                    <Badge className="text-center   bg-badge_green hover:bg-badge_green ">
                      {notification.type}
                    </Badge>
                    <p className="hidden 3xl:flex text-balance">
                      {notification.message}
                    </p>
                    <p className="text-sm text-muted-foreground ml-auto">
                      {new Date(notification.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  {/** small screen  */}
                  <p className="flex  3xl:hidden">{notification.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Promotions Section */}
        <Card>
          <CardHeader>
            <CardTitle>Promotions</CardTitle>
            <CardDescription>Exclusive offers for you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userData.promotions.map((promotion) => (
                <div key={promotion.id} className="flex items-start gap-4">
                  <Gift className="text-primary h-6 w-6" />
                  <div>
                    <p className="font-medium">{promotion.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {promotion.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Valid until:{" "}
                      {new Date(promotion.valid_until).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
