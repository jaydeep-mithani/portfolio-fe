import classes from "./styles.module.css";

interface HamburgerIconProps {
  color?: string;
  hoverColor?: string;
  size?: number;
  className?: string;
}

const HamburgerIcon = ({
  color = "#ffffff",
  hoverColor,
  size = 100,
  className = "",
}: HamburgerIconProps) => {
  const height = Math.round(size * 0.56); // Maintain aspect ratio

  const style: React.CSSProperties = {
    width: `${size}px`,
    height: `${height}px`,
    // Custom CSS variables added using type assertion
    ...({
      "--color": color,
      "--hover-color": hoverColor || color,
    } as React.CSSProperties),
  };

  return (
    <div
      className={`${classes.nav} ${className} relative flex justify-center items-center cursor-pointer`}
      style={style}
    >
      <input
        type="checkbox"
        className="absolute inset-0 z-10 cursor-pointer opacity-0"
      />
      <svg
        viewBox="0 0 100 56"
        className="w-full h-full"
        style={{
          fill: "none",
          stroke: "var(--color)",
          strokeWidth: "7px",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      >
        <path
          d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4"
          className={classes.path1}
        />
        <path
          d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4"
          className={classes.path2}
        />
      </svg>
    </div>
  );
};

export default HamburgerIcon;
