import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="mx-auto flex min-h-[1024px] w-full max-w-[1440px] flex-col gap-5 px-6 py-8">
        <header className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display w-[420px] text-[40px] leading-[1.1] font-bold text-[#1A1A1A]">Courses</h1>
            <p className="w-[480px] text-base font-medium text-[#6B7280]">
              Pin essentials, sync updates, and keep this term organized.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-[52px] w-[320px] items-center gap-[10px] rounded-[26px] border border-[#ECE9E2] bg-white px-[18px]">
              <svg className="h-[18px] w-[18px] text-[#9CA3AF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
              </svg>
              <span className="w-[200px] text-[15px] font-medium text-[#9CA3AF]">Search courses...</span>
            </div>

            <div className="flex h-[52px] w-[190px] items-center justify-between rounded-[26px] border border-[#ECE9E2] bg-white px-[18px]">
              <span className="w-[130px] text-[15px] font-semibold text-[#1A1A1A]">Spring 2026</span>
              <svg className="h-4 w-4 text-[#6B7280]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            <Link
              className="flex h-[52px] w-[170px] items-center justify-center rounded-[26px] bg-[#FFFBEB] px-[18px] text-sm font-bold text-[#6366F1]"
              href="/quiz-cards"
            >
              Go to Quiz Cards
            </Link>
          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white" type="button">
            <svg className="h-5 w-5 text-[#1A1A1A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.7 1.7 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-.4-1 1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.4H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1-.4 1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 .4 1 1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.24.32.44.67.6 1a1.7 1.7 0 0 0 1 .4H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1 .4c-.36.28-.65.62-.85 1z" />
            </svg>
          </button>
        </header>

        <section className="flex w-full flex-col gap-4">
          <div className="flex h-[180px] w-full gap-4">
            <article className="flex h-full flex-1 flex-col gap-[10px] rounded-2xl bg-[#F6F7F8] p-5">
              <h2 className="text-[22px] font-bold text-[#1A1A1A]">Biology 201</h2>
              <p className="text-sm font-medium text-[#6B7280]">Section B • 4 items due this week</p>
              <p className="text-xs font-semibold text-[#FF6B6B]">PINNED | SYNCING</p>
            </article>

            <article className="flex h-full flex-1 flex-col gap-[10px] rounded-2xl bg-[#F6F7F8] p-5">
              <h2 className="text-[22px] font-bold text-[#1A1A1A]">World Literature</h2>
              <p className="text-sm font-medium text-[#6B7280]">Section A • 2 announcements</p>
              <p className="text-xs font-semibold text-[#22C55E]">PINNED | SYNCED</p>
            </article>
          </div>

          <div className="flex h-[180px] w-full gap-4">
            <article className="flex h-full flex-1 flex-col gap-[10px] rounded-2xl bg-[#F6F7F8] p-5">
              <h2 className="text-[22px] font-bold text-[#1A1A1A]">Calculus I</h2>
              <p className="text-sm font-medium text-[#6B7280]">Section C • 1 assignment pending</p>
              <p className="text-xs font-semibold text-[#6366F1]">UNPINNED | SYNCING</p>
            </article>

            <article className="flex h-full flex-1 flex-col gap-[10px] rounded-2xl bg-[#F6F7F8] p-5">
              <h2 className="text-[22px] font-bold text-[#1A1A1A]">Chemistry Lab</h2>
              <p className="text-sm font-medium text-[#6B7280]">Section D • 3 labs upcoming</p>
              <p className="text-xs font-semibold text-[#D97706]">PINNED | SYNC NEEDED</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
