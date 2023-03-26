/**
 * This file represents the component wrapper.
 * Developer can use this to construct a single page by using one or more components.
 */
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className="dashboard-wrapper">Dashboard</div>;
}
