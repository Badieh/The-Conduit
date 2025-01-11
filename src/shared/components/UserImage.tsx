import DefaultIImage from "./DefaultIImage";

export default function UserImage({
  image,
  className,
}: {
  image: string | null;
  className?: string;
}) {
  if (!image) {
    return <DefaultIImage className={className} />;
  }
  return (
    <img
      className={className}
      title="user-img"
      src={image}
      alt="user_image"
      onError={(e) =>
        (e.currentTarget.src =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
      }
    />
  );
}
