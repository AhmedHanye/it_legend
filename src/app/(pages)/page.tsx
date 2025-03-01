import Nav from "@/components/nav/nav";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ITLegend Course",
  description: "ITLegend Course",
};

const Home = () => {
  return (
    <>
      <header className="padding-x py-4">
        <Nav />
      </header>
      <main className="center flex-col gap-y-2 h-full">
        <h1>Home</h1>
        <Link href="/courses" className="block">
          <Button variant="outline" className="cursor-pointer">
            Courses
          </Button>
        </Link>
      </main>
    </>
  );
};

export default Home;
