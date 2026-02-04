import type { Metadata } from "next";
import { ContactScreen } from "@/components/screens/contact-screen";

export const metadata: Metadata = {
  title: "Contact | FaizBuildsStuff",
  description: "Contact FaizBuildsStuff (Faizur Rehman).",
};

export default function ContactPage() {
  return <ContactScreen />;
}

