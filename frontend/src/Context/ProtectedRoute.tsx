"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: Array<"admin" | "organizer" | "client">;
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // Redirect to login if user is not authenticated
      router.push("/login");
    } else if (!allowedRoles.includes(user.role!)) {
      // Redirect to unauthorized page if user role is not allowed
      router.push("/unauthorized");
    }
  }, [user, allowedRoles, router]);

  if (!user || !allowedRoles.includes(user.role!)) {
    return null; // Render nothing while redirecting
  }

  return <>{children}</>;
}
