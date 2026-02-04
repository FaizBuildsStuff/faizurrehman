import type { Metadata } from "next";
import { ProjectsScreen } from "@/components/screens/projects-screen";

export const metadata: Metadata = {
  title: "Projects | FaizBuildsStuff",
  description: "Selected work by FaizBuildsStuff (Faizur Rehman).",
};

export default function ProjectsPage() {
  return <ProjectsScreen />;
}

