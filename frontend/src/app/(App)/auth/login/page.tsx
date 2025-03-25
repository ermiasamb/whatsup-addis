"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FormInput from "@/components/common/FormInput";
import FormButton from "@/components/common/FormButton";

// Redirect user to dashboard if already logged in

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const router = useRouter();

  // Updated to handle form submission properly
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (email && password) {
      login(email);
      // Redirect user based on role
      if (email.endsWith("@admin.com")) {
        router.push("/admin/dashboard");
      } else if (email.endsWith("@org.com")) {
        router.push("/organizer/dashboard");
      } else {
        router.push("/client/dashboard");
      }
    }
  };

  return (
    <div className="min-h-screen lg:ml-[16rem] flex items-center font-poppins justify-center bg-MainPage-primary">
      {/* Container with max-w-lg for wider layout */}
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 text-sm">
            Log in to continue exploring amazing events!
          </p>
        </div>

        {/* Updated form to handle onSubmit */}
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email */}
          <FormInput
            id="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Password */}
          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            showPasswordToggle
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Updated button to be type="submit" */}
          <FormButton
            type="submit"
            label="LogIn"
            className="bg-orange-500 hover:bg-orange-500/90"
          />
        </form>
        {/* Registration Link */}
        <p className="text-center text-gray-600 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-sky-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
      {/* User redirection logic removed as it is already handled in handleLogin */}
    </div>
  );
}
