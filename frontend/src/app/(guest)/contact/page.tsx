import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 max-w-6xl py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl font-bold  tracking-tight">Support Center</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get instant help from our team or browse our documentation.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-300 mb-4">
                    Talk to our support team in real-time.
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
                  <p className="text-gray-300 mb-4">
                    Typical response time: 2 hours.
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
            <h2 className="text-2xl font-semibold text-white">Contact Form</h2>
            <Card className="shadow-none border">
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Company Email</Label>
                  <Input
                    id="email"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" placeholder="Company LLC" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
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
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gray-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Phone Support
                    </h3>
                    <p className="text-gray-600">+1 (800) 555-0192</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon-Fri: 5am - 8pm PST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Global Headquarters
                    </h3>
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
                    <h3 className="font-semibold text-gray-800">Local Time</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}
