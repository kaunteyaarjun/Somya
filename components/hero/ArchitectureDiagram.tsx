"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NodeData {
  id: string;
  label: string;
  sub: string;
  tech: string;
  status: "ONLINE" | "PROCESSING" | "OPTIMAL";
  metrics: { [key: string]: string };
  details: string;
}

interface SystemArchitecture {
  id: string;
  name: string;
  badge: string;
  benchmark: string;
  nodes: NodeData[];
}

const SYSTEMS: SystemArchitecture[] = [
  {
    id: "kv-cache",
    name: "KV-Cache Fabric",
    badge: "DISTRIBUTED CACHE ENGINE",
    benchmark: "53% TTFT DROP • 99.3% REUSE • 0 DEADLOCKS",
    nodes: [
      {
        id: "ingress",
        label: "Agent Ingress",
        sub: "gRPC Stream",
        tech: "HTTP/2 Multiplexing",
        status: "OPTIMAL",
        metrics: { Latency: "0.8ms", Concurrency: "16 Agents", Queue: "0.0%" },
        details: "Concurrent token request broker receiving multi-agent prompt streams with header token hashing.",
      },
      {
        id: "radix",
        label: "Radix Prefix Engine",
        sub: "Tree Indexer",
        tech: "O(k) Prefix Match",
        status: "OPTIMAL",
        metrics: { HitRate: "99.3%", Traverse: "1.4ms", Collisions: "0" },
        details: "Dynamic prefix tree indexer identifying shared conversation prefixes across parallel inference threads.",
      },
      {
        id: "shards",
        label: "Sharded Memory Fabric",
        sub: "Zero-Copy Pool",
        tech: "Lockless Ring Buffer",
        status: "ONLINE",
        metrics: { Reuse: "99.3%", Bandwidth: "128 GB/s", OOMs: "0" },
        details: "Cross-worker shared memory pool allocating KV attention blocks with zero-copy reference counting.",
      },
      {
        id: "model",
        label: "Model Execution Nodes",
        sub: "GPU Workers",
        tech: "vLLM / TensorRT-LLM",
        status: "OPTIMAL",
        metrics: { TTFT: "-53.2%", VRAM: "18.4 GB", P99: "14.2ms" },
        details: "Model inference pods consuming pre-warmed attention states to bypass redundant prefill compute.",
      },
    ],
  },
  {
    id: "codesentry",
    name: "CodeSentry DevSecOps",
    badge: "STATIC AST SECURITY PIPELINE",
    benchmark: "AST GRAPH TAINT ENGINE • ZERO FALSE-POSITIVES",
    nodes: [
      {
        id: "git",
        label: "VCS Webhook / CLI Ingress",
        sub: "Scan Trigger",
        tech: "CLI / GitHub Actions",
        status: "OPTIMAL",
        metrics: { Ingestion: "1.8ms", Engine: "Pure Node.js", CLI: "codesentry scan" },
        details: "Zero-dependency CLI and GitHub Actions gatekeeper reading changed files and AST tokens.",
      },
      {
        id: "ast",
        label: "Multi-Lang AST Parser",
        sub: "Syntax Graph",
        tech: "JS, TS & Python AST",
        status: "OPTIMAL",
        metrics: { ASTNodes: "14,200", Memory: "18MB", Speed: "52k lines/s" },
        details: "High-throughput parser compiling source code into Concrete Syntax Trees for JavaScript, TypeScript, and Python.",
      },
      {
        id: "taint",
        label: "AutoGrad & AttackGraph",
        sub: "Taint & Offline Cache",
        tech: "CFG Solver + Local Memory",
        status: "ONLINE",
        metrics: { Rules: "OWASP Top 10", OfflineMem: "0ms hit", FalsePos: "<0.05%" },
        details: "Traces untrusted input vectors to dangerous sinks while resolving recurring patterns via local offline memory.",
      },
      {
        id: "gate",
        label: "DeployGuard & ModelShield",
        sub: "Pre-Deploy Gate",
        tech: "Zero-Docker Pure Node",
        status: "OPTIMAL",
        metrics: { Verdict: "PASSED/BLOCKED", Tests: "97 Passing", Docker: "Zero Daemon" },
        details: "Enforces pre-deployment CI gates, audits Dockerfile/Actions configs, and neutralizes LLM prompt injections.",
      },
    ],
  },
  {
    id: "disbursement",
    name: "AI Loan Engine",
    badge: "TRANSACTION ARBITER",
    benchmark: "SUB-SECOND RISK SCORING • ZERO RECONCILIATION DRIFT",
    nodes: [
      {
        id: "loan-in",
        label: "Applicant Gateway",
        sub: "REST / GraphQL",
        tech: "Idempotent Queue",
        status: "OPTIMAL",
        metrics: { Ingress: "1.1ms", Rate: "1.2k req/s", Auth: "OAuth2 / JWT" },
        details: "High-concurrency entry point validating financial identity KYC and deduplicating loan requests.",
      },
      {
        id: "scoring",
        label: "ML Risk & Scoring",
        sub: "Scoring Engine",
        tech: "XGBoost + Rule Matrix",
        status: "OPTIMAL",
        metrics: { Decision: "14.8ms", AUC: "0.942", Drift: "0.01%" },
        details: "Real-time creditworthiness evaluation combining deterministic business rules with ML credit scoring.",
      },
      {
        id: "ledger",
        label: "Double-Entry Ledger",
        sub: "Audit Journal",
        tech: "Two-Phase Commit (2PC)",
        status: "ONLINE",
        metrics: { Consistency: "Strict ACID", Discrepancy: "0.00", Replicas: "3" },
        details: "Immutable transactional journal recording debits and credits with cryptographic balance integrity.",
      },
      {
        id: "settle",
        label: "Banking Rails Dispatch",
        sub: "Disbursement",
        tech: "IMPS / UPI / ACH",
        status: "OPTIMAL",
        metrics: { Settle: "240ms", Ack: "Webhook", Reconciliation: "Auto-Match" },
        details: "Direct banking protocol adapter dispatching payout instructions with automated failover retry circuits.",
      },
    ],
  },
];

