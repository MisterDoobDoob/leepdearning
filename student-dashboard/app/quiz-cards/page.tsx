"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const cardsByCourseAndTopic = {
  "Computer Science": {
    "Week 3 - Algorithms": [
      {
        title: "Binary search invariants",
        subtitle: "Deck: Algorithms · due in 2m",
        tag: "Hard",
        tagClass: "bg-[#FFFBEB] text-[#B45309]",
      },
      {
        title: "OSI model ports",
        subtitle: "Deck: Networking · new",
        tag: "New",
        tagClass: "bg-[#FFE4E6] text-[#BE123C]",
      },
      {
        title: "Normal forms (1NF→BCNF)",
        subtitle: "Deck: Databases · due today",
        tag: "Good",
        tagClass: "bg-[#E0E7FF] text-[#6366F1]",
      },
      {
        title: "TLS handshake order",
        subtitle: "Deck: Security · due tomorrow",
        tag: "Easy",
        tagClass: "bg-[#DCFCE7] text-[#22C55E]",
      },
      {
        title: "React render lifecycle",
        subtitle: "Deck: Frontend · due in 5m",
        tag: "Again",
        tagClass: "bg-[#FFE4E6] text-[#BE123C]",
      },
    ],
    "Week 4 - Data Structures": [
      {
        title: "Heap insert complexity",
        subtitle: "Deck: Data Structures · due in 4m",
        tag: "Good",
        tagClass: "bg-[#E0E7FF] text-[#6366F1]",
      },
      {
        title: "Trie node branching",
        subtitle: "Deck: Data Structures · new",
        tag: "New",
        tagClass: "bg-[#FFE4E6] text-[#BE123C]",
      },
      {
        title: "BFS queue order",
        subtitle: "Deck: Graphs · due today",
        tag: "Hard",
        tagClass: "bg-[#FFFBEB] text-[#B45309]",
      },
    ],
    "Week 5 - Complexity": [
      {
        title: "Master theorem cases",
        subtitle: "Deck: Complexity · due in 7m",
        tag: "Again",
        tagClass: "bg-[#FFE4E6] text-[#BE123C]",
      },
      {
        title: "Big-O vs Big-Theta",
        subtitle: "Deck: Complexity · due tomorrow",
        tag: "Easy",
        tagClass: "bg-[#DCFCE7] text-[#22C55E]",
      },
    ],
  },
  "Chemistry 101": {
    "Week 2 - Atomic Structure": [
      {
        title: "Electron shell capacities",
        subtitle: "Deck: Atomic Structure · due in 3m",
        tag: "Good",
        tagClass: "bg-[#E0E7FF] text-[#6366F1]",
      },
      {
        title: "Isotope notation",
        subtitle: "Deck: Atomic Structure · due today",
        tag: "Hard",
        tagClass: "bg-[#FFFBEB] text-[#B45309]",
      },
    ],
    "Week 3 - Bonding": [
      {
        title: "Ionic vs covalent",
        subtitle: "Deck: Bonding · due in 2m",
        tag: "New",
        tagClass: "bg-[#FFE4E6] text-[#BE123C]",
      },
      {
        title: "VSEPR geometry basics",
        subtitle: "Deck: Bonding · due tomorrow",
        tag: "Easy",
        tagClass: "bg-[#DCFCE7] text-[#22C55E]",
      },
      {
        title: "Lewis structure valence",
        subtitle: "Deck: Bonding · due today",
        tag: "Again",
        tagClass: "bg-[#FFE4E6] text-[#BE123C]",
      },
    ],
    "Week 4 - Reactions": [
      {
        title: "Balancing redox equations",
        subtitle: "Deck: Reactions · due in 8m",
        tag: "Hard",
        tagClass: "bg-[#FFFBEB] text-[#B45309]",
      },
      {
        title: "Reaction type classifier",
        subtitle: "Deck: Reactions · new",
        tag: "New",
        tagClass: "bg-[#FFE4E6] text-[#BE123C]",
      },
    ],
  },
  Mathematics: {
    "Week 1 - Limits": [
      {
        title: "One-sided limits",
        subtitle: "Deck: Calculus · due in 6m",
        tag: "Good",
        tagClass: "bg-[#E0E7FF] text-[#6366F1]",
      },
      {
        title: "Indeterminate forms",
        subtitle: "Deck: Calculus · due today",
        tag: "Hard",
        tagClass: "bg-[#FFFBEB] text-[#B45309]",
      },
    ],
    "Week 2 - Derivatives": [
      {
        title: "Product rule",
        subtitle: "Deck: Derivatives · due in 4m",
        tag: "Easy",
        tagClass: "bg-[#DCFCE7] text-[#22C55E]",
      },
      {
        title: "Chain rule nesting",
        subtitle: "Deck: Derivatives · new",
        tag: "New",
        tagClass: "bg-[#FFE4E6] text-[#BE123C]",
      },
    ],
    "Week 3 - Integrals": [
      {
        title: "u-substitution trigger",
        subtitle: "Deck: Integrals · due tomorrow",
        tag: "Again",
        tagClass: "bg-[#FFE4E6] text-[#BE123C]",
      },
      {
        title: "Definite vs indefinite",
        subtitle: "Deck: Integrals · due in 9m",
        tag: "Good",
        tagClass: "bg-[#E0E7FF] text-[#6366F1]",
      },
    ],
  },
  "Biology 201": {
    "Week 2 - Cell Cycle": [
      {
        title: "Mitosis phases",
        subtitle: "Deck: Cell Biology · due in 5m",
        tag: "Hard",
        tagClass: "bg-[#FFFBEB] text-[#B45309]",
      },
      {
        title: "Checkpoint functions",
        subtitle: "Deck: Cell Biology · due today",
        tag: "Good",
        tagClass: "bg-[#E0E7FF] text-[#6366F1]",
      },
    ],
    "Week 3 - Genetics": [
      {
        title: "Punnett square outcomes",
        subtitle: "Deck: Genetics · due in 3m",
        tag: "Easy",
        tagClass: "bg-[#DCFCE7] text-[#22C55E]",
      },
      {
        title: "Dominant vs recessive",
        subtitle: "Deck: Genetics · new",
        tag: "New",
        tagClass: "bg-[#FFE4E6] text-[#BE123C]",
      },
      {
        title: "Codominance examples",
        subtitle: "Deck: Genetics · due tomorrow",
        tag: "Again",
        tagClass: "bg-[#FFE4E6] text-[#BE123C]",
      },
    ],
    "Week 4 - Evolution": [
      {
        title: "Natural selection criteria",
        subtitle: "Deck: Evolution · due in 10m",
        tag: "Hard",
        tagClass: "bg-[#FFFBEB] text-[#B45309]",
      },
      {
        title: "Genetic drift",
        subtitle: "Deck: Evolution · due tomorrow",
        tag: "Good",
        tagClass: "bg-[#E0E7FF] text-[#6366F1]",
      },
    ],
  },
};

