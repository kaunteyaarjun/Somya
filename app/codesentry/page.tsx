import CodeSentryLandingPage from "@/components/codesentry/CodeSentryLandingPage";

export const metadata = {
  title: "CodeSentry DevSecOps & AI Code Inspection — Somya Prasad Sethy",
  description: "Zero-dependency DevSecOps & AI code inspection engine. Deterministic AST taint analysis, continuous AutoGrad scoring, and pre-deployment infrastructure gates.",
  openGraph: {
    title: "CodeSentry DevSecOps & AI Inspection Engine",
    description: "Zero-dependency SAST inspection engine engineered by Somya Prasad Sethy (kaunteyaarjun/code_inspection_tool).",
    images: [{ url: "/project-codesentry.png" }],
  },
};

export default function CodeSentryPage() {
  return <CodeSentryLandingPage />;
}
