import type { Metadata } from "next";
import JunosGrove from "@/feature/junosGrove";


export const metadata: Metadata = {
  title: "Junos Grove | Juno's Grove",
  description: "Junos Grove",
};

export default function JunosGrovePage() {
  return <JunosGrove />;
}
