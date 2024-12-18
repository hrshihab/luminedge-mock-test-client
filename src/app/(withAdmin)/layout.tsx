import Sidebar from "@/components/shared/Sidebar";
import SidebarAdmin from "@/components/shared/SidebarAdmin";
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
    <div className="min-h-screen my-2">
      <div className="flex justify-around">
        <div className="w-[20%] justify-start">
          <SidebarAdmin />
        </div>
        <div className="w-[80%]  rounded-box ml-2">{children}</div>
      </div>
    </div>
  );
}
