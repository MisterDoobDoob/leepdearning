import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="mx-auto flex min-h-[1024px] w-full max-w-[1440px] flex-col gap-6 p-8">
        <header className="flex h-11 w-full items-center justify-between">
          <h1 className="font-display text-[32px] font-bold text-[#1A1A1A]">Knowva</h1>
          <div className="flex items-center gap-3">
            <Link
              aria-label="Plan"
              className="flex h-11 w-[110px] items-center justify-center rounded-[20px] border border-[#9CA3AF] bg-white text-[15px] font-semibold text-[#1A1A1A]"
              href="/courses"
            >
              Courses
            </Link>
            <Link
              className="flex h-11 w-[110px] items-center justify-center rounded-[20px] border border-[#9CA3AF] bg-white text-[15px] font-semibold text-[#1A1A1A]"
              href="/feynman-chat"
            >
              Chat
            </Link>
            <Link
              className="flex h-11 w-[110px] items-center justify-center rounded-[20px] bg-[#FF6B6B] text-[15px] font-bold text-white"
              href="/quiz-cards"
            >
              Quiz
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F6F7F8]" type="button">
              <svg className="h-5 w-5 text-[#1A1A1A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12a9 9 0 0 1-15.4 6.4" />
                <path d="M3 12a9 9 0 0 1 15.4-6.4" />
                <polyline points="4 17 5.6 18.4 7 20" />
                <polyline points="20 7 18.4 5.6 17 4" />
              </svg>
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F6F7F8]" type="button">
              <svg className="h-5 w-5 text-[#1A1A1A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.7 1.7 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-.4-1 1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.4H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1-.4 1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 .4 1 1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.24.32.44.67.6 1a1.7 1.7 0 0 0 1 .4H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1 .4c-.36.28-.65.62-.85 1z" />
              </svg>
            </button>
          </div>
        </header>

        <p className="text-base font-medium text-[#6B7280]">Your week at a glance with priorities and next actions</p>

        <section className="flex h-full w-full gap-6">
          <div className="flex h-full w-[860px] shrink-0 flex-col gap-6">
            <article className="flex h-[430px] w-full flex-col gap-4 rounded-[20px] bg-[#F6F7F8] p-6">
              <p className="text-sm font-semibold text-[#6B7280]">Learning Progress</p>
              <div className="flex items-center gap-3">
                <p className="font-display text-[64px] leading-none font-bold text-[#1A1A1A]">78%</p>
                <div className="rounded-2xl bg-[#22C55E] px-3 py-1.5 text-[13px] font-bold text-white">+12% this week</div>
              </div>
              <p className="w-full text-base font-medium text-[#6B7280]">
                You are ahead of plan in biology and on track in history. Keep your momentum with one focused pre-read block.
              </p>
            </article>

            <article className="flex h-[280px] w-full flex-col gap-3 rounded-[20px] bg-[#FFFBEB] p-5">
              <h2 className="font-display text-2xl font-bold text-[#1A1A1A]">Pre-read for next week</h2>
              <p className="w-full text-base font-medium text-[#6B7280]">
                Chemistry Unit 4 starts Monday. Read chapter 12 and review the reaction map so lecture examples click immediately.
              </p>
            </article>
          </div>

          <div className="flex h-full flex-1 flex-col gap-5">
            <article className="flex h-[260px] flex-col gap-3 rounded-2xl bg-[#F6F7F8] p-[18px]">
              <h3 className="font-display text-[20px] font-bold text-[#1A1A1A]">Upcoming Homework</h3>
              <p className="text-[15px] font-medium text-[#6B7280]">• Algebra problem set due Thu 11:59 PM</p>
              <p className="text-[15px] font-medium text-[#6B7280]">• History reading reflection due Fri 5:00 PM</p>
            </article>

            <article className="flex h-[510px] flex-col gap-3 rounded-2xl bg-[#F6F7F8] p-[18px]">
              <h3 className="font-display text-[20px] font-bold text-[#1A1A1A]">Recommended Next Steps</h3>
              <p className="text-[15px] font-bold text-[#1A1A1A]">1. Finish Algebra Set A</p>
              <p className="text-sm font-medium text-[#6B7280]">
                Why: You missed 2 prerequisite concepts in last quiz; completing Set A raises readiness for Thursday homework.
              </p>
              <p className="text-[15px] font-bold text-[#1A1A1A]">2. Read Chemistry Chapter 12</p>
              <p className="text-sm font-medium text-[#6B7280]">
                Why: This chapter is directly referenced in Monday&apos;s lecture and unlocks your lab prep assignment.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
