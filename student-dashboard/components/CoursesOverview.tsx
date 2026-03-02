'use client';

export const CoursesOverview = () => {
  return (
    <div className="flex flex-col gap-5 p-6 bg-white border-t border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#1A1A1A]">My Courses</h2>
        <div className="flex items-center justify-center px-3 py-1.5 rounded-full bg-[#F6F7F8]">
          <span className="text-xs font-semibold text-[#1A1A1A]">Spring 2025</span>
        </div>
      </div>

      {/* Course Grid */}
      <div className="flex gap-4">
        {/* Course 1 - Chemistry */}
        <div className="flex flex-col gap-3 p-4 w-60 rounded-2xl bg-[#F6F7F8]">
          <span className="text-sm font-semibold text-[#1A1A1A]">Chemistry 101</span>
          <span className="text-xs text-[#9CA3AF]">Prof. Johnson • 24 students</span>
          <span className="text-xs font-semibold text-[#FF6B6B]">📌 Pinned</span>
        </div>

        {/* Course 2 - Physics */}
        <div className="flex flex-col gap-3 p-4 w-60 rounded-2xl bg-[#F6F7F8]">
          <span className="text-sm font-semibold text-[#1A1A1A]">Physics Lab</span>
          <span className="text-xs text-[#9CA3AF]">Prof. Smith • 18 students</span>
          <span className="text-xs font-semibold text-[#22C55E]">↻ Synced</span>
        </div>
      </div>
    </div>
  );
};
