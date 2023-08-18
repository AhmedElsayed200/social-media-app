import Image from "next/image";
import fakePosts from "../data/fakeposts";
import PostCard from "../components/PostCard/main";
import styles from "../../../public/styles/main.module.scss";

const PostsPage = () => {
  return (
    <div className={styles["posts-page"]}>
      {fakePosts.map((ele) => (
        <PostCard
          key={ele.id}
          userName={ele.userName}
          postTile={ele.postTile}
          likes={ele.likes}
          profileImg={ele.profileImage}
          postImg={ele.postImage}
          postContent={ele.postContent}
        />
      ))}
    </div>
  );
};

export default PostsPage;
