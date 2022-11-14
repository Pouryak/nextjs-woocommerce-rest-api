import Image from "next/image";
import React from "react";
import userPLaceholder from "../../public/user-placeholder.png";

const Comment = ({ name, avatar, date, content }) => {
  return (
    <div className="flex space-x-2">
      {/* Avatar/Name */}
      <div className="flex flex-col space-y-2 justify-center items-center w-1/5">
        <div className="overflow-hidden">
          <Image
            src={avatar || userPLaceholder}
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <p>{name}</p>
      </div>
      <div className="border-gray-300 dark:border-secondaryDark border-l" />
      {/* Comment/date */}
      <div className="flex flex-col w-4/5 space-y-4 px-2 justify-center">
        <span className="justify-self-start">Rating - {date}</span>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Comment;
