type Props = {
  size?: number;
  color?: string;
};
const HamburgerMenu = ({ size = 45, color = "black" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    stroke={color}
    strokeWidth={1.5}
    className="size-6"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
    />
  </svg>
);
export default HamburgerMenu;
