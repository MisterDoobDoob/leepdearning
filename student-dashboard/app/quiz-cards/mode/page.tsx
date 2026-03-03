"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

type QuizCard = {
  prompt: string;
  answers: string[];
  correctAnswer: number;
  deck: string;
};

const questionBank: Record<string, Record<string, QuizCard[]>> = {
  "Computer Science": {
    "Week 3 - Algorithms": [
      {
        prompt: "What invariant must hold during binary search?",
        answers: [
          "Target is always at midpoint",
          "Target is within current [left, right]",
          "Array can be unsorted",
          "Left pointer increases by two",
        ],
        correctAnswer: 1,
        deck: "Algorithms",
      },
      {
        prompt: "Which data structure powers BFS traversal?",
        answers: ["Stack", "Hash map", "Queue", "Heap"],
        correctAnswer: 2,
        deck: "Algorithms",
      },
    ],
    "Week 4 - Data Structures": [
      {
        prompt: "Average lookup complexity for a hash table is:",
        answers: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        correctAnswer: 2,
        deck: "Data Structures",
      },
      {
        prompt: "A min-heap guarantees which node at root?",
        answers: ["Largest", "Smallest", "Median", "Most recent"],
        correctAnswer: 1,
        deck: "Data Structures",
      },
    ],
    "Week 5 - Complexity": [
      {
        prompt: "Big-O describes what in algorithm analysis?",
        answers: ["Average memory", "Upper growth bound", "Exact runtime", "Compiler speed"],
        correctAnswer: 1,
        deck: "Complexity",
      },
      {
        prompt: "Merge sort time complexity is:",
        answers: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
        correctAnswer: 2,
        deck: "Complexity",
      },
    ],
  },
  "Chemistry 101": {
    "Week 2 - Atomic Structure": [
      {
        prompt: "Atomic number is the number of:",
        answers: ["Neutrons", "Electrons + neutrons", "Protons", "Orbitals"],
        correctAnswer: 2,
        deck: "Atomic Structure",
      },
      {
        prompt: "Isotopes differ mainly by:",
        answers: ["Protons", "Neutrons", "Electrons", "Valence shell"],
        correctAnswer: 1,
        deck: "Atomic Structure",
      },
    ],
    "Week 3 - Bonding": [
      {
        prompt: "Ionic bonding primarily involves:",
        answers: ["Sharing electrons", "Transferring electrons", "Hydrogen bonding", "Van der Waals forces"],
        correctAnswer: 1,
        deck: "Bonding",
      },
      {
        prompt: "VSEPR predicts molecular:",
        answers: ["Mass", "Color", "Shape", "Boiling point"],
        correctAnswer: 2,
        deck: "Bonding",
      },
    ],
    "Week 4 - Reactions": [
      {
        prompt: "A catalyst in a reaction:",
        answers: ["Is consumed permanently", "Lowers activation energy", "Changes products", "Raises activation energy"],
        correctAnswer: 1,
        deck: "Reactions",
      },
      {
        prompt: "Oxidation means:",
        answers: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"],
        correctAnswer: 1,
        deck: "Reactions",
      },
    ],
  },
  Mathematics: {
    "Week 1 - Limits": [
      {
        prompt: "A limit as x→a means:",
        answers: ["Value at x=a only", "Behavior near x=a", "Derivative at a", "Integral to a"],
        correctAnswer: 1,
        deck: "Limits",
      },
      {
        prompt: "If left and right limits differ, the limit:",
        answers: ["Is zero", "Exists", "Does not exist", "Is infinite always"],
        correctAnswer: 2,
        deck: "Limits",
      },
    ],
    "Week 2 - Derivatives": [
      {
        prompt: "Derivative represents:",
        answers: ["Area under curve", "Instantaneous rate of change", "Total sum", "Midpoint value"],
        correctAnswer: 1,
        deck: "Derivatives",
      },
      {
        prompt: "d/dx (x²) equals:",
        answers: ["x", "2x", "x²", "2"],
        correctAnswer: 1,
        deck: "Derivatives",
      },
    ],
    "Week 3 - Integrals": [
      {
        prompt: "An indefinite integral gives:",
        answers: ["A number", "A function family + C", "A limit", "A slope"],
        correctAnswer: 1,
        deck: "Integrals",
      },
      {
        prompt: "A definite integral geometrically represents:",
        answers: ["Slope", "Intercept", "Signed area", "Curvature"],
        correctAnswer: 2,
        deck: "Integrals",
      },
    ],
  },
  "Biology 201": {
    "Week 2 - Cell Cycle": [
      {
        prompt: "DNA replication occurs in which phase?",
        answers: ["G1", "S", "G2", "M"],
        correctAnswer: 1,
        deck: "Cell Cycle",
      },
      {
        prompt: "Mitosis results in:",
        answers: ["4 cells", "2 identical daughter cells", "1 haploid cell", "No division"],
        correctAnswer: 1,
        deck: "Cell Cycle",
      },
    ],
    "Week 3 - Genetics": [
      {
        prompt: "Genotype refers to:",
        answers: ["Physical trait", "Genetic makeup", "Environment", "Protein structure"],
        correctAnswer: 1,
        deck: "Genetics",
      },
      {
        prompt: "A heterozygous genotype has:",
        answers: ["Two same alleles", "Two different alleles", "No alleles", "Only dominant alleles"],
        correctAnswer: 1,
        deck: "Genetics",
      },
    ],
    "Week 4 - Evolution": [
      {
        prompt: "Natural selection acts on:",
        answers: ["Genotypes only", "Phenotypes", "Mutations directly", "Populations instantly"],
        correctAnswer: 1,
        deck: "Evolution",
      },
      {
        prompt: "Genetic drift is strongest in:",
        answers: ["Large populations", "Small populations", "Stable climates", "Asexual species only"],
        correctAnswer: 1,
        deck: "Evolution",
      },
    ],
  },
};

