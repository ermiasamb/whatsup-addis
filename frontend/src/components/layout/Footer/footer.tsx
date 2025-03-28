"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="text-gray-300 bg-slate-900 py-10 mt-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
          {/* Branding & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              What&apos;s Up Addis
            </h2>
            <p className="mt-2 text-gray-400">
              Discover and book amazing events in Addis Ababa. Stay updated with
              the latest happenings!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-end md:items-center">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="mt-2">
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-300 hover:text-white"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">+251-123-456-789</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">info@whatsupaddis.com</span>
                </li>
              </ul>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="text-gray-400 hover:text-white" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="text-gray-400 hover:text-white" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="text-gray-400 hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="mt-10 bg-gray-700" />

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {currentYear} What&apos;s Up Addis. All Rights Reserved.
          <Link href="/terms" className="ml-4 hover:text-white">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </section>
  );
}
