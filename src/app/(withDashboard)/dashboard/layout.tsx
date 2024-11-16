import Sidebar from "@/components/shared/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Auth Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-gray-100 md:min-h-screen p-4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full md:w-4/5 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6">{children}</div>
      </div>
    </div>
  );
}
