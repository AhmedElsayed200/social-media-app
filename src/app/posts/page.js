"use client";

import { useEffect, useState } from "react";
import fakePosts from "../data/fakeposts";
import PostCard from "../components/PostCard/main";
import styles from "../../../public/styles/main.module.scss";
import Navbar from "../components/Navbar/main";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postsList = localStorage.getItem("post") || fakePosts;
    setPosts(JSON.parse(postsList));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles["posts-page"]}>
        {posts?.map((ele) => (
          <PostCard
            key={ele.id}
            postInfo={ele}
            posts={posts}
            setPosts={setPosts}
          />
        ))}
      </div>
    </>
  );
};

export default PostsPage;
