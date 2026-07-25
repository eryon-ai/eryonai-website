import { LucideIcon } from 'lucide-react';

interface SectionBadgeProps {
  icon: LucideIcon;
  label: string;
  color?: string;
  className?: string;
}

export default function SectionBadge({ icon: Icon, label, color = '#0066ff', className = '' }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wider uppercase ${className}`}
      style={{ background: `${color}1a`, border: `1px solid ${color}40`, color }}
    >
      <Icon size={13} strokeWidth={2.5} aria-hidden="true" />
      {label}
    </div>
  );
}
