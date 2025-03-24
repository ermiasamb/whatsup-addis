import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Bell } from "lucide-react";

interface Notification {
  id: string;
  type: string;
  message: string;
  created_at: string;
}

interface NotificationsListProps {
  notifications: Notification[];
}

export function NotificationsList({ notifications }: NotificationsListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Important updates and alerts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start gap-4 p-4 hover:scale-[101%] rounded-lg">
              <Bell className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">{notification.type}</p>
                <p className="text-sm text-muted-foreground">{notification.message}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(notification.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
