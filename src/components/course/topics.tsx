import { Progress } from "../ui/progress";
import Topic from "./topic";

const Topics = () => {
  const progress = 63;
  const topics: topic[] = [
    {
      title: "Week 1-4",
      description: "Advanced story telling techniques for writers: bradajanmed",
      materials: [
        {
          title: "Introduction",
          url: "/course/seo/",
          locked: false,
        },
        {
          title: "Course Overview",
          url: "/course/seo/",
          locked: true,
        },
        {
          title:
            "Course Overview lorem ipsum dolor sit amet Course Overview lorem ipsum dolor sit amet Course Overview lorem ipsum dolor sit amet",
          url: "/course/seo/",
          locked: true,
          questions: 0,
          time: 0,
        },
        {
          title: "Course Exercise / Reference Files",
          url: "/course/seo/",
          locked: true,
        },
        {
          title: "Code Editor Installation (Optional if you have one)",
          url: "/course/seo/",
          locked: true,
        },
        {
          title: "Embedding PHP in HTML",
          url: "/course/seo/",
          locked: true,
        },
      ],
    },
    {
      title: "Week 5-8",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      materials: [
        {
          title: "Defining Functions",
          url: "/course/seo/",
          locked: false,
        },
        {
          title: "Function Parameters",
          url: "/course/seo/",
          locked: true,
        },
        {
          title: "Return Values From Functions",
          url: "/course/seo/",
          locked: true,
          questions: 2,
          time: 15,
        },
        {
          title: "Course Exercise / Reference Files",
          url: "/course/seo/",
          locked: true,
        },
        {
          title: "Code Editor Installation (Optional if you have one)",
          url: "/course/seo/",
          locked: true,
        },
        {
          title: "Embedding PHP in HTML",
          url: "/course/seo/",
          locked: true,
        },
      ],
    },
    {
      title: "Week 9-12",
      description: "Advanced story telling techniques for writers: bradajanmed",
      materials: [
        {
          title: "Introduction",
          url: "/course/seo/",
          locked: false,
        },
        {
          title: "Course Overview",
          url: "/course/seo/",
          locked: true,
        },
        {
          title:
            "Course Overview lorem ipsum dolor sit amet Course Overview lorem ipsum dolor sit amet Course Overview lorem ipsum dolor sit amet",
          url: "/course/seo/",
          locked: true,
          questions: 10,
          time: 20,
        },
        {
          title: "Course Exercise / Reference Files",
          url: "/course/seo/",
          locked: true,
        },
        {
          title: "Code Editor Installation (Optional if you have one)",
          url: "/course/seo/",
          locked: true,
        },
        {
          title: "Embedding PHP in HTML",
          url: "/course/seo/",
          locked: true,
        },
      ],
    },
  ];
  return (
    <>
      <h2 className="heading2">Topics for This Course</h2>
      <div id="progress" className="relative my-16">
        <div
          className="absolute -top-14 center flex-col text-[#485293]"
          style={{
            left: `calc(${progress}% - 1.1846875rem)`, // * 1.1846875rem is half of the width of the element
          }}
        >
          <p className="p-1.5 rounded-full border-3 border-gray-300 text-sm">
            You
          </p>
          <div
            className="w-0 h-0 
                border-l-[0.25rem] border-l-transparent
                border-t-[0.375rem] border-t-gray-300
                border-r-[0.25rem] border-r-transparent mt-1"
          ></div>
          <span className="mt-7 text-xs">{progress}%</span>
        </div>
        <Progress
          value={progress}
          aria-label="your progress in this course"
          className="[&>*]:bg-[#6abd8a] [&>*]:rounded-lg bg-gray-200 h-1.5"
        />
      </div>
      <div id="topics" className="flex flex-col md:gap-y-16 gap-y-8 py-8">
        {topics.map((topic: topic) => (
          <Topic topic={topic} key={topic.title} />
        ))}
      </div>
    </>
  );
};

export default Topics;
