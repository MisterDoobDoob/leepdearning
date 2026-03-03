export const CoursesOverview = () => {
  return (
    <section className="flex w-full flex-col gap-5 bg-white p-6">
      <div className="flex h-11 items-center gap-4">
        <h2 className="font-display text-lg font-bold text-[#1A1A1A]">My Courses</h2>
        <div className="flex h-9 w-[140px] items-center justify-center rounded-[18px] bg-[#F6F7F8] px-3">
          <span className="text-xs font-medium text-[#1A1A1A]">Spring 2026</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <article className="flex h-[140px] w-60 flex-col gap-3 rounded-2xl bg-[#F6F7F8] p-4">
          <span className="text-sm font-semibold text-[#1A1A1A]">Chemistry 101</span>
          <span className="text-xs text-[#9CA3AF]">Prof. Johnson • 24 students</span>
          <span className="text-xs font-semibold text-[#FF6B6B]">📌 Pinned</span>
        </article>

        <article className="flex h-[140px] w-60 flex-col gap-3 rounded-2xl bg-[#F6F7F8] p-4">
          <span className="text-sm font-semibold text-[#1A1A1A]">Physics Lab</span>
          <span className="text-xs text-[#9CA3AF]">Prof. Smith • 18 students</span>
          <span className="text-xs font-semibold text-[#22C55E]">↻ Synced</span>
        </article>
      </div>
    </section>
  );
};
