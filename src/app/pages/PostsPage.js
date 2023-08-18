"use client";

import { useState } from "react";
import Image from "next/image";
import fakePosts from "../data/fakeposts";
import PostCard from "../components/PostCard/main";
import styles from "../../../public/styles/main.module.scss";

const PostsPage = () => {
  const [posts, setPosts] = useState(fakePosts);
  const [favPosts, setFavPosts] = useState([]);

  return (
    <div className={styles["posts-page"]}>
      {posts.map((ele) => (
        <PostCard
          key={ele.id}
          postId={ele.id}
          userName={ele.userName}
          likes={ele.likes}
          profileImg={ele.profileImage}
          postImg={ele.postImage}
          postContent={ele.postContent}
          isFav={ele.isFav}
          posts={posts}
          setPosts={setPosts}
          favPosts={favPosts}
          setFavPosts={setFavPosts}
        />
      ))}
    </div>
  );
};

export default PostsPage;
