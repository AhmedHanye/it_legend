import Comments from "@/components/course/comments";
import Material from "@/components/course/material";
import Topics from "@/components/course/topics";
import Nav from "@/components/nav/nav";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: CourseParams): Promise<Metadata> {
  const { course } = await params;
  return {
    title: decodeURIComponent(course),
    description: `Learn about ${decodeURIComponent(course)}`,
  };
}

export default async function Page({ params }: CourseParams) {
  const { course } = await params;
  console.info("course: ", course);
  return (
    <>
      <header className="min-h-[8.25rem] bg-[#f5f9fa] flex justify-between gap-y-4 flex-col padding-x py-4">
        <Nav />
        <h1 className="text-5xl max-md:text-[2.1rem] font-semibold">
          Starting SEO as your Home Based Business
        </h1>
      </header>
      <main className="grid md:grid-cols-[2fr_1fr] grid-rows-[repeat(3,auto)] padding-x md:gap-x-14 py-4">
        <section id="material" className="row-span-1">
          <Material />
        </section>
        <section id="topics" className="md:row-span-3 row-span-1">
          <Topics />
        </section>
        <section id="comments" className="row-span-1">
          <Comments />
        </section>
      </main>
    </>
  );
}
