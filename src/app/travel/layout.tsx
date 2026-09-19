import { TravelHeader } from "@/components/TravelHeader";
import { TravelFooter } from "@/components/TravelFooter";

export default function TravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <TravelHeader />
      <main className="flex-1">{children}</main>
      <TravelFooter />
    </div>
  );
}
