"use client";

import { useEffect, useState } from "react";
import fakePosts from "../data/fakeposts";
import PostCard from "../components/PostCard/main";
import styles from "../../../public/styles/main.module.scss";

const FavPostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postsList = localStorage.getItem("post") || fakePosts;
    setPosts(JSON.parse(postsList));
  }, []);

  return (
    <div className={styles["posts-page"]}>
      {posts?.map((ele) =>
        ele.isFav ? (
          <PostCard
            key={ele.id}
            postInfo={ele}
            posts={posts}
            setPosts={setPosts}
          />
        ) : null
      )}
    </div>
  );
};

export default FavPostsPage;
