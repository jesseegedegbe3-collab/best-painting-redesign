import {
  Building2,
  CheckCircle2,
  DoorOpen,
  FileText,
  Hammer,
  Home,
  House,
  MapPin,
  MessageSquare,
  Paintbrush,
  PaintRoller,
  Ruler,
  Sparkles,
  TreePine,
  Waves,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Paintbrush,
  PaintRoller,
  Home,
  House,
  Building2,
  Hammer,
  DoorOpen,
  Waves,
  TreePine,
  Ruler,
  Sparkles,
  MessageSquare,
  FileText,
  MapPin,
  CheckCircle2,
};

export function SiteIcon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = ICONS[name] ?? PaintRoller;
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
