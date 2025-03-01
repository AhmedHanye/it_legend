import Nav from "@/components/nav/nav";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses",
  description: "Learn about our courses",
};

const Courses = () => {
  return (
    <>
      <header className="padding-x py-4">
        <Nav />
      </header>
      <main className="center flex-col gap-y-2 h-full">
        <h1>Courses</h1>
        <Link href="/courses/course details" className="block">
          <Button variant="outline" className="cursor-pointer">
            Course Details
          </Button>
        </Link>
      </main>
    </>
  );
};

export default Courses;
