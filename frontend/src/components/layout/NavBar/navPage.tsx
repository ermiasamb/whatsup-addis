"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Bell, Search, User } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full font-poppins bg-slate-900 text-white z-50 shadow-sm">
      <div className="w-[94%] mx-auto px-4">
        <div className="flex items-center justify-between h-[4rem] ">
          {/* Left Side - Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex lg:items-center lg:space-x-2">
              <Image
                src="/airbnb.svg"
                alt="Logo"
                width={30}
                height={30}
                className="rounded-full bg-white"
              />
              <span className=" text-lg  font-inter">What&apos;sup Addis</span>
            </div>
          </div>

          {/* Center - Search Bar */}
          <div className="relative w-[260px] xl:w-[300px]">
            <Search className="absolute left-2 top-2.5 h-5 w-5 text-slate-900" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 bg-MainPage-primary  focus-visible:ring-white"
            />
          </div>

          {/* Right Side - Icons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className=" w-12 h-12 rounded-full hover:bg-gray-100"
            >
              <Bell className="rounded-full scale-150" />
            </Button>

            <Button
              variant="ghost"
              className="rounded-full w-12 h-12 border border-gray-200 hover:border-gray-300"
            >
              <User className="scale-150 " />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
