import Image from "next/image";
import styles from "../../../../public/styles/main.module.scss";
import filledHeart from "../../../../public/assets/images/filled-heart.png";
import emptyHeart from "../../../../public/assets/images/empty-heart.png";

const PostCard = ({
  postId,
  userName,
  likes,
  profileImg,
  postImg,
  postContent,
  isFav,
  posts,
  setPosts,
  favPosts,
  setFavPosts,
}) => {
  console.log(favPosts);
  const toggleFav = () => {
    const updatedPosts = posts?.map((item) =>
      item.id === postId ? { ...item, isFav: !item.isFav } : item
    );
    setPosts(updatedPosts);

    if (isFav) {
      console.log(postId);
      const updatedFavPosts = favPosts?.filter(
        (item) => item.postId !== postId
      );
      setFavPosts(updatedFavPosts);
    } else {
      const newFavPost = {
        postId,
        userName,
        likes,
        profileImg,
        postImg,
        postContent,
        isFav,
      };
      setFavPosts([...favPosts, newFavPost]);
    }
  };
  return (
    <div className={styles["post-card"]}>
      <div className={styles["user-info"]}>
        <Image src={profileImg} alt={`Profile of ${userName}`} />
        <p>{userName}</p>
      </div>
      <Image src={postImg} alt={`Post image of ${userName}`} />
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
