"use client";

import { useState, useMemo } from "react";
import { SettingsNav } from "@/components/settings-nav";
import { SettingsHeader } from "@/components/settings-header";
import { SettingsProfile } from "@/components/settings-profile";
import { SettingsApiKeys } from "@/components/settings-api-keys";
import { SettingsAppearance } from "@/components/settings-appearance";

type SettingsSection = "profile" | "api-keys" | "appearance";

const sectionMeta: Record<SettingsSection, { title: string; description: string }> = {
  profile: {
    title: "Profile Settings",
    description:
      "Manage your personal information, avatar, and account preferences.",
  },
  "api-keys": {
    title: "API Keys",
    description:
      "Connect your AI provider keys to unlock model access across the platform.",
  },
  appearance: {
    title: "Appearance",
    description:
      "Customize the look and feel of the application to match your workflow.",
  },
};

export default function SettingsPage() {
  const [activeSection, setActiveSection] =
    useState<SettingsSection>("profile");

  const meta = useMemo(() => sectionMeta[activeSection], [activeSection]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Subtle gradient background overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.04),transparent_60%),radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.04),transparent_60%)]" />

      {/* Side Navigation */}
      <SettingsNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content */}
      <main className="relative flex-1 overflow-y-auto">
        <div className="mx-auto max-w-2xl px-8 py-10">
          <SettingsHeader title={meta.title} description={meta.description} />

          {/* Animated section content — key forces re-mount for the animation */}
          <div key={activeSection} className="animate-fade-in-up">
            {activeSection === "profile" && <SettingsProfile />}
            {activeSection === "api-keys" && <SettingsApiKeys />}
            {activeSection === "appearance" && <SettingsAppearance />}
          </div>
        </div>
      </main>
    </div>
  );
}
