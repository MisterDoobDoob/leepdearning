'use client';

import { GlobalShell } from '@/components/GlobalShell';
import { Dashboard } from '@/components/Dashboard';
import { CoursesOverview } from '@/components/CoursesOverview';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Global Shell */}
      <GlobalShell />

      {/* Dashboard Section */}
      <div className="border-b border-gray-100">
        <Dashboard />
      </div>

      {/* Courses Overview Section */}
      <CoursesOverview />
    </div>
  );
}
