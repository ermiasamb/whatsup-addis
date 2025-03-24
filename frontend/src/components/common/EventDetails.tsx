import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar, Ticket, BarChart } from "lucide-react";

interface EventDetailsProps {
  startTime: string;
  endTime: string;
  location: string;
  category: string;
}

export function EventDetails({ startTime, endTime, location, category }: EventDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Details</CardTitle>
        <CardDescription>Key details about the event</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Calendar className="h-6 w-6 text-primary" />
            <div>
              <p className="font-medium">Date</p>
              <p className="text-sm text-muted-foreground">
                {new Date(startTime).toLocaleDateString()} - {new Date(endTime).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Ticket className="h-6 w-6 text-primary" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <BarChart className="h-6 w-6 text-primary" />
            <div>
              <p className="font-medium">Category</p>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
