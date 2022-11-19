import React, { useState } from "react";
import Comment from "./Comment";

const Details = ({ details, description, comments }) => {
  const [activeTab, setActiveTab] = useState("details");

  let content;
  switch (activeTab) {
    case "reviews":
      content = (
        <div className="flex flex-col space-y-4 farsi-text mx-4 py-3 ">
          {comments?.nodes?.length ? (
            comments.nodes.map((com) => (
              <Comment
                key={com.id}
                name={com.author.node.name}
                avatar={com.author.node.avatar.url}
                content={com.content}
                date={com.date}
              />
            ))
          ) : (
            <p className="text-center">هیچ نظری برای این محصول ثبت نشده است</p>
          )}
        </div>
      );
      break;
    case "info":
      content = (
        <div className="px-4 farsi-text">
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      );
      break;
    default:
      content = (
        <div className="flex flex-col space-y-2 px-4">
          {details.map((item) => (
            <div
              key={`${item.name}-detail`}
              className="flex space-x-2 items-center justify-between"
            >
              <div className="dark:bg-shadeDark bg-shadeLight px-4 py-2 w-3/4 farsi-text rounded-sm">
                {item.options[0]}
              </div>
              <div className="dark:bg-shadeDark bg-shadeLight px-4 py-2 w-1/4 rounded-sm">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      );
  }

  return (
    <div className="mb-4">
      <div className="flex justify-end space-x-4 text-center items-center pb-2">
        <div
          onClick={() => setActiveTab("reviews")}
          className={`product-details-tab ${
            activeTab === "reviews"
              ? "bg-green-500 text-white"
              : "bg-secondaryLight dark:bg-secondaryDark"
          }`}
        >
          دیدگاه ها
        </div>
        <div
          onClick={() => setActiveTab("info")}
          className={`product-details-tab ${
            activeTab === "info"
              ? "bg-green-500 text-white"
              : "bg-secondaryLight dark:bg-secondaryDark"
          }`}
        >
          توضیحات
        </div>
        <div
          onClick={() => setActiveTab("details")}
          className={`product-details-tab ${
            activeTab === "details"
              ? "bg-green-500 text-white"
              : "bg-secondaryLight dark:bg-secondaryDark"
          }`}
        >
          مشخصات
        </div>
      </div>
      {/* tab content area */}
      <div className="container mx-auto rounded-md shadow-md py-8 px-14 bg-secondaryLight dark:bg-secondaryDark">
        {content}
      </div>
    </div>
  );
};

export default Details;
