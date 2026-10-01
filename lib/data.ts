export interface Project {
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    image: string;
    video?: string;
    tags: string[];
    status: string;
    url: string;
    year: string;
    role: string;
    techStack: string[];
    challenges: string[];
    metrics?: { label: string; value: string }[];
    content?: string;
}

export const PROJECTS: Project[] = [
    {
        title: "KV-Cache Fabric",
        slug: "kv-cache-fabric",
        description: "Disaggregated memory system for LLM agent swarms. Go, Rust, gRPC.",
        longDescription: "KV-Cache Fabric is a disaggregated memory architecture engineered for high-concurrency LLM agent swarms. Implements VRAM-to-DRAM tiering, concurrent radix-tree prefix caching, and race-free two-phase eviction to eliminate GPU memory bottlenecks and slash time-to-first-token across multi-agent workflows.",
        image: "/project-kv-cache.png",
        video: "/kv_cache_fabric_explainer.mp4",
        tags: ["Go", "Rust", "gRPC", "LLM Inference", "Radix Trees", "Distributed Memory"],
        status: "Completed",
        url: "https://github.com/kaunteyaarjun/kv-cache-fabric",
        year: "2025",
        role: "Systems Engineer & Architect",
        techStack: ["Go", "Rust", "gRPC", "Protobuf", "Concurrent Radix Trees", "Linux epoll"],
        challenges: [
            "Architecting VRAM-to-DRAM tiering to dynamically offload and page KV-states without blocking GPU execution pipelines.",
            "Designing a concurrent radix-tree prefix cache supporting lock-free concurrent lookups and atomic prefix promotion.",
            "Implementing a race-free two-phase eviction algorithm to maintain absolute memory safety under aggressive concurrent write storms."
        ],
        metrics: [
            { label: "TTFT Reduction", value: "53% lower on partial hits" },
            { label: "Prefix Cache Reuse", value: "99.3% in multi-agent benchmarks" },
            { label: "Stress Test Stability", value: "0 deadlocks / OOMs (16 agents)" }
        ],
        content: `
## Architecture & Overview

**KV-Cache Fabric** is a high-performance disaggregated memory system engineered specifically for multi-agent LLM workloads. As agent swarms scale, redundant system prompts and multi-turn conversation contexts saturate GPU High-Bandwidth Memory (HBM/VRAM), resulting in premature out-of-memory errors and repetitive recomputation.

KV-Cache Fabric solves this bottleneck by decoupling the key-value cache layer from individual GPU nodes into a coordinated, multi-tiered memory fabric.

### Core Systems Engineering

1. **VRAM-to-DRAM Tiering**: Dynamically streams inactive KV tokens from constrained GPU VRAM to high-density host DRAM over high-throughput gRPC communication channels, freeing GPU memory for active inference batches.
2. **Concurrent Radix-Tree Prefix Caching**: Organizes token sequences into a concurrent prefix tree, enabling instant prefix lookups with near-zero lock contention even under high concurrent query loads.
3. **Race-Free Two-Phase Eviction**: Implements an atomic two-phase commit eviction strategy that safely retires cold memory segments without risking read-after-free anomalies or race conditions.

### Verified Benchmark Results

- **53% lower time-to-first-token** on partial cache hits by retrieving shared prefix states directly from tiered memory.
- **99.3% prefix-cache reuse** across standardized multi-agent benchmarks, dramatically reducing recomputation waste.
- **Zero deadlocks or OOM errors** recorded during intensive 16-concurrent-agent continuous eviction stress testing.
`
    },
    {
        title: "CodeSentry",
        slug: "codesentry",
        description: "Zero-dependency DevSecOps & AI code inspection engine with AST taint analysis and offline self-learning.",
        longDescription: "A pure Node.js, zero-dependency DevSecOps and AI code inspection engine designed as a privacy-respecting, 100% self-hosted alternative to CodeRabbit. Analyzes JavaScript, TypeScript, and Python codebases through deterministic AST taint analysis, contextual OpenRouter AI verification, continuous AutoGrad scoring, and pre-deployment infrastructure gating.",
        image: "/project-codesentry.png",
        tags: ["DevSecOps", "Static Analysis", "TypeScript", "Python", "AST Taint", "Open Source"],
        status: "Active",
        url: "https://github.com/kaunteyaarjun/code_inspection_tool",
        year: "2024 – 2025",
        role: "Lead Developer (Team of 4)",
        techStack: ["TypeScript", "Python AST", "Node.js (>=18)", "OpenRouter AI", "Tree-Sitter", "GitHub Actions"],
        challenges: [
            "Building deterministic multi-language AST parsers for JavaScript, TypeScript, and Python that accurately flag OWASP Top 10 vulnerabilities without false-positive noise.",
            "Formulating the AutoGrad risk grading algorithm and local offline memory cache (~/.codesentry/autograd-memory.json) resolving recurring patterns with 0ms latency and 0 API calls.",
            "Architecting ModelShield and DeployGuard to enforce pre-deployment security gates across Docker containers, CI/CD workflows, and LLM prompt/weight deserialization vulnerabilities."
        ],
        metrics: [
            { label: "Architecture", value: "Pure Node.js • Zero Docker" },
            { label: "Verification", value: "97 Tests Across 30 Suites" },
            { label: "Multi-Lang SAST", value: "JS, TS & Python AST" }
        ],
        content: `
## Vision & Architecture

Commercial AI code review tools send proprietary source code to external SaaS vendors, creating data leakage liabilities and subscription costs. **CodeSentry** is a zero-dependency, pure Node.js DevSecOps code inspection platform designed as a privacy-respecting, 100% self-hosted alternative with zero external Docker daemons required.

Spearheading a **team of 4 engineers**, I served as Lead Developer and architected the end-to-end AST analysis pipeline, offline self-learning engine, and pre-deployment infrastructure gates.

### Core Architectural Subsystems

1. **Multi-Language AST Taint Engine**:
   - Parses JavaScript, TypeScript, and Python into Abstract Syntax Trees.
   - Traces dataflow from untrusted external sources (HTTP requests, route parameters) to dangerous sinks (raw SQL queries, dynamic \`eval()\`, unquoted \`child_process.exec()\`, and file paths) with zero false-positive noise.
   - Detects memory leak patterns including uncleaned event listener buildup, cyclic references, and unbound timers.

2. **AutoGrad: Continuous Risk Grading & Offline Memory**:
   - Computes weighted vulnerability scores resulting in unified letter grades (\`A+\` through \`F\`).
   - Tracks historical scan trends (\`▲ +4% improvement\`) locally in \`~/.codesentry/autograd-history.json\`.
   - Remembers applied fixes locally in \`~/.codesentry/autograd-memory.json\`: when identical or similar code patterns reappear, AutoGrad resolves them offline with **0ms latency** and **zero API calls or quota consumption**.

3. **DeployGuard: Pre-Deployment Infrastructure Gate**:
   - Evaluates deployment readiness percentage and enforces strict CI/CD gate verdicts (\`PASSED\`, \`WARNING\`, \`BLOCKED\`).
   - Audits Dockerfile configurations (flags root users, unpinned \`:latest\` tags, secrets in \`ENV\`/\`ARG\`).
   - Validates CI/CD security (unpinned GitHub Actions requiring commit SHAs, secret leaks, untrusted \`pull_request_target\`).

4. **ModelShield: AI / LLM / RAG Security Engine**:
   - Intercepts prompt injection attacks against LLM chat interfaces.
   - Protects against unsafe model weight deserialization (\`pickle.loads\`, unconstrained \`torch.load\`).
   - Guards dynamic AI agent tool sandboxes from executing raw untrusted code.

5. **AttackGraph Multi-Step Exploit Tracing**:
   - Synthesizes end-to-end exploit chains (\`[Route: /api/query] ──▶ [Vulnerability: SQL Injection] ──▶ [Sink: db.query]\`).
   - Renders ANSI terminal cards and interactive Markdown/Mermaid attack graphs.

6. **Interactive Post-Scan Fix Engine**:
   - Interactive batch or flaw-specific remediation with color-coded diff cards (\`- red\` / \`+ green\`).
   - Instant auto-verification re-scan upon applying fixes to confirm resolution.
`
    },
    {
        title: "AI-Based Loan Disbursement System",
        slug: "loan-disbursement-system",
        description: "AI-driven loan eligibility scoring and disbursement workflow automation.",
        longDescription: "An automated fintech credit evaluation and disbursement engine that automates the end-to-end loan lifecycle. Features machine learning scoring models for real-time risk assessment paired with event-driven disbursement workflow execution.",
        image: "/project-loan-disbursement.png",
        tags: ["Fintech", "FastAPI", "Python", "Next.js", "Machine Learning", "Workflow Automation"],
        status: "Completed",
        url: "https://github.com/kaunteyaarjun/loan-disbursement-system",
        year: "2024",
        role: "Full-Stack & Backend Engineer",
        techStack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Scikit-Learn", "Redis", "Tailwind CSS"],
        challenges: [
            "Developing low-latency AI-driven loan eligibility scoring pipelines with full feature-importance explainability for financial compliance.",
            "Engineering an idempotent disbursement state machine with strict transactional guarantees to prevent double-disbursement.",
            "Designing an animated, real-time application dashboard showing applicants and underwriters each milestone in the disbursement sequence."
        ],
        metrics: [
            { label: "Processing", value: "Real-time Scoring & Decisioning" },
            { label: "Integrations", value: "Automated Banking & KYC APIs" },
            { label: "Reliability", value: "Strict Idempotency State Machine" }
        ],
        content: `
## System Overview & Workflow Automation

Manual loan underwriting suffers from slow turnaround times, human inconsistency, and fragmented approval chains. The **AI-Based Loan Disbursement System** automates the entire journey from application intake to automated fund disbursement.

### System Breakdown

1. **AI Eligibility Scoring**: Evaluates creditworthiness, debt-to-income ratios, and transaction histories using trained ML classification models, surfacing transparent feature contributions for underwriting audit compliance.
2. **Automated Disbursement Pipeline**: Once eligibility thresholds are satisfied, an event-driven workflow engine triggers automated bank transfer authorizations via secured API gateways.
3. **Idempotency & Fraud Mitigation**: All disbursement calls use cryptographically secured idempotency keys and stateful transaction locks, guaranteeing zero double-disbursements even during network timeouts or retry loops.
`
    },
    {
        title: "Pole Studios",
        slug: "pole-studios",
        description: "Branding and web development studio delivering commercial websites and digital products.",
        longDescription: "Pole Studios is a full-service branding and web development studio founded to build high-performance web products, fast digital platforms, and technical brand identities for startup founders and growing businesses.",
        image: "/project-pole.png",
        tags: ["Next.js", "React", "TypeScript", "Branding", "Web Development"],
        status: "Live",
        url: "https://polestudios.in",
        year: "2025",
        role: "Founder & Lead Developer",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
        challenges: [
            "Building an agency website that delivers fast page loads and smooth animations across devices.",
            "Implementing streamlined requirements gathering to cut delivery times by 15%.",
            "Operating on zero external capital while maintaining production-grade delivery standards."
        ],
        metrics: [
            { label: "Turnaround", value: "15% faster project delivery" },
            { label: "Capital", value: "Bootstrapped / Zero External Funding" },
            { label: "Focus", value: "Production Web Apps & Tooling" }
        ],
        content: `
## Studio Background

Founded in October 2025, **Pole Studios** is a branding and web development studio operating on zero external capital. 

We partner with founders and business owners to transform high-level technical and commercial requirements into fast, robust, and beautifully designed web products.
`
    }
];

