import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { ReactNode } from "react";
import "../globals.css";
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex gap-5">
      <DashboardSidebar />
      <div className="w-[calc(100vw-100px)]  ml-auto">{children}</div>
    </section>
  );
};

export default DashboardLayout;
