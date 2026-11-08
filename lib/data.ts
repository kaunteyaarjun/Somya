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
        description: "Disaggregated memory system for LLM agent swarms. Researched & architected via AI-assisted systems engineering.",
        longDescription: "KV-Cache Fabric is a disaggregated memory architecture engineered for high-concurrency LLM agent swarms. Conceptualized through deep systems research and realized via AI-assisted engineering, it implements VRAM-to-DRAM tiering, concurrent radix-tree prefix caching, and race-free two-phase eviction to eliminate GPU memory bottlenecks across multi-agent workflows.",
        image: "/project-kv-cache.png",
        video: "/kv_cache_fabric_explainer.mp4",
        tags: ["Python", "Linux Systems", "Networking", "AI Architecture", "Agent Swarms", "Memory Tiering"],
        status: "Completed",
        url: "https://github.com/kaunteyaarjun/kv-cache-fabric",
        year: "2025",
        role: "Creative Developer & Systems Architect (AI-Assisted)",
        techStack: ["Python", "Linux", "Networking", "gRPC Protobuf", "Radix Prefix Caching", "AI-Assisted Systems Code"],
        challenges: [
            "Researching VRAM-to-DRAM tiering to dynamically offload and page KV-states without blocking GPU execution pipelines.",
            "Formulating concurrent radix-tree prefix cache invariants supporting lock-free lookups and atomic prefix promotion.",
            "Orchestrating AI code-generation agents to translate mathematical cache formulas into high-performance systems logic."
        ],
        metrics: [
            { label: "TTFT Reduction", value: "53% lower on partial hits" },
            { label: "Prefix Cache Reuse", value: "99.3% in multi-agent benchmarks" },
            { label: "Stress Test Stability", value: "0 deadlocks / OOMs (16 agents)" }
        ],
        content: `
## Architecture & Overview

**KV-Cache Fabric** is an advanced memory virtualization architecture engineered for multi-agent LLM workloads. As agent swarms scale, redundant system prompts and multi-turn conversation contexts saturate GPU High-Bandwidth Memory (HBM/VRAM), resulting in premature out-of-memory errors and repetitive recomputation.

Conceptualized through rigorous prior systems research and constructed via iterative AI-assisted engineering workflows, KV-Cache Fabric decouples the key-value cache layer into a coordinated, multi-tiered memory fabric.

### Core Systems Engineering Concepts

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
        longDescription: "A self-hosted DevSecOps and AI code inspection engine designed as a privacy-respecting alternative to SaaS code reviewers. Built through AI-assisted development and static analysis research, it analyzes codebases through deterministic AST taint analysis, contextual AI verification, continuous AutoGrad scoring, and pre-deployment infrastructure gating.",
        image: "/project-codesentry.png",
        tags: ["Python", "Linux", "DevSecOps", "AST Analysis", "AI Agents", "Self-Hosted"],
        status: "Active",
        url: "https://github.com/kaunteyaarjun/code_inspection_tool",
        year: "2024 – 2025",
        role: "Lead Creative Developer & AI Orchestrator",
        techStack: ["Python AST", "Linux Systems", "OpenRouter AI", "Tree-Sitter", "DevSecOps Rules", "AI-Assisted Engine"],
        challenges: [
            "Researching and modeling deterministic AST taint patterns for security vulnerabilities without false-positive noise.",
            "Formulating the AutoGrad risk grading algorithm and local offline memory cache resolving recurring patterns with 0ms latency.",
            "Guiding AI coding agents to implement pre-deployment security gates across container configs and LLM prompt/weight deserialization."
        ],
        metrics: [
            { label: "Architecture", value: "Zero-Dependency • Pure Self-Hosted" },
            { label: "Verification", value: "97 Tests Across 30 Suites" },
            { label: "Multi-Lang SAST", value: "AST Taint & Graph Analysis" }
        ],
        content: `
## Vision & Architecture

Commercial AI code review tools send proprietary source code to external SaaS vendors, creating data leakage liabilities and subscription costs. **CodeSentry** is a zero-dependency DevSecOps code inspection platform designed as a privacy-respecting, 100% self-hosted alternative.

Spearheading the project as Lead Creative Developer and AI Orchestrator, I conducted the foundational security and static analysis research, designing the end-to-end AST analysis pipeline, offline self-learning engine, and pre-deployment infrastructure gates through AI-assisted implementation.

### Core Architectural Subsystems

