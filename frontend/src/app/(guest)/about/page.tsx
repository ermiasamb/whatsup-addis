import { Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-l  font-inter">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-blue-50 text-blue-600 hover:bg-blue-50">
            <Rocket className="w-4 h-4 mr-2" />
            Since 2018
          </Badge>
          <h1 className="text-6xl font-semibold tracking-tight mb-6">
            Empowering Global Event Experiences
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Eventify transforms how People discover, manage, and optimize
            corporate events through smart solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* ... (stats cards remain same) ... */}
        </div>

        {/* Timeline Story */}
        <div className="mb-24">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Our Journey
          </h2>
          <p className="text-lg mx-auto font-inter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            atque? Sunt veritatis facere voluptatem provident omnis nulla nemo
            minus recusandae qui? Incidunt ipsum reiciendis explicabo, optio quo
            odit animi a. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Illum corporis minus, quos, doloremque alias vero dolorem
            repellendus, commodi consequatur ad nulla excepturi aliquid
            laboriosam cum nam totam fuga tempore ea! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Atque, sit tenetur eos, et
            laborum asperiores eaque sint cupiditate ullam, error fugiat
            repellendus recusandae corporis accusantium modi illum delectus
            voluptatum cumque?
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-24">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Executive Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/profile1.jpg"
                  alt="John Carter"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">John Conor</CardTitle>
                <p className="text-gray-600">CEO & Co-Founder</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 ">
                  Former Head of Events at various Organization
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/profile3.jpg"
                  alt="Sarah Lin"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Sarah K.</CardTitle>
                <p className="text-gray-600">CTO</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Ex-Cofounder of .....</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/profile4.jpg"
                  alt="Michael Adeyemi"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Michael Adem</CardTitle>
                <p className="text-gray-600">COO</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, exercitationem temporibus est praesentium
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investor Section */}
        <div className="border-t pt-24 text-center">
          <h3 className="text-lg font-semibold text-gray-500 uppercase mb-8">
            Our Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-16 items-center opacity-75">
            <div className="relative h-8 w-24">
              <Image
                src="/coca-cola.svg"
                alt="Coca Cola"
                className="object-contain"
                height={100}
                width={100}
              />
            </div>
            <div className="relative h-8 w-24">
              <Image
                src="/apple.svg"
                alt="Apple"
                height={100}
                width={100}
                className="object-contain"
              />
            </div>
            <div className="relative h-8 w-24">
              <Image
                src="/mcdonald.svg"
                alt="Y Combinator"
                height={100}
                width={100}
                className="object-contain"
              />
            </div>
            <div className="relative h-8 w-24">
              <Image
                src="/airbnb.svg"
                alt="Stripe"
                height={100}
                width={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
