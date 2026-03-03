import Link from "next/link";

const kpiCards = [
  { label: "Mastery", value: "84%", fill: "bg-[#F6F7F8]", text: "text-[#1A1A1A]" },
  { label: "Growth", value: "+6.2", fill: "bg-[#F6F7F8]", text: "text-[#1A1A1A]" },
  { label: "On-time", value: "91%", fill: "bg-[#F6F7F8]", text: "text-[#1A1A1A]" },
  { label: "Engagement", value: "78%", fill: "bg-[#F6F7F8]", text: "text-[#1A1A1A]" },
  { label: "At-risk", value: "12", fill: "bg-[#FFFBEB] border border-[#FCD34D]", text: "text-[#D97706]" },
];

const interventions = [
  "Assign reteach packet to Algebra Group B",
  "Schedule 1:1 check-ins for 6 at-risk students",
  "Push engagement nudge to low-activity cohort",
];

const alerts = [
  "9 students at risk of missing milestones",
  "2 classes below weekly mastery target",
];

const weekLabels = ["W3", "W4", "W5", "W6", "W7"];

const masteryTrend = {
  classA: [72, 75, 78, 82, 86],
  classB: [68, 70, 73, 74, 77],
};

const engagementTrend = {
  classA: [64, 67, 70, 73, 76],
  classB: [62, 61, 63, 66, 68],
};

const chartWidth = 320;
const chartHeight = 120;
const chartPaddingX = 16;
const chartPaddingTop = 12;
const chartPaddingBottom = 18;

function getLinePoints(values: number[]) {
  const innerWidth = chartWidth - chartPaddingX * 2;
  const innerHeight = chartHeight - chartPaddingTop - chartPaddingBottom;
  return values.map((value, index) => {
    const x = chartPaddingX + (innerWidth * index) / (values.length - 1);
    const y = chartPaddingTop + ((100 - value) / 100) * innerHeight;
    return { x, y, value };
  });
}

function TrendChart({
  title,
  classA,
  classB,
}: {
  title: string;
  classA: number[];
  classB: number[];
}) {
  const classAPoints = getLinePoints(classA);
  const classBPoints = getLinePoints(classB);
  const classAPath = classAPoints.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const classBPath = classBPoints.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");

  return (
    <div className="flex h-full flex-col rounded-2xl bg-[#F6F7F8] p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-[#1A1A1A]">{title}</p>
        <div className="flex items-center gap-3 text-[11px] font-semibold text-[#6B7280]">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#6366F1]" />
            Class A
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
            Class B
          </span>
        </div>
      </div>

      <svg className="mt-2 h-[110px] w-full" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
        {[25, 50, 75].map((tick) => {
          const y = chartPaddingTop + ((100 - tick) / 100) * (chartHeight - chartPaddingTop - chartPaddingBottom);
          return <line key={tick} x1={chartPaddingX} x2={chartWidth - chartPaddingX} y1={y} y2={y} stroke="#E5E7EB" strokeWidth="1" />;
        })}
        <path d={classAPath} fill="none" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" />
        <path d={classBPath} fill="none" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" />
        {classAPoints.map((point, index) => (
          <circle cx={point.x} cy={point.y} fill="#6366F1" key={`a-${weekLabels[index]}`} r="3.5" />
        ))}
        {classBPoints.map((point, index) => (
          <circle cx={point.x} cy={point.y} fill="#FF6B6B" key={`b-${weekLabels[index]}`} r="3.5" />
        ))}
      </svg>

      <div className="mt-1 flex justify-between px-1 text-[10px] font-semibold text-[#9CA3AF]">
        {weekLabels.map((week) => (
          <span key={week}>{week}</span>
        ))}
      </div>
    </div>
  );
}

export default function EducatorDesktopTeacherPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col">
        <header className="flex h-[84px] w-full items-center justify-between px-6 py-4">
          <div className="flex flex-col">
            <h1 className="font-display text-[28px] font-bold text-[#1A1A1A]">Overview · Teacher</h1>
            <p className="text-sm font-medium text-[#6B7280]">Spring Term · Week 7</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              className="rounded-full bg-[#F6F7F8] px-4 py-2 text-sm font-semibold text-[#1A1A1A]"
              href="/"
            >
              Dashboard
            </Link>
            <Link
              className="rounded-full bg-[#6366F1] px-4 py-2 text-sm font-semibold text-white"
              href="/educator/classes"
            >
              Classes
            </Link>
          </div>
        </header>

        <section className="flex h-full w-full gap-4 px-6 pb-6">
          <div className="flex h-full flex-1 flex-col gap-4">
            <article className="flex h-[170px] w-full flex-col gap-3">
              <h2 className="font-display text-lg font-bold text-[#1A1A1A]">KPI cards</h2>
              <div className="grid h-full grid-cols-5 gap-3">
                {kpiCards.map((card) => (
                  <div className={`flex h-full flex-col rounded-2xl p-4 ${card.fill}`} key={card.label}>
                    <p className={`text-lg font-bold whitespace-pre-line ${card.text}`}>{`${card.label}\n${card.value}`}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="flex h-[210px] w-full flex-col gap-3">
              <h2 className="font-display text-lg font-bold text-[#1A1A1A]">Trend charts</h2>
              <div className="grid h-full grid-cols-2 gap-3">
                <TrendChart classA={masteryTrend.classA} classB={masteryTrend.classB} title="Mastery trend · Chemistry 101" />
                <TrendChart classA={engagementTrend.classA} classB={engagementTrend.classB} title="Engagement trend · Chemistry 101" />
              </div>
            </article>

            <div className="grid h-full grid-cols-[1fr_360px] gap-3">
              <article className="flex h-full flex-col gap-2 rounded-2xl bg-[#F6F7F8] p-4">
                <h2 className="font-display text-lg font-bold text-[#1A1A1A]">Gap heatmap (LO/topic)</h2>
                <div className="h-full rounded-xl bg-linear-to-r from-[#E0E7FF] via-[#FCD34D] to-[#FF6B6B]" />
              </article>
              <article className="flex h-full flex-col gap-3 rounded-2xl bg-[#F6F7F8] p-4">
                <h2 className="font-display text-lg font-bold text-[#1A1A1A]">Recommended interventions</h2>
                {interventions.map((item, index) => (
                  <p className="text-[13px] text-[#6B7280]" key={item}>{`${index + 1}. ${item}`}</p>
                ))}
              </article>
            </div>
          </div>

          <aside className="w-[280px] rounded-2xl bg-[#F6F7F8] p-4">
            <h2 className="font-display text-lg font-bold text-[#1A1A1A]">Alerts (Optional)</h2>
            <div className="mt-3 flex flex-col gap-2">
              {alerts.map((alert) => (
                <p className="text-[13px] text-[#6B7280]" key={alert}>{`• ${alert}`}</p>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
