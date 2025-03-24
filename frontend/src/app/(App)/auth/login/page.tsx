"use client";
import { useState } from "react";
import { useAuth } from "@/Context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FormInput from "@/components/common/FormInput";
import FormButton from "@/components/common/FormButton";

// Redirect user to dashboard if already logged in

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const { login, user } = useAuth();
  const router = useRouter();
  const handleLogin = () => {
    login(email);
    // Redirect user based on role
    if (email.endsWith("@company.com")) router.push("/dashboard/admin");
    else if (email.endsWith("@org.com")) router.push("/dashboard/organizer");
    else router.push("/dashboard/client");
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

        {/* Form Section */}
        <form className="space-y-6">
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
          />

          {/* Log In Button */}
          <FormButton
            type="submit"
            label="LogIn"
            className="bg-orange-500 hover:bg-orange-500/90"
            onClick={handleLogin}
          />
        </form>
        {/* Registration Link */}
        <p className="text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-sky-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
      {user && <p>Logged in as: {user.role}</p>}
    </div>
  );
}
