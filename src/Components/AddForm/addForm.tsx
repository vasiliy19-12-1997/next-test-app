"use client";
import { IPost } from "@/Types/types";
import { FC, useEffect, useState } from "react";
import MyButton from "../UI/MyButton/myButton";
import MyInput from "../UI/MyInput/myInput";
import { posts } from "./../../Store/store";
import React from "react";
interface IAddFormProps {}

const AddForm: FC<IAddFormProps> = (props) => {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor eius, eum perferendis perspiciatis labore, fugit voluptatem ducimus earum suscipit aspernatur nisi at voluptates nesciunt esse culpa laborum officiis qui?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, explicabo nihil? Neque asperiores, facere maiores suscipit corrupti ab eligendi iusto, unde, veritatis id iure alias. Doloremque quasi commodi minus eius.",
    },
    {
      userId: 2,
      id: 2,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor eius, eum perferendis perspiciatis labore, fugit voluptatem ducimus earum suscipit aspernatur nisi at voluptates nesciunt esse culpa laborum officiis qui?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, explicabo nihil? Neque asperiores, facere maiores suscipit corrupti ab eligendi iusto, unde, veritatis id iure alias. Doloremque quasi commodi minus eius.",
    },
    {
      userId: 3,
      id: 3,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor eius, eum perferendis perspiciatis labore, fugit voluptatem ducimus earum suscipit aspernatur nisi at voluptates nesciunt esse culpa laborum officiis qui?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, explicabo nihil? Neque asperiores, facere maiores suscipit corrupti ab eligendi iusto, unde, veritatis id iure alias. Doloremque quasi commodi minus eius.",
    },
  ]);
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const addPost = (title: string, body: string) => {
    const newPost = {
      userId: Math.random(),
      id: Math.random(),
      title: title,
      body: body,
    };
    setPosts([...posts, newPost]);
    setValue("");
  };

  const deletePost = () => (id: number) => {
    return posts.filter((post: IPost) => post.id !== id);
  };
  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <MyInput value={value} onChange={changeEvent} />
      <MyInput value={value} onChange={changeEvent} />
      <MyButton onClick={addPost}>Save</MyButton>
      <MyButton onClick={deletePost}>Delete</MyButton>
    </div>
  );
};

export default AddForm;
