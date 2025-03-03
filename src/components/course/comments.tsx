import React from "react";
import Comment from "./comment";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { getComments } from "@/utils/data";

const Comments = async ({ courseId }: courseId) => {
  const commentsDetails: comment[] = await getComments(courseId);
  return (
    <>
      <h2 className="heading2">Comments</h2>
      <div className="divide-accent divide-y-2">
        {commentsDetails.map((commentDetails: comment, index) => (
          <Comment key={index} commentDetails={commentDetails} />
        ))}
      </div>
      <form action="" className="px-5">
        <Textarea
          className="h-44  my-8 !text-2xl pt-5 px-4 shadow-[0px_0px_30.5px_15px_rgba(0,0,0,0.04)]"
          placeholder="Write a comment"
        />
        <Button
          className="cursor-pointer text-lg py-7 center font-bold"
          variant={"submit_review"}
          size={"xl"}
        >
          <span>Submit Review</span> <ArrowRight className="stroke-3" />
        </Button>
      </form>
    </>
  );
};

export default Comments;