1. **AST Taint Engine**:
   - Parses code into Abstract Syntax Trees.
   - Traces dataflow from untrusted external inputs to dangerous execution sinks with zero false-positive noise.
   - Detects memory leak patterns and unbound execution loops.

2. **AutoGrad: Continuous Risk Grading & Offline Memory**:
   - Computes weighted vulnerability scores resulting in unified letter grades (\`A+\` through \`F\`).
   - Remembers applied fixes locally: when recurring code patterns appear, AutoGrad resolves them offline with **0ms latency** and **zero API quota consumption**.

3. **DeployGuard & ModelShield**:
   - Evaluates deployment readiness and enforces strict CI/CD gate verdicts (\`PASSED\`, \`WARNING\`, \`BLOCKED\`).
   - Intercepts prompt injection attacks and protects against unsafe model weight deserialization.
`
    },
    {
        title: "Agentic RAG & MCP Pipeline",
        slug: "agentic-rag-mcp",
        description: "Autonomous multi-agent research and retrieval engine with Model Context Protocol (MCP) tool integration.",
        longDescription: "An advanced agentic architecture built on Python, utilizing the Model Context Protocol (MCP) for dynamic tool discovery and semantic retrieval. Features hybrid dense-sparse vector search, multi-step reflection loops, and autonomous tool calling for complex engineering queries.",
        image: "/project-loan-disbursement.png",
        tags: ["Python", "MCP", "RAG", "Agent Swarms", "Linux", "Vector Search"],
        status: "Active",
        url: "https://github.com/kaunteyaarjun",
        year: "2024 – 2025",
        role: "Creative Developer & Agent Architect",
        techStack: ["Python", "Model Context Protocol (MCP)", "RAG", "Vector DBs", "Linux", "FastAPI"],
        challenges: [
            "Designing robust MCP client/server dispatch pipelines for dynamic tool routing across heterogeneous agent swarms.",
            "Implementing hybrid semantic vector retrieval with cross-encoder reranking to minimize context hallucination.",
            "Engineering stateful agent reflection loops with memory checkpointing to handle multi-step reasoning."
        ],
        metrics: [
            { label: "Protocol", value: "Model Context Protocol (MCP)" },
            { label: "Retrieval", value: "Hybrid Dense + BM25 RAG" },
            { label: "Orchestration", value: "Autonomous Multi-Agent Loops" }
        ],
        content: `
## System Architecture & Agent Workflows

The **Agentic RAG & MCP Pipeline** coordinates autonomous multi-agent reasoning over deep document vaults and operational tooling. By implementing the Model Context Protocol (MCP), agents dynamically query external environments, inspect live system states, and retrieve relevant technical documentation with verified provenance.

### Core Subsystems

1. **Model Context Protocol (MCP) Server & Client**: Standardized tool schemas and execution sandboxes enabling agents to inspect Linux filesystems, run diagnostic scripts, and query databases.
2. **Hybrid RAG Indexing**: Combines dense semantic embeddings with sparse BM25 indexing and reciprocal rank fusion (RRF) for high-precision context injection.
3. **Multi-Agent Reflection**: Autonomous coordinator agent delegates sub-tasks to specialized research agents, compiling verified answers with citation tracking.
`
    },
    {
        title: "AI-Based Loan Disbursement System",
        slug: "loan-disbursement-system",
        description: "AI-driven loan eligibility scoring and automated disbursement workflow engine.",
        longDescription: "An automated fintech credit evaluation and disbursement engine that automates the end-to-end loan lifecycle. Features machine learning scoring models in Python for real-time risk assessment paired with an idempotent transaction disbursement state machine.",
        image: "/project-loan-disbursement.png",
        tags: ["Python", "Machine Learning", "FastAPI", "Networking", "Linux"],
        status: "Completed",
        url: "https://github.com/kaunteyaarjun/loan-disbursement-system",
        year: "2024",
        role: "Creative Developer & Systems Builder (AI-Assisted)",
        techStack: ["Python", "FastAPI", "Machine Learning", "Linux", "Redis", "PostgreSQL", "Networking"],
        challenges: [
            "Developing low-latency AI-driven loan eligibility scoring pipelines with full feature-importance explainability for financial compliance.",
            "Engineering an idempotent disbursement state machine with strict transactional guarantees to prevent double-disbursement.",
            "Translating algorithmic financial requirements into clean, tested backend pipelines with AI-assisted code generation."
        ],
        metrics: [
            { label: "Processing", value: "Real-time Scoring & Decisioning" },
            { label: "Architecture", value: "Python & FastAPI Microservices" },
            { label: "Reliability", value: "Strict Idempotency State Machine" }
        ],
        content: `
## System Overview & Workflow Automation

Manual loan underwriting suffers from slow turnaround times, human inconsistency, and fragmented approval chains. The **AI-Based Loan Disbursement System** automates the entire journey from application intake to automated fund disbursement.

### System Breakdown

1. **AI Eligibility Scoring**: Evaluates creditworthiness, debt-to-income ratios, and transaction histories using trained Python ML models, surfacing transparent feature contributions for underwriting audit compliance.
2. **Automated Disbursement Pipeline**: Once eligibility thresholds are satisfied, an event-driven workflow engine triggers automated bank transfer authorizations via secured API gateways.
3. **Idempotency & Fraud Mitigation**: All disbursement calls use cryptographically secured idempotency keys and stateful transaction locks, guaranteeing zero double-disbursements even during network timeouts or retry loops.
`
    },
    {
        title: "Pole Studios",
        slug: "pole-studios",
        description: "Independent creative development and digital systems studio. Bootstrapped on zero external capital.",
        longDescription: "Pole Studios is a creative development and digital studio founded to build high-performance digital products, technical identities, and automated software workflows for startup founders and growing businesses.",
        image: "/project-pole.png",
        tags: ["Creative Development", "Digital Studio", "AI Workflows", "Product Strategy"],
        status: "Live",
        url: "https://polestudios.in",
        year: "2025",
        role: "Founder & Creative Developer",
        techStack: ["Creative Direction", "Python Automation", "AI-Assisted Scaffolding", "Linux Hosting"],
        challenges: [
            "Bootstrapping an independent studio on zero external capital while maintaining production delivery standards.",
            "Formulating streamlined requirements-gathering workflows to cut turnaround time by 15%.",
            "Integrating AI-assisted engineering and automated pipelines into every client deliverable."
        ],
        metrics: [
            { label: "Turnaround", value: "15% faster project delivery" },
            { label: "Capital", value: "Bootstrapped / Zero External Funding" },
            { label: "Focus", value: "Creative Development & AI Workflows" }
        ],
        content: `
## Studio Background

Founded in October 2025, **Pole Studios** is an independent creative development studio operating on zero external capital. 

We partner with founders and business owners to transform high-level technical and commercial requirements into fast, robust, and beautifully designed digital products powered by modern AI-assisted workflows.
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
        role: "Creative Developer & AI Systems Researcher",
        company: "Independent / Pole Studios",
        location: "Remote",
        period: "Jul 2023 – Present",
        description: "Research and develop AI-assisted software architectures, explore Model Context Protocol (MCP) tools, build Python-based RAG pipelines, and guide technical product vision for clients. Founder of Pole Studios (Oct 2025).",
        highlight: true,
        responsibilities: [
            "Conduct systems research on LLM memory virtualization, KV-cache prefix optimization, and autonomous multi-agent coordination.",
            "Architect and prototype Python-based pipelines, Linux networking services, and Model Context Protocol (MCP) tool integrations.",
            "Leverage state-of-the-art AI-assisted workflows to conceptualize, scaffold, verify, and deliver production systems.",
            "Founded Pole Studios (Oct 2025) as a creative development studio operating on zero external capital."
        ],
        achievements: [
            "Researched and conceptualized KV-Cache Fabric, validating 53% lower TTFT and 99.3% prefix cache reuse in multi-agent benchmarks.",
            "Built end-to-end Python prototypes for DevSecOps AST analysis and AI-driven automated loan decisioning engines.",
            "Bootstrapped Pole Studios on zero external capital, delivering creative digital products with 15% faster turnaround using AI-assisted pipelines."
        ],
        tools: ["Python", "Linux", "Networking", "Systems", "AI", "RAG", "MCP", "GenAI", "Agentic Systems", "Bash"],
        content: `
### Overview & Creative Philosophy

Operating independently and through **Pole Studios**, I work at the intersection of systems architecture, Linux networking, and advanced agentic AI.

- **Systems & Agentic Research**: Researching the boundaries of multi-agent LLM inference, disaggregated memory tiering, and prompt cache reuse.
- **Python & MCP Integration**: Building intelligent agent environments that leverage the Model Context Protocol (MCP) to interact safely with host systems and APIs.
- **AI-Assisted Engineering Velocity**: Applying deep research and prompt orchestration to transform complex system designs into verified, working software architectures.
- **Studio Founder**: Founded Pole Studios in October 2025 on zero external capital, maintaining high creative standards and sustainable growth.
`
    }
];
