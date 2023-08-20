"use client";

import { useEffect, useState } from "react";
import fakePosts from "../data/fakeposts";
import PostCard from "../components/PostCard/main";
import styles from "../../../public/styles/main.module.scss";
import Navbar from "../components/Navbar/main";

const FavPostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postsList = localStorage.getItem("post") || fakePosts;
    setPosts(JSON.parse(postsList));
  }, []);

  const favPosts = posts.filter((ele) => ele.isFav);

  if (!favPosts.length)
    return (
      <>
        <Navbar />
        <div className={styles["centered-message"]}>
          <p className={styles["message-text"]}>No favorite posts to show</p>
        </div>
      </>
    );

  return (
    <>
      <Navbar />
      <div className={styles["posts-page"]}>
        {favPosts?.map((ele) => (
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

export default FavPostsPage;
