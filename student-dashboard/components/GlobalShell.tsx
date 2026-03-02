'use client';

export const GlobalShell = () => {
  return (
    <div className="flex items-center gap-6 h-20 px-6 bg-white shadow-sm border-b border-gray-100">
      {/* Logo */}
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#FF6B6B]">
        <span className="text-white text-lg font-bold">S</span>
      </div>

      {/* Course Switcher */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#F6F7F8]">
        <span className="text-base">��</span>
        <span className="text-sm font-semibold text-[#1A1A1A]">Chemistry 101</span>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Search Bar */}
      <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#F6F7F8]">
        <span className="text-base">🔍</span>
        <span className="text-sm text-[#9CA3AF]">Search courses...</span>
      </div>

      {/* Notification Button */}
      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#F6F7F8]">
        <span className="text-lg">🔔</span>
      </div>
    </div>
  );
};