const quickStats = [
  {
    value: "87%",
    label: "Retention this week",
    hint: "+6% from last week",
    hintClass: "text-[#22C55E]",
  },
  {
    value: "24",
    label: "Cards due in this session",
    hint: "10 min sprint recommended",
    hintClass: "text-[#6366F1]",
  },
];

export default function QuizCardsPage() {
  const searchParams = useSearchParams();

  const courseOptions = useMemo(
    () => ["Computer Science", "Chemistry 101", "Mathematics", "Biology 201"],
    []
  );

  const topicOptions = useMemo(
    () => ({
      "Computer Science": ["Week 3 - Algorithms", "Week 4 - Data Structures", "Week 5 - Complexity"],
      "Chemistry 101": ["Week 2 - Atomic Structure", "Week 3 - Bonding", "Week 4 - Reactions"],
      Mathematics: ["Week 1 - Limits", "Week 2 - Derivatives", "Week 3 - Integrals"],
      "Biology 201": ["Week 2 - Cell Cycle", "Week 3 - Genetics", "Week 4 - Evolution"],
    }),
    []
  );

  const defaultCourse = courseOptions[0];
  const defaultTopic = topicOptions[defaultCourse][0];
  const requestedCourse = searchParams.get("course");
  const requestedTopic = searchParams.get("topic");

  const safeCourse = requestedCourse && topicOptions[requestedCourse] ? requestedCourse : defaultCourse;
  const safeTopic =
    requestedTopic && topicOptions[safeCourse].includes(requestedTopic) ? requestedTopic : topicOptions[safeCourse][0];

  const [selectedCourse, setSelectedCourse] = useState(safeCourse);
  const [selectedTopic, setSelectedTopic] = useState(safeTopic ?? defaultTopic);
  const [openDropdown, setOpenDropdown] = useState<"course" | "topic" | null>(null);
  const selectorAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!selectorAreaRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentTopicOptions = topicOptions[selectedCourse as keyof typeof topicOptions];

  const chooseCourse = (course: string) => {
    setSelectedCourse(course);
    setSelectedTopic(topicOptions[course as keyof typeof topicOptions][0]);
    setOpenDropdown(null);
  };

  const chooseTopic = (topic: string) => {
    setSelectedTopic(topic);
    setOpenDropdown(null);
  };

  const modeHref = `/quiz-cards/mode?${new URLSearchParams({
    course: selectedCourse,
    topic: selectedTopic,
  }).toString()}`;

  const visibleCards =
    cardsByCourseAndTopic[selectedCourse as keyof typeof cardsByCourseAndTopic][
      selectedTopic as keyof (typeof cardsByCourseAndTopic)[keyof typeof cardsByCourseAndTopic]
    ] ?? [];

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="mx-auto flex min-h-[1024px] w-full max-w-[1440px] flex-col gap-6 px-16 py-9">
        <header className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              className="flex h-10 items-center rounded-full bg-[#F6F7F8] px-4 text-sm font-semibold text-[#1A1A1A]"
              href="/"
            >
              ← Dashboard
            </Link>
            <div className="flex flex-col gap-1.5">
              <h1 className="font-display text-4xl font-bold text-[#1A1A1A]">Quiz Cards</h1>
              <p className="text-[15px] font-medium text-[#6B7280]">Build daily momentum with short deck drills</p>
            </div>
          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white" type="button">
            <svg className="h-5 w-5 text-[#1A1A1A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.7 1.7 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-.4-1 1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.4H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1-.4 1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 .4 1 1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.24.32.44.67.6 1a1.7 1.7 0 0 0 1 .4H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1 .4c-.36.28-.65.62-.85 1z" />
            </svg>
          </button>
        </header>

        <section className="flex h-full w-full gap-6">
          <div className="flex h-full flex-1 flex-col gap-4">
            <div className="flex w-full gap-3">
              <div className="flex h-[52px] flex-1 items-center gap-[10px] rounded-[26px] bg-white px-4">
                <svg className="h-[18px] w-[18px] text-[#9CA3AF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" x2="16.65" y1="21" y2="16.65" />
                </svg>
                <span className="text-sm font-medium text-[#9CA3AF]">Search cards, tags, examples</span>
              </div>

              <button className="flex h-[52px] items-center justify-center rounded-[26px] bg-[#F6F7F8] px-4 text-[13px] font-bold text-[#1A1A1A]" type="button">
                All
              </button>
              <button className="flex h-[52px] items-center justify-center rounded-[26px] bg-white px-4 text-[13px] font-semibold text-[#6B7280]" type="button">
                Need review
              </button>
            </div>

            <div className="flex h-[52px] w-full gap-3" ref={selectorAreaRef}>
              <div className="relative h-full w-[220px]">
                <button
                  className="flex h-full w-full items-center justify-between rounded-[20px] border border-[#E8E5DE] bg-white px-4"
                  onClick={() => setOpenDropdown((prev) => (prev === "course" ? null : "course"))}
                  type="button"
                >
                  <span className="w-[170px] text-left text-[13px] font-semibold text-[#1A1A1A]">Course: {selectedCourse}</span>
                  <svg className="h-4 w-4 text-[#6B7280]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {openDropdown === "course" ? (
                  <div className="absolute z-20 mt-2 w-full rounded-2xl border border-[#E8E5DE] bg-white p-1 shadow-lg">
                    {courseOptions.map((course) => (
                      <button
                        className="w-full rounded-xl px-3 py-2 text-left text-[13px] font-semibold text-[#1A1A1A] hover:bg-[#F6F7F8]"
                        key={course}
                        onClick={() => chooseCourse(course)}
                        type="button"
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="relative h-full w-[240px]">
                <button
                  className="flex h-full w-full items-center justify-between rounded-[20px] border border-[#E8E5DE] bg-white px-4"
                  onClick={() => setOpenDropdown((prev) => (prev === "topic" ? null : "topic"))}
                  type="button"
                >
                  <span className="w-[190px] text-left text-[13px] font-semibold text-[#1A1A1A]">Week/Topic: {selectedTopic}</span>
                  <svg className="h-4 w-4 text-[#6B7280]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {openDropdown === "topic" ? (
                  <div className="absolute z-20 mt-2 w-full rounded-2xl border border-[#E8E5DE] bg-white p-1 shadow-lg">
                    {currentTopicOptions.map((topic) => (
                      <button
                        className="w-full rounded-xl px-3 py-2 text-left text-[13px] font-semibold text-[#1A1A1A] hover:bg-[#F6F7F8]"
                        key={topic}
                        onClick={() => chooseTopic(topic)}
                        type="button"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex h-full w-full flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <h2 className="font-display text-[20px] font-bold text-[#1A1A1A]">Cards due now</h2>
                <p className="text-[13px] font-semibold text-[#9CA3AF]">{`${visibleCards.length} cards · ${selectedCourse} · ${selectedTopic}`}</p>
              </div>

              {visibleCards.map((card) => {
                const askCoachHref = `/feynman-chat?${new URLSearchParams({
                  course: selectedCourse,
                  topic: selectedTopic,
                  from: "cards",
                  item: card.title,
                }).toString()}`;

                return (
                  <article className="flex min-h-[94px] items-center justify-between rounded-[18px] bg-white p-4" key={card.title}>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[15px] font-bold text-[#1A1A1A]">{card.title}</h3>
                      <p className="text-[13px] font-medium text-[#6B7280]">{card.subtitle}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className={`rounded-xl px-[10px] py-1.5 text-xs font-bold ${card.tagClass}`}>{card.tag}</div>
                      <Link className="text-xs font-bold text-[#6366F1]" href={askCoachHref}>
                        Ask Feynie about this
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="flex h-full w-[316px] flex-col gap-3">
            {quickStats.map((stat) => (
              <article className="flex h-[138px] w-full flex-col gap-2 rounded-[20px] bg-white p-[18px]" key={stat.label}>
                <p className="font-display text-[34px] font-extrabold text-[#1A1A1A]">{stat.value}</p>
                <p className="text-[13px] font-medium text-[#9CA3AF]">{stat.label}</p>
                <p className={`text-xs font-bold ${stat.hintClass}`}>{stat.hint}</p>
              </article>
            ))}

            <article className="flex h-[186px] w-full flex-col gap-3 rounded-[20px] bg-[#FF6B6B] p-[18px]">
              <h3 className="font-display text-[22px] font-bold text-white">Quick Start</h3>
              <p className="text-[13px] font-medium leading-[1.4] text-white">
                Challenge your weakest cards of this topic.
              </p>
              <Link
                className="w-fit rounded-xl bg-white px-3 py-2 text-xs font-bold text-[#FF6B6B]"
                href={modeHref}
              >
                Start session
              </Link>
            </article>
          </aside>
        </section>
      </div>
    </main>
  );
}
