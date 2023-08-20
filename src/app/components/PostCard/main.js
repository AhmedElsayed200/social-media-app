import Image from "next/image";
import styles from "../../../../public/styles/main.module.scss";
import filledHeart from "../../../../public/assets/images/filled-heart.png";
import emptyHeart from "../../../../public/assets/images/empty-heart.png";

const PostCard = ({ postInfo, posts, setPosts }) => {
  const { id, userName, likes, profileImage, postImage, postContent, isFav } =
    postInfo;

  const toggleFav = () => {
    const updatedPosts = posts?.map((item) =>
      item.id === id ? { ...item, isFav: !item.isFav } : item
    );
    setPosts(updatedPosts);
    localStorage.setItem("post", JSON.stringify(updatedPosts));
  };

  return (
    <div className={styles["post-card"]}>
      <div className={styles["user-info"]}>
        <Image src={profileImage} alt={`Profile of ${userName}`} />
        <p>{userName}</p>
      </div>
      <Image src={postImage} alt={`Post image of ${userName}`} />
      <div className={styles["likes"]}>{likes} likes</div>
      <div className={styles["post-content"]}>{postContent}</div>
      <button onClick={() => toggleFav()} className={styles["heart-button"]}>
        <Image
          className={styles["heart-icon"]}
          src={isFav ? filledHeart : emptyHeart}
          alt={`heart`}
        />
        Like
      </button>
    </div>
  );
};

export default PostCard;
