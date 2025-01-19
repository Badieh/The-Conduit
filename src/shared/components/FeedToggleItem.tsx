export function FeedToggleItem({
  isSelected,
  children,
  onClick,
}: {
  isSelected: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <li
      className={`cursor-pointer px-2 sm:px-4 sm:text-2xl ${
        isSelected
          ? "border-b-2 border-blue-500 text-blue-500"
          : "border-b-2 border-gray-400 text-gray-400"
      }`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
