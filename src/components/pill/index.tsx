interface PillProps {
  label: string;
  backgroundColor?: string;
}

const Pill: React.FC<PillProps> = ({
  label = "",
  backgroundColor = "bg-gray-600",
}) => {
  return (
    <span className={`px-3 py-1 rounded-full text-sm ${backgroundColor}`}>
      {label}
    </span>
  );
};

export default Pill;
