import prentixLogo from "@/assets/prentix-logo.png";

interface PrentixIconProps {
  className?: string;
  size?: number;
}

const PrentixIcon = ({ className = "", size = 40 }: PrentixIconProps) => {
  return (
    <img
      src={prentixLogo}
      alt="Prentix"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
};

export default PrentixIcon;
