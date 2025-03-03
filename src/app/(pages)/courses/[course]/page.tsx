import Comments from "@/components/course/comments";
import Material from "@/components/course/material";
import Topics from "@/components/course/topics";
import CommentsSkeleton from "@/components/loading/commentsSkeleton";
import MaterialSkeleton from "@/components/loading/materialSkeleton";
import TopicsSkeleton from "@/components/loading/topicsSkeleton";
import Nav from "@/components/nav/nav";
import { getCourseData } from "@/utils/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
  const courseData = await getCourseData(decodeURIComponent(course));
  if (typeof courseData === "number") {
    notFound(); //! 404
  }

  return (
    <>
      <header className="min-h-[8.25rem] bg-[#f5f9fa] flex justify-between gap-y-4 flex-col padding-x py-4">
        <Nav />
        <h1 className="text-5xl max-md:text-[2.1rem] font-semibold">
          {courseData.title}
        </h1>
      </header>
      <main className="grid md:grid-cols-[2fr_1fr] grid-rows-[repeat(3,auto)] padding-x md:gap-x-14 py-4">
        <section id="material" className="row-span-1">
          <Suspense fallback={<MaterialSkeleton />}>
            <Material courseId={courseData.id} />
          </Suspense>
        </section>
        <section id="topics" className="md:row-span-3 row-span-1">
          <Suspense fallback={<TopicsSkeleton />}>
            <Topics courseId={courseData.id} />
          </Suspense>
        </section>
        <section id="comments" className="row-span-1">
          <Suspense fallback={<CommentsSkeleton />}>
            <Comments courseId={courseData.id} />
          </Suspense>
        </section>
      </main>
    </>
  );
}
