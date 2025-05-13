import type { Metadata } from "next";
import Home from "@/feature/home";

export const metadata: Metadata = {
  title: "Junos Grove",
  description: "Junos Grove",
};

export default function HomePage() {
  return <Home />;
}
