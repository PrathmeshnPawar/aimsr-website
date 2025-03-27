import { Sidebar } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Your dashboard navigation */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
