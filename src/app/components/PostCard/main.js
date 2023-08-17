import Image from "next/image";

const PostCard = ({
  userName,
  postTile,
  likes,
  profileImg,
  postImg,
  postContent,
}) => {
  console.log(profileImg);
  return (
    <div>
      <div>
        <Image
          src={profileImg}
          alt={`Profile of ${userName}`}
          width={120}
          height={120}
        />
        <p>{userName}</p>
      </div>
      <Image
        src={postImg}
        alt={`Post of ${postTile}`}
        width={400}
        height={400}
      />
      <div>{likes} likes</div>
      <div>{postContent}</div>
    </div>
  );
};

export default PostCard;
