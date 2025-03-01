import React from "react";
import Comment from "./comment";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Comments = () => {
  const commentsDetails: comment[] = [
    {
      img: "/profile_img.svg",
      name: "Student Name Goes Here",
      date: "Oct 10, 2021",
      comment:
        "Lorem ipsum dolor sit ametr consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/profile_img.svg",
      name: "Student Name Goes Here",
      date: "Oct 10, 2021",
      comment:
        "Lorem ipsum dolor sit ametr consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/profile_img.svg",
      name: "Student Name Goes Here",
      date: "Oct 10, 2021",
      comment:
        "Lorem ipsum dolor sit ametr consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
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
          className="h-44  my-8 !text-2xl pt-5 px-4"
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
