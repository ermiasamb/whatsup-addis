import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Attendee {
  id: string;
  full_name: string;
  email: string;
  profile_picture: string;
}

interface AttendeesListProps {
  attendees: Attendee[];
}

export function AttendeesList({ attendees }: AttendeesListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendees Summary</CardTitle>
        <CardDescription>List of attendees for this event</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {attendees.map((attendee) => (
            <div key={attendee.id} className="flex items-center gap-4 p-4 hover:scale-[101%] rounded-lg">
              <Avatar>
                <AvatarImage src={attendee.profile_picture} />
                <AvatarFallback>{attendee.full_name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{attendee.full_name}</p>
                <p className="text-sm text-muted-foreground">{attendee.email}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
