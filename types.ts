export enum UserRole {
  GUEST = 'GUEST',
  SUBSCRIBER = 'SUBSCRIBER',
  ADMIN = 'ADMIN'
}

export interface Case {
  id: string;
  title: string;
  citation: string;
  court: string;
  judge: string;
  date: string; // ISO date string
  summary: string;
  fullText: string;
  tags: string[];
  parties: string[];
}

export interface Lawyer {
  id: string;
  name: string;
  firm: string;
  practiceAreas: string[];
  location: string;
  rating: number;
  verified: boolean;
  imageUrl?: string;
}

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  postedDate: string;
  description?: string;
}

export interface SearchFilters {
  query: string;
  court?: string;
  yearStart?: string;
  yearEnd?: string;
  practiceArea?: string;
}

export interface AnalyticsData {
  name: string;
  value: number;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content?: string;
}

export interface Statute {
  id: string;
  title: string;
  type: 'Act' | 'Rule' | 'Template' | 'Form';
  year: string;
  category: string;
  downloadUrl: string;
}

export interface BriefRequest {
  id: string;
  title: string;
  court: string;
  location: string;
  date: string;
  fee: string;
  status: 'Open' | 'Assigned' | 'Completed';
  requester: string;
}

export interface ComplianceResource {
  id: string;
  title: string;
  description: string;
  type: 'Checklist' | 'Guide' | 'Tool';
  category: 'AML' | 'Corporate' | 'Tax' | 'Regulatory';
}