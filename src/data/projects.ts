export type ProjectType = {
  title: string
  description: string
  techStack: string[]
  demoLink: string
  sourceLink: string
  status?: 'in-progress' | 'completed'
}

export const projects: ProjectType[] = [
  {
    title: "Aiterview",
    description:
      "AI-powered interview simulation platform for Software Engineer candidates, featuring behavioral interviews, speech recognition, AI-generated questions, and automated interview evaluation.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Gemini AI",
      "Web Speech API",
      "Tailwind CSS",
      "Zustand",
    ],
    demoLink: "https://aiterview.vercel.app",
    sourceLink: "https://github.com/far-id/aiterview",
    status: "completed",
  },
  {
    title: "Pomodoro",
    description:
      "Full-stack Pomodoro productivity application built with TanStack Start, featuring server-side functionality, authentication, database integration, and automated testing.",
    techStack: [
      "TanStack Start",
      "TanStack Router",
      "TypeScript",
      "Drizzle ORM",
      "Better Auth",
      "Tailwind CSS",
      "Vitest",
    ],
    demoLink: "",
    sourceLink: "https://github.com/far-id/pomodoro",
    status: "in-progress",
  },
  {
    title: "Tampermonkey Scripts",
    description:
      "A collection of custom browser userscripts that automate and enhance web experiences, including Japanese furigana injection and additional website utilities.",
    techStack: [
      "JavaScript",
      "Tampermonkey",
      "Browser APIs",
    ],
    demoLink: "",
    sourceLink: "https://github.com/far-id/tampermonkey-script",
    status: "in-progress",
  },
  {
    title: "Daily Commit",
    description:
      "Automated GitHub activity monitoring system that uses n8n, Supabase, GitHub API, and email services to deliver personalized daily commit updates.",
    techStack: [
      "TypeScript",
      "n8n",
      "Supabase",
      "GitHub API",
      "LLM",
      "Mailry",
    ],
    demoLink: "",
    sourceLink: "https://github.com/far-id/send-mail-mailry",
    status: "completed",
  },
  {
    title: "File Manager",
    description:
      "Google Drive-like file management application with file upload, storage management, authentication, database integration, and automated testing.",
    techStack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Docker",
      "PHPUnit",
    ],
    demoLink: "",
    sourceLink: "https://github.com/far-id/file-manager",
    status: "completed",
  },
  {
    title: "Japanese Converter",
    description:
      "Japanese text conversion API that converts Japanese sentences into Hiragana, Katakana, or Romaji with support for furigana and okurigana.",
    techStack: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Kuroshiro",
      "Kuromoji",
    ],
    demoLink: "",
    sourceLink: "https://github.com/far-id/japanese-converter",
    status: "completed",
  },
  {
    title: "RateHub",
    description:
      "Multi-currency converter with dynamic currency management, exchange-rate caching, and client-side calculations to reduce unnecessary API requests.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Exchange Rate API",
      "LocalStorage",
    ],
    demoLink: "",
    sourceLink: "https://github.com/far-id/RateHub",
    status: "completed",
  },
  {
    title: "Chats",
    description:
      "A real-time chat application built during my earlier learning journey. This is an older project that demonstrates my early experience with web application and real-time communication concepts.",
    techStack: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "Socket.IO",
    ],
    demoLink: "",
    sourceLink: "https://github.com/far-id/chats_try",
    status: "completed",
  },
  {
    title: "Screencast FE",
    description:
      "A frontend web application built during my earlier learning journey. This is an older project that demonstrates my early experience with React and modern frontend development.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
    demoLink: "",
    sourceLink: "https://github.com/far-id/FE_Screencast_try",
    status: "completed",
  },
  {
    title: "Screencast BE",
    description:
      "A backend web application built during my earlier learning journey. This is an older project that demonstrates my early experience with Laravel and backend application development.",
    techStack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Midtrans",
    ],
    demoLink: "",
    sourceLink: "https://github.com/far-id/BE_Screencast_try",
    status: "completed",
  },
  {
    title: "Forum",
    description:
      "A forum application built during my earlier learning journey. This is an older project that demonstrates my early experience developing backend applications and implementing common forum functionality.",
    techStack: [
      "Laravel",
      "PHP",
      "MySQL",
    ],
    demoLink: "",
    sourceLink: "https://github.com/far-id/forum_try",
    status: "completed",
  },
]
