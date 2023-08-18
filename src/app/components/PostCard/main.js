import Image from "next/image";
import styles from "../../../../public/styles/main.module.scss";

const PostCard = ({
  userName,
  postTile,
  likes,
  profileImg,
  postImg,
  postContent,
}) => {
  return (
    <div className={styles["post-card"]}>
      <div className={styles["user-info"]}>
        <Image src={profileImg} alt={`Profile of ${userName}`} />
        <p>{userName}</p>
      </div>
      <Image src={postImg} alt={`Post of ${postTile}`} />
      <div className={styles["likes"]}>{likes} likes</div>
      <div className={styles["post-content"]}>{postContent}</div>
    </div>
  );
};

export default PostCard;
