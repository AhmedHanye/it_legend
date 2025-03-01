import Image from "next/image";

const Comment = ({ commentDetails }: { commentDetails: comment }) => {
  return (
    <div className="comment flex gap-x-4 py-5">
      <div className="center">
        <Image
          src={commentDetails.img}
          width={96}
          height={96}
          className="min-w-24"
          alt="profile img"
          loading="lazy"
        />
      </div>
      <div className="pt-4">
        <h1 className="text-[#6c6c6c] font-semibold text-lg">
          {commentDetails.name}
        </h1>
        <p className="text-gray-500">{commentDetails.date}</p>
        <p className="pt-2 text-gray-500">{commentDetails.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
