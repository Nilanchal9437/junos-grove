import type { Metadata } from "next";
import WatchTower from "@/feature/watchTower";

export const metadata: Metadata = {
  title: "Junos Grove | Watch Tower",
  description: "Junos Grove",
};


export default function WatchTowerPage() {
  return <WatchTower />;
}
