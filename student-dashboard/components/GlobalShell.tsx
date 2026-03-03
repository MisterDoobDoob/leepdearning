export const GlobalShell = () => {
  return (
    <header className="flex h-20 w-full items-center gap-6 bg-white px-6 py-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B6B]">
        <span className="font-display text-xl font-bold text-white">S</span>
      </div>

      <div className="flex h-11 w-[180px] items-center gap-2 rounded-[20px] bg-[#F6F7F8] px-3 py-2">
        <span className="text-base">📚</span>
        <span className="text-[13px] font-semibold text-[#1A1A1A]">Chemistry 101</span>
      </div>

      <div className="flex-1" />

      <div className="flex h-11 w-[280px] items-center gap-3 rounded-[26px] bg-[#F6F7F8] px-[18px]">
        <span className="text-base">🔍</span>
        <span className="text-[13px] text-[#9CA3AF]">Search courses...</span>
      </div>

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F6F7F8]">
        <span className="text-lg">🔔</span>
      </div>
    </header>
  );
};
