import { getTopics } from "@/utils/data";
import { Progress } from "../ui/progress";
import Topic from "./topic";

const Topics = async ({ courseId }: courseId) => {
  const { progress, topics } = await getTopics(courseId);
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
