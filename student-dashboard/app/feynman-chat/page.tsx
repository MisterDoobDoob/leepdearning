"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const subjects = [
  {
    key: "all",
    label: "All subjects",
    customText: "All subjects",
    topics: ["Cross-subject review", "Weakest concept", "Quick explain-back"],
    course: "General",
  },
  {
    key: "biology",
    label: "Biology",
    customText: "Biology · life systems",
    topics: ["Cell Cycle", "Genetics", "Evolution"],
    course: "Biology 201",
  },
  {
    key: "chemistry",
    label: "Chemistry",
    customText: "Chemistry · reactions",
    topics: ["Atomic Structure", "Bonding", "Reactions"],
    course: "Chemistry 101",
  },
  {
    key: "algorithms",
    label: "Algorithms",
    customText: "Algorithms · problem solving",
    topics: ["Binary Search", "Data Structures", "Complexity"],
    course: "Computer Science",
  },
] as const;

export default function FeynmanChatPage() {
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get("course") ?? "Computer Science";
  const initialTopic = searchParams.get("topic") ?? "Binary Search";
  const source = searchParams.get("from");
  const sourceItem = searchParams.get("item");

  const getInitialSubjectKey = () => {
    const loweredCourse = initialCourse.toLowerCase();
    const loweredTopic = initialTopic.toLowerCase();
    if (loweredCourse.includes("bio") || loweredTopic.includes("genetic") || loweredTopic.includes("cell")) {
      return "biology";
    }
    if (loweredCourse.includes("chem") || loweredTopic.includes("bond") || loweredTopic.includes("reaction")) {
      return "chemistry";
    }
    if (loweredCourse.includes("computer") || loweredTopic.includes("algorithm") || loweredTopic.includes("binary")) {
      return "algorithms";
    }
    return "all";
  };

  const [activeSubjectKey, setActiveSubjectKey] = useState<"all" | "biology" | "chemistry" | "algorithms">(getInitialSubjectKey());
  const activeSubject = subjects.find((subject) => subject.key === activeSubjectKey) ?? subjects[0];
  const [selectedTopic, setSelectedTopic] = useState(
    activeSubject.topics.find((topic) => initialTopic.toLowerCase().includes(topic.toLowerCase().split(" ")[0])) ?? activeSubject.topics[0]
  );
  const [topicOpen, setTopicOpen] = useState(false);

  const feyniePrompt = useMemo(() => {
    if (activeSubjectKey === "biology") {
      return `Feynie: Teach me ${selectedTopic} in simple biology terms.`;
    }
    if (activeSubjectKey === "chemistry") {
      return `Feynie: Teach me ${selectedTopic} like I have never seen chemistry before.`;
    }
    if (activeSubjectKey === "algorithms") {
      return `Feynie: Teach me ${selectedTopic} like I am new to computer science.`;
    }
    return `Feynie: Teach me ${selectedTopic} in plain language.`;
  }, [activeSubjectKey, selectedTopic]);

  const linkedCourse = activeSubject.course === "General" ? initialCourse : activeSubject.course;
  const selectedTopicQuery = selectedTopic;
  const entryParams = new URLSearchParams({ course: linkedCourse, topic: selectedTopicQuery }).toString();

  const handleSubjectChange = (subjectKey: "all" | "biology" | "chemistry" | "algorithms") => {
    setActiveSubjectKey(subjectKey);
    const nextSubject = subjects.find((subject) => subject.key === subjectKey) ?? subjects[0];
    setSelectedTopic(nextSubject.topics[0]);
    setTopicOpen(false);
  };

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="mx-auto flex min-h-[1024px] w-full max-w-[1440px] flex-col gap-6 px-16 py-9">
        <header className="flex w-full items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <h1 className="font-display text-4xl font-bold text-[#1A1A1A]">Feynman Chat</h1>
            <p className="text-[15px] font-medium text-[#6B7280]">
              Teach Feynie in simple language, then refine your explanation.
            </p>
          </div>
        </header>

        <section className="flex items-center gap-3">
          {subjects.map((subject) => (
            <button
              className={
                activeSubject.key === subject.key
                  ? "rounded-[20px] bg-[#FF6B6B] px-4 py-2 text-[13px] font-bold text-white"
                  : "text-[13px] font-semibold text-[#6B7280]"
              }
              key={subject.key}
              onClick={() => handleSubjectChange(subject.key)}
              type="button"
            >
              {subject.key === "all" ? subject.customText : subject.customText}
            </button>
          ))}
        </section>

        <section className="flex h-[520px] w-full flex-col gap-3 rounded-[20px] bg-[#F6F7F8] p-5">
          <div className="relative w-[340px]">
            <button
              className="flex h-11 w-full items-center justify-between rounded-[20px] border border-[#E8E5DE] bg-white px-4 text-left"
              onClick={() => setTopicOpen((open) => !open)}
              type="button"
            >
              <span className="text-[13px] font-semibold text-[#1A1A1A]">{`Topic: ${selectedTopic}`}</span>
              <svg className="h-4 w-4 text-[#6B7280]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {topicOpen ? (
              <div className="absolute z-20 mt-2 w-full rounded-2xl border border-[#E8E5DE] bg-white p-1 shadow-lg">
                {activeSubject.topics.map((topicOption) => (
                  <button
                    className="w-full rounded-xl px-3 py-2 text-left text-[13px] font-semibold text-[#1A1A1A] hover:bg-[#F6F7F8]"
                    key={topicOption}
                    onClick={() => {
                      setSelectedTopic(topicOption);
                      setTopicOpen(false);
                    }}
                    type="button"
                  >
                    {topicOption}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {source && sourceItem ? (
            <div className="rounded-xl border border-[#E8E5DE] bg-white px-4 py-3 text-sm font-medium text-[#6B7280]">
              {`Teaching prompt from ${source}: “${sourceItem}”`}
            </div>
          ) : null}

          <p className="text-[15px] font-medium text-[#6B7280]">{feyniePrompt}</p>
          <p className="text-[15px] font-semibold text-[#1A1A1A]">
            You: Let me explain {selectedTopic} in simple steps, with one concrete example and no jargon.
          </p>
          <p className="text-[15px] font-medium text-[#6B7280]">
            Feynie: Nice. Now teach it once more in one sentence and check if a beginner could repeat it.
          </p>

          <div className="rounded-[14px] bg-white p-3.5">
            <p className="text-xs font-bold text-[#6366F1]">Feynman cue</p>
            <p className="text-[13px] font-medium text-[#6B7280]">
              Keep your explanation under 2 lines, avoid jargon, then add one tiny worked example.
            </p>
          </div>
        </section>

        <section className="flex h-[92px] items-center gap-3 rounded-2xl bg-[#F6F7F8] px-[18px] py-4">
          <p className="text-sm font-bold text-[#1A1A1A]">Teach Feynie from:</p>
          <Link
            className="rounded-[20px] bg-white px-3.5 py-2 text-[13px] font-bold text-[#6366F1]"
            href={`/quiz-cards?${entryParams}`}
          >
            From Quiz Cards
          </Link>
          <Link
            className="rounded-[20px] bg-white px-3.5 py-2 text-[13px] font-bold text-[#6366F1]"
            href={`/quiz-cards/mode?${entryParams}`}
          >
            From Quizzes
          </Link>
        </section>

        <section className="flex h-[76px] items-center gap-3 rounded-[22px] border border-[#E8E5DE] bg-white px-4">
          <p className="flex-1 text-sm font-medium text-[#9CA3AF]">Explain this concept to Feynie...</p>
          <button className="h-11 w-[120px] rounded-[18px] bg-[#6366F1] text-sm font-bold text-white" type="button">
            Send
          </button>
        </section>
      </div>
    </main>
  );
}