export interface Experience {
    id: number;
    slug: string;
    role: string;
    company: string;
    location: string;
    period: string;
    description: string;
    highlight: boolean;
    responsibilities: string[];
    achievements: string[];
    tools: string[];
    content?: string;
}

export const EXPERIENCES: Experience[] = [
    {
        id: 1,
        slug: "independent-pole-studios",
        role: "Full-Stack Developer",
        company: "Independent / Pole Studios",
        location: "Remote",
        period: "Jul 2023 – Present",
        description: "Design and build full-stack web apps (Next.js, React, Node.js) for startup founders and small businesses, turning business requirements into production-grade products. Founder of Pole Studios (Oct 2025).",
        highlight: true,
        responsibilities: [
            "Design and build full-stack web apps (Next.js, React, Node.js) for startup founders and small businesses, turning business requirements into production-grade products.",
            "Founded Pole Studios (Oct 2025) as a branding and web development studio, operating on zero external capital.",
            "Built a streamlined requirements-gathering process that cut project delivery time by 15%.",
            "Apply AI-assisted workflows across the development lifecycle, from scaffolding to code review."
        ],
        achievements: [
            "Bootstrapped Pole Studios on zero external capital, delivering production web applications and developer tooling.",
            "Reduced project delivery timelines by 15% through standardized requirements-gathering protocols.",
            "Leveraged AI-assisted workflows across architecture design, prototyping, and code reviews to accelerate development velocity."
        ],
        tools: ["Next.js", "React", "Node.js", "TypeScript", "Go", "Tailwind CSS", "PostgreSQL", "Docker", "Vercel"],
        content: `
### Overview & Execution

Operating independently and through **Pole Studios**, I lead end-to-end full-stack development for startup founders and growing businesses.

- **Product Engineering**: Turning ambiguous business requirements into robust, production-ready web applications using Next.js App Router, React, Node.js, and TypeScript.
- **Workflow Efficiency**: Designed and deployed a requirements-gathering workflow that reduced project delivery turnaround by 15%.
- **AI-Assisted Development**: Integrate AI-assisted workflows across every development phase—accelerating initial scaffolding, test generation, and comprehensive code review.
- **Studio Founder**: Founded Pole Studios in October 2025 on zero external capital, maintaining high technical standards and sustainable operational growth.
`
    }
];
