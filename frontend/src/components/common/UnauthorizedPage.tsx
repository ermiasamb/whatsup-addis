import { AlertCircle } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <AlertCircle className="h-10 w-10 text-red-500" />
        <h1 className="text-3xl font-semibold">Access Denied</h1>
      </div>
      <p className="text-lg text-gray-400">
        You are not authorized to view this page.
      </p>
    </div>
  );
}