import Link from "next/link";

const summaryCards = [
  { value: "142", label: "Students total", valueClass: "text-[#1A1A1A]" },
  { value: "7", label: "Classes synced", valueClass: "text-[#FF6B6B]" },
  { value: "18%", label: "At-risk (all classes)", valueClass: "text-[#22C55E]" },
];

const classCards = [
  {
    title: "Chemistry 101 · Period 2",
    subtitle: "28 students · 5 LOs below mastery · 3 urgent follow-ups",
    buttonColor: "bg-[#6366F1]",
  },
  {
    title: "Algebra II · Period 4",
    subtitle: "31 students · 7 LOs below mastery · 5 urgent follow-ups",
    buttonColor: "bg-[#FF6B6B]",
  },
  {
    title: "Biology · Period 1",
    subtitle: "24 students · 3 LOs below mastery · 1 urgent follow-up",
    buttonColor: "bg-[#22C55E]",
  },
];

export default function EducatorDesktopClassesPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col">
        <header className="flex h-[84px] w-full items-center gap-4 px-6 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6366F1]">
            <span className="font-display text-xl font-bold text-white">E</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <h1 className="font-display text-[30px] font-bold text-[#1A1A1A]">Classes</h1>
            <p className="text-[13px] text-[#6B7280]">Pick a class to review distribution + LO drilldowns</p>
          </div>
          <div className="h-px flex-1" />
          <div className="flex h-11 w-[260px] items-center gap-2 rounded-[22px] bg-[#F6F7F8] px-4">
            <span className="text-[14px] text-[#9CA3AF]">🔍</span>
            <span className="text-[13px] text-[#9CA3AF]">Search classes or standards</span>
          </div>
          <Link
            className="rounded-full bg-[#F6F7F8] px-4 py-2 text-sm font-semibold text-[#1A1A1A]"
            href="/educator"
          >
            Teacher
          </Link>
        </header>

        <section className="flex h-full w-full flex-col gap-4 px-6 pb-6 pt-3">
          <div className="grid h-[108px] grid-cols-3 gap-[14px]">
            {summaryCards.map((card) => (
              <article className="flex flex-col gap-1.5 rounded-[20px] bg-[#F6F7F8] p-5" key={card.label}>
                <p className={`font-display text-[32px] font-extrabold leading-none ${card.valueClass}`}>{card.value}</p>
                <p className="text-xs font-medium text-[#6B7280]">{card.label}</p>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {classCards.map((course) => (
              <article
                className="flex h-[112px] w-full items-center justify-between gap-4 rounded-2xl bg-[#F6F7F8] p-[18px]"
                key={course.title}
              >
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-bold text-[#1A1A1A]">{course.title}</h2>
                  <p className="text-[13px] text-[#6B7280]">{course.subtitle}</p>
                </div>
                <button
                  className={`h-10 w-[170px] shrink-0 rounded-[20px] text-[13px] font-semibold text-white ${course.buttonColor}`}
                  type="button"
                >
                  Open detail
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
