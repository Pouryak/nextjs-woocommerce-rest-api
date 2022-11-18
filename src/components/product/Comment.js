import Image from "next/image";
import React from "react";
import userPLaceholder from "../../../public/user-placeholder.png";

const Comment = ({ name, avatar, date, content }) => {
  return (
    <div className="flex space-x-2 dark:bg-shadeDark bg-shadeLight rounded-md farsi-text">
      {/* Avatar/Name */}
      <div className="flex flex-col px-1 py-3 justify-center items-center w-1/6">
        <div className="overflow-hidden mb-1">
          <Image
            alt={`${name}-avatar`}
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
      <div className="flex flex-col w-5/6 space-y-4 px-4 pt-5">
        <span className="justify-self-start text-sm">Rating - {date}</span>
        <p className="text-lg" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Comment;
