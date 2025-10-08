type IconProps = {
  size?: number;
  color?: string;
};

export const Close = ({ size = 24, color = "black" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="18"
      y1="6"
      x2="6"
      y2="18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="6"
      y1="6"
      x2="18"
      y2="18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Close;
