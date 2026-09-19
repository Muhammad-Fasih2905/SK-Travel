import {
  FileText,
  CalendarCheck,
  Users,
  Plane,
  Building2,
  ShieldCheck,
  Bus,
  MapPinned,
  Ticket,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import type { PackageFeature } from "@/data/packages";

const iconMap: Record<PackageFeature["icon"], LucideIcon> = {
  file: FileText,
  calendar: CalendarCheck,
  users: Users,
  plane: Plane,
  hotel: Building2,
  shield: ShieldCheck,
  bus: Bus,
  guide: MapPinned,
  ticket: Ticket,
  kaaba: Landmark,
};

export function PackageIcon({
  icon,
  className,
}: {
  icon: PackageFeature["icon"];
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} strokeWidth={1.75} />;
}
