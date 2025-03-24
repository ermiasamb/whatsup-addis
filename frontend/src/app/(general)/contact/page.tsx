import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen  bg-MainPage-primary">
      <div className="container mx-auto px-4 max-w-6xl py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant help from our team or browse documentation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">
                    Talk to our support team in real-time
                  </p>
                  <Button className="gap-2">
                    Start Chat
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">
                    Typical response time: 2 hours
                  </p>
                  <Button variant="outline" className="gap-2">
                    support@eventify.com
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Contact Form</h2>
            <Card className="shadow-none border">
              <CardContent className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First name</Label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label>Last name</Label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Company email</Label>
                  <Input placeholder="john@company.com" type="email" />
                </div>

                <div className="space-y-2">
                  <Label>Company name</Label>
                  <Input placeholder="Company LLC" />
                </div>

                <div className="space-y-2">
                  <Label>Message</Label>
                  <Textarea
                    placeholder="How can we help you?"
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gray-600" />
                  <div>
                    <h3 className="font-semibold">Phone Support</h3>
                    <p className="text-gray-600">+1 (800) 555-0192</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon-Fri: 5am - 8pm PST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-600" />
                  <div>
                    <h3 className="font-semibold">Global Headquarters</h3>
                    <p className="text-gray-600">
                      415 Mission Street
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gray-600" />
                  <div>
                    <h3 className="font-semibold">Local Time</h3>
                    <p className="text-gray-600">
                      {new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZoneName: "short",
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Support Resources</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded">
                    <span>Help Center</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded">
                    <span>API Documentation</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded">
                    <span>System Status</span>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-600"
                    >
                      Operational
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 border-t pt-16">
          <div className="text-center space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase">
              Trusted by teams at
            </h3>
            <div className="flex flex-wrap justify-center gap-8 opacity-75">
              <span className="font-medium">Stripe</span>
              <span className="font-medium">Zoom</span>
              <span className="font-medium">Slack</span>
              <span className="font-medium">Shopify</span>
              <span className="font-medium">Datadog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
