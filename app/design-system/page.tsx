import type { Metadata } from 'next';
import ButtonShowcase from '@/components/ui/button-showcase';

export const metadata: Metadata = {
  title: 'Design System',
  description: 'Complete design system showcase for MagicWorld Travel Agency including colors, buttons, and interactive elements.',
};

export default function DesignSystemPage() {
  return <ButtonShowcase />;
}