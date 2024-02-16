import React from "react";
import { USER_IMAGE } from "../utils/constant";

const commentsData = [
  {
    name: "Puru Rana",
    text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
    replies: [
      /**
 * aya Rodriguez
Liam Johnson
Aria Patel
Benjamin Chang
Sofia Mendez
Elijah Carter
Isabella Nguyen
Noah Thompson
Ava Khan
Oliver Williams
 */
      {
        name: "Oliver Williams",
        text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
        replies: [],
      },
      {
        name: "Liam Johnson",
        text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
        replies: [],
      },
      {
        name: "Aria Patel",
        text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
        replies: [
          {
            name: "Raymann Dogra",
            text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
            replies: [
              {
                name: "Ava Khan",
                text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
                replies: [
                  {
                    name: "Sofia Mendez",
                    text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
                    replies: [],
                  },
                ],
              },
              {
                name: "Benjamin Chang",
                text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Noah Thompson",
    text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
    replies: [],
  },
  {
    name: "Raymann Dogra",
    text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
    replies: [],
  },
  {
    name: "Liam Johnson",
    text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
    replies: [],
  },
  {
    name: "Kaya Rodriguez",
    text: "Exercitation minim elit sit exercitation nostrud qui dolor occaecat culpa.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img alt="user" className="w-12 h-12" src={USER_IMAGE} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    // Don't use indexes as keys
    <div key={index}>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
