import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface MetricData {
  name: string;
  value: number;
  fullMark: number;
}