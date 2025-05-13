import type { Metadata } from "next";
import TreasureMap from "@/feature/treasureMap" ;

export const metadata: Metadata = {
  title: "Junos Grove | Treasure Map",
  description: "Junos Grove",
};

export default function TreasureMapPage() {
  return <TreasureMap />;
}
