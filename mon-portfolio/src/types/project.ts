import type { ReactNode } from 'react';

export interface Project {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    technologies: string[];
    link?: string;
    reportUrl?: string;
    detailedContent?: ReactNode;
}