export default function DefaultIImage({ className }: { className?: string }) {
  return (
    <img
      className={className}
      title="user-img"
      src="/assets/default_user.png"
      alt="default_user"
      onError={(e) =>
        (e.currentTarget.src =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
      }
    />
  );
}
