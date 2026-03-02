'use client';

export const Dashboard = () => {
  return (
    <div className="flex gap-8 p-6 bg-white">
      {/* Left Column */}
      <div className="flex flex-col gap-6 w-96">
        {/* Hero Card - Learning Progress */}
        <div className="flex flex-col gap-3 p-6 rounded-3xl bg-[#F6F7F8]">
          <span className="text-xs font-medium text-[#9CA3AF]">Learning Progress</span>
          <span className="text-5xl font-black text-[#FF6B6B]">68%</span>
          <span className="text-sm text-[#6B7280]">Mastery this term</span>
        </div>

        {/* Pre-read Card */}
        <div className="flex flex-col gap-3 p-4 rounded-2xl bg-[#FFFBEB]">
          <span className="text-sm font-semibold text-[#1A1A1A]">Pre-read Next Week</span>
          <span className="text-xs text-[#6B7280]">3 topics • Avg. 12 min each</span>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5 w-96">
        {/* Upcoming Homework Section */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-[#1A1A1A]">Upcoming Homework</h3>
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#F6F7F8]">
            <span className="text-sm font-semibold text-[#1A1A1A]">Chapter 7 Practice Set</span>
            <span className="text-xs font-semibold text-[#FF6B6B]">Due: March 10 at 11:59 PM</span>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-[#1A1A1A]">Quick Actions</h3>
          <button className="flex items-center justify-center w-full gap-2 px-4 py-3 rounded-2xl bg-[#6366F1] text-white font-semibold text-sm hover:bg-[#4F46E5] transition-colors">
            ↻ Sync Courses
          </button>
        </div>
      </div>
    </div>
  );
};
