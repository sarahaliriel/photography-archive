import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve the project's authored AGENTS.md without dev-server mutations.
  agentRules: false,
};

export default nextConfig;