export default function QuizCardsModePage() {
  const searchParams = useSearchParams();
  const courseParam = searchParams.get("course") ?? "Computer Science";
  const topicParam = searchParams.get("topic") ?? "Week 3 - Algorithms";
  const { resolvedCourse, resolvedTopic, cards } = useMemo(() => {
    const safeCourse = questionBank[courseParam] ? courseParam : "Computer Science";
    const topicsForCourse = questionBank[safeCourse];
    const safeTopic = topicsForCourse[topicParam] ? topicParam : Object.keys(topicsForCourse)[0];
    return {
      resolvedCourse: safeCourse,
      resolvedTopic: safeTopic,
      cards: topicsForCourse[safeTopic],
    };
  }, [courseParam, topicParam]);

  const backHref = `/quiz-cards?${new URLSearchParams({ course: resolvedCourse, topic: resolvedTopic }).toString()}`;
  const sessionKey = `${resolvedCourse}-${resolvedTopic}`;

  return (
    <QuizSession
      backHref={backHref}
      cards={cards}
      key={sessionKey}
      resolvedCourse={resolvedCourse}
      resolvedTopic={resolvedTopic}
    />
  );
}

function QuizSession({
  cards,
  resolvedCourse,
  resolvedTopic,
  backHref,
}: {
  cards: QuizCard[];
  resolvedCourse: string;
  resolvedTopic: string;
  backHref: string;
}) {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const current = cards[index];
  const progress = `${index + 1}/${cards.length}`;
  const hasAnswered = selectedAnswer !== null;
  const isCorrect = hasAnswered && selectedAnswer === current.correctAnswer;
  const askCoachHref = `/feynman-chat?${new URLSearchParams({
    course: resolvedCourse,
    topic: resolvedTopic,
    from: "quizzes",
    item: current.prompt,
  }).toString()}`;

  const nextCard = () => {
    setSelectedAnswer(null);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="mx-auto flex min-h-[1024px] w-full max-w-[1100px] flex-col gap-6 px-8 py-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              className="flex h-10 items-center rounded-full bg-[#F6F7F8] px-4 text-sm font-semibold text-[#1A1A1A]"
              href={backHref}
            >
              ← Back
            </Link>
            <h1 className="font-display text-[32px] font-bold text-[#1A1A1A]">Quiz Card Mode</h1>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E5DE] bg-white text-[#6B7280]"
              title="Listening mode coming soon"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 1 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 11a7 7 0 0 1-14 0" />
                <path d="M12 18v4" />
                <path d="M8 22h8" />
              </svg>
            </div>
            <span className="rounded-full bg-[#FFFBEB] px-4 py-2 text-sm font-bold text-[#B45309]">Card {progress}</span>
          </div>
        </header>

        <section className="rounded-[24px] bg-[#F6F7F8] p-6">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-[#6B7280]">Deck: {current.deck}</p>
            <p className="text-sm font-semibold text-[#6366F1]">{`${resolvedCourse} · ${resolvedTopic}`}</p>
          </div>

          <div
            className={`flex h-[360px] w-full items-center justify-center rounded-[20px] border-2 bg-white p-10 text-center text-[28px] font-bold leading-tight text-[#1A1A1A] ${
              !hasAnswered ? "border-[#E8E5DE]" : isCorrect ? "border-[#22C55E]" : "border-[#EF4444]"
            }`}
          >
            {current.prompt}
          </div>
        </section>

        <section className="grid grid-cols-4 gap-3">
          {current.answers.map((answer, answerIndex) => {
            const isAnswerCorrect = answerIndex === current.correctAnswer;
            const isSelectedAnswer = answerIndex === selectedAnswer;
            const answerClass = !hasAnswered
              ? "border-[#E8E5DE] bg-white text-[#1A1A1A]"
              : isAnswerCorrect
                ? "border-[#22C55E] bg-[#DCFCE7] text-[#166534]"
                : isSelectedAnswer
                  ? "border-[#EF4444] bg-[#FEE2E2] text-[#B91C1C]"
                  : "border-[#E8E5DE] bg-white text-[#9CA3AF]";

            return (
              <button
                className={`min-h-14 rounded-[16px] border px-3 py-2 text-sm font-semibold ${answerClass}`}
                disabled={hasAnswered}
                key={answer}
                onClick={() => setSelectedAnswer(answerIndex)}
                type="button"
              >
                {answer}
              </button>
            );
          })}
        </section>

        {hasAnswered ? (
          <div className="flex items-center justify-end gap-3">
            <Link className="rounded-[16px] border border-[#6366F1] px-5 py-3 text-sm font-bold text-[#6366F1]" href={askCoachHref}>
              Ask Feynie about this
            </Link>
            <button className="rounded-[16px] bg-[#6366F1] px-5 py-3 text-sm font-bold text-white" onClick={nextCard} type="button">
              Next Card
            </button>
          </div>
        ) : null}
      </div>
    </main>
  );
}
