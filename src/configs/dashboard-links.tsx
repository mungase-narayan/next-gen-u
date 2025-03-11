"use client";
import {
  AudioWaveform,
  Calendar,
  Command,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react";

const dashboardLinks = {
  teams: [
    {
      name: "Acme Inc",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      id: 1,
      title: "Search",
      url: "/dashboard/search",
      icon: Search,
    },
    {
      id: 2,
      title: "Ask AI",
      url: "/dashboard/ask-ai",
      icon: Sparkles,
    },

    {
      id: 3,
      title: "Inbox",
      url: "/dashboard/inbox",
      icon: Inbox,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      id: 1,
      title: "Calendar",
      url: "/dashboard/calendar",
      icon: Calendar,
    },
    {
      id: 2,
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
    },
    {
      id: 3,
      title: "Help",
      url: "/dashboard/help",
      icon: MessageCircleQuestion,
    },
  ],
};

export default dashboardLinks;
