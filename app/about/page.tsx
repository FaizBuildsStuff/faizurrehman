import type { Metadata } from "next";
import { AboutScreen } from "@/components/screens/about-screen";

export const metadata: Metadata = {
  title: "About | FaizBuildsStuff",
  description:
    "About FaizBuildsStuff (Faizur Rehman) — full-stack developer & UI designer building premium digital experiences.",
};

export default function AboutPage() {
  return <AboutScreen />;
}

