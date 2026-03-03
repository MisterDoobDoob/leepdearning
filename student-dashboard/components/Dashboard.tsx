import Link from "next/link";

export const Dashboard = () => {
  return (
    <section className="flex w-full gap-8 bg-white p-6">
      <div className="flex w-[450px] shrink-0 flex-col gap-6">
        <div className="flex h-[180px] flex-col gap-3 rounded-[20px] bg-[#F6F7F8] p-6">
          <span className="text-[13px] font-medium text-[#9CA3AF]">Learning Progress</span>
          <span className="font-display text-5xl font-extrabold text-[#FF6B6B]">68%</span>
          <span className="text-[13px] text-[#6B7280]">Mastery this term</span>
        </div>

        <div className="flex h-[120px] flex-col gap-3 rounded-2xl bg-[#FFFBEB] p-4">
          <span className="text-sm font-semibold text-[#1A1A1A]">Pre-read Next Week</span>
          <span className="text-xs text-[#6B7280]">3 topics • Avg. 12 min each</span>
        </div>
      </div>

      <div className="flex w-[400px] shrink-0 flex-col gap-5">
        <div>
          <h3 className="font-display mb-4 text-lg font-bold text-[#1A1A1A]">Upcoming Homework</h3>
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#F6F7F8]">
            <span className="text-sm font-semibold text-[#1A1A1A]">Chapter 7 Practice Set</span>
            <span className="text-xs text-[#FF6B6B]">Due: March 10 at 11:59 PM</span>
          </div>
        </div>

        <div>
          <h3 className="font-display mb-4 text-lg font-bold text-[#1A1A1A]">Quick Actions</h3>
          <div className="flex flex-col gap-3">
            <button
              className="flex h-11 w-full items-center justify-center gap-2 rounded-[20px] bg-[#6366F1] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#4f46e5]"
              type="button"
            >
              ↻ Sync Courses
            </button>
            <Link
              className="flex h-11 w-full items-center justify-center rounded-[20px] bg-[#FFFBEB] px-4 text-[13px] font-bold text-[#6366F1] transition-colors hover:bg-[#FEF3C7]"
              href="/quiz-cards"
            >
              Go to Quiz Cards
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