export default function ArchitectureDiagram() {
  const [activeSystemId, setActiveSystemId] = useState("kv-cache");
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const activeSystem = SYSTEMS.find((s) => s.id === activeSystemId) || SYSTEMS[0];
  const selectedNode = activeSystem.nodes[selectedNodeIndex] || activeSystem.nodes[0];

  const handleSimulateTrace = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);
    setSelectedNodeIndex(0);

    const steps = [0, 1, 2, 3];
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setActiveStep(step);
        setSelectedNodeIndex(step);
        if (idx === steps.length - 1) {
          setTimeout(() => {
            setIsSimulating(false);
            setActiveStep(null);
          }, 700);
        }
      }, (idx + 1) * 600);
    });
  };

  // Switch systems and reset active node
  const handleSelectSystem = (id: string) => {
    setActiveSystemId(id);
    setSelectedNodeIndex(1);
    setActiveStep(null);
    setIsSimulating(false);
  };

  return (
    <div className="w-full max-w-2xl bg-[#0e0e11] border-2 border-white/15 text-white font-mono shadow-2xl relative">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-white/10 px-4 py-3 bg-[#151518]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-none animate-pulse" />
            <span className="text-[11px] font-bold text-white tracking-widest uppercase">
              TOPOLOGY // ARCHITECTURE INSPECTOR
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest hidden sm:inline">
            MODE:
          </span>
          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 font-bold uppercase tracking-wider">
            INTERACTIVE
          </span>
        </div>
      </div>

      {/* System Tabs */}
      <div className="grid grid-cols-3 border-b-2 border-white/10 bg-[#0a0a0c] text-xs">
        {SYSTEMS.map((system) => {
          const isActive = system.id === activeSystemId;
          return (
            <button
              key={system.id}
              onClick={() => handleSelectSystem(system.id)}
              className={`py-2.5 px-2 text-center font-bold uppercase tracking-wider transition-colors border-r-2 border-white/10 last:border-r-0 truncate ${
                isActive
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {system.name}
            </button>
          );
        })}
      </div>

      {/* Active System Sub-Banner */}
      <div className="flex items-center justify-between px-4 py-2 bg-emerald-950/20 border-b border-emerald-500/20 text-[10px] sm:text-[11px] text-emerald-400">
        <span className="font-bold tracking-wider uppercase">
          ✦ {activeSystem.badge}
        </span>
        <span className="font-mono text-gray-400 hidden sm:inline">
          {activeSystem.benchmark}
        </span>
      </div>

      {/* Interactive Topology Graph */}
      <div className="p-4 sm:p-6 bg-[#0a0a0d] relative overflow-hidden">
        {/* Subtle Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
          {activeSystem.nodes.map((node, index) => {
            const isSelected = selectedNodeIndex === index;
            const isTraceActive = activeStep === index;

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNodeIndex(index)}
                className={`relative cursor-pointer border-2 p-3 transition-all flex flex-col justify-between min-h-[110px] select-none ${
                  isTraceActive
                    ? "border-emerald-400 bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.35)] scale-105 z-20"
                    : isSelected
                    ? "border-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                    : "border-white/15 bg-[#121215] hover:border-white/40 hover:bg-[#18181d]"
                }`}
              >
                {/* Node Order Badge */}
                <div className="flex items-center justify-between text-[10px] mb-2">
                  <span className="font-mono text-gray-400 font-bold">
                    0{index + 1}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 ${
                      isTraceActive
                        ? "bg-emerald-300 animate-ping"
                        : isSelected
                        ? "bg-emerald-400"
                        : "bg-gray-600"
                    }`}
                  />
                </div>

                {/* Node Title & Subtitle */}
                <div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-white tracking-tight uppercase leading-snug">
                    {node.label}
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                    {node.sub}
                  </p>
                </div>

                {/* Micro Tech Tag */}
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-gray-400">
                  <span className="truncate text-emerald-400/90 font-mono font-bold">
                    {node.tech}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dataflow Connector Bar / Progress Indicator */}
        <div className="mt-4 flex items-center justify-between bg-black/60 border border-white/10 px-3 py-1.5 text-[10px] relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 uppercase tracking-widest font-mono">
              DATA PIPELINE:
            </span>
            <div className="flex items-center gap-1 font-bold text-emerald-400">
              <span>INGRESS</span>
              <span className="text-white/30">→</span>
              <span>INDEX</span>
              <span className="text-white/30">→</span>
              <span>FABRIC</span>
              <span className="text-white/30">→</span>
              <span>OUTPUT</span>
            </div>
          </div>

          <button
            onClick={handleSimulateTrace}
            disabled={isSimulating}
            className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider transition-all border ${
              isSimulating
                ? "bg-emerald-500 text-black border-emerald-400 animate-pulse cursor-wait"
                : "bg-white/10 hover:bg-white text-white hover:text-black border-white/30 hover:border-white cursor-pointer"
            }`}
          >
            {isSimulating ? "TRACING PACKET..." : "▶ SIMULATE TRACE"}
          </button>
        </div>
      </div>

      {/* Selected Node Telemetry HUD */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeSystem.id}-${selectedNode.id}`}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="border-t-2 border-white/10 bg-[#121216] p-4 sm:p-5"
        >
          {/* Header of Selected Node */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400" />
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">
                {selectedNode.label}
              </span>
              <span className="text-[10px] text-gray-400 uppercase font-mono">
                // {selectedNode.tech}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-500 uppercase font-mono">STATUS:</span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest bg-emerald-950/60 px-2 py-0.5 border border-emerald-500/30">
                {selectedNode.status}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-300 font-sans leading-relaxed pt-3">
            {selectedNode.details}
          </p>

          {/* Real-Time Metrics Strip */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10 text-center font-mono">
            {Object.entries(selectedNode.metrics).map(([metricName, val]) => (
              <div key={metricName} className="bg-black/50 border border-white/10 p-2">
                <div className="text-[9px] text-gray-400 uppercase tracking-widest">
                  {metricName}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  {val}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Social / Contact Links Row at Bottom */}
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-gray-400 border-t-2 border-white/10 px-4 py-3 bg-[#0a0a0c]">
        <a
          href="https://github.com/kaunteyaarjun"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:underline transition-colors"
        >
          GitHub
        </a>
        <span className="opacity-20">•</span>
        <a
          href="https://linkedin.com/in/somyaprasadsethy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:underline transition-colors"
        >
          LinkedIn
        </a>
        <span className="opacity-20">•</span>
        <a
          href="https://twitter.com/kaunteyaarjun"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:underline transition-colors"
        >
          Twitter
        </a>
        <span className="opacity-20">•</span>
        <a
          href="mailto:teams@polestudios.in"
          className="hover:text-white hover:underline transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  );
}
