type Props = {
  size?: number;
  color?: string;
  className?: string;
};

const ArrowDown = ({ size = 16, color = "grey", className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 16 16"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
    />
  </svg>
);

export default ArrowDown;
