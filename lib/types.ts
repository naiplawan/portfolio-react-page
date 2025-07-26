export interface ProjectMetrics {
  readonly users?: string;
  readonly performance?: string;
  readonly uptime?: string;
  readonly responseTime?: string;
}

export interface Project {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly problemStatement: string;
  readonly solution: string;
  readonly image: string;
  readonly technologies: readonly string[];
  readonly githubUrl: string;
  readonly liveUrl: string;
  readonly highlights?: readonly string[];
  readonly metrics?: ProjectMetrics;
  readonly category: 'fullstack' | 'ai' | 'enterprise' | 'wellness';
  readonly status: 'live' | 'development' | 'archived';
  readonly featured: boolean;
  readonly completedYear: number;
}

export interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
}