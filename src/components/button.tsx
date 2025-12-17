import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  type?: "normal" | "icon";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
  buttonType?: "button" | "submit" | "reset";
}

export function IconButton({ children }: ButtonProps) {
  return (
    <a
      href="#"
      className="flex justify-center items-center bg-[rgba(255,255,255,0.25)] opacity-80 rounded-lg cursor-pointer transition-opacity hover:opacity-100"
    >
      <span className="p-2">{children}</span>
    </a>
  );
}

export default function Button({
  children,
  type = "normal",
  size = "medium",
  onClick,
  className,
  buttonType = "button",
}: ButtonProps) {
  const typeClasses = clsx(
    type === "normal" &&
      "bg-primary text-white font-normal rounded-4xl shadow-button-initial hover:shadow-button transition-shadow cursor-pointer",
    type === "icon" &&
      "p-2 flex justify-center items-center bg-[rgba(255,255,255,0.25)] opacity-80 rounded-lg cursor-pointer transition-opacity hover:opacity-100"
  );

  const sizeClasses = clsx(
    type === "normal" && size === "medium" && "py-3 px-5",
    type === "normal" && size === "large" && "px-9 py-3.5 text-lg"
  );

  return (
    <button
      className={`${typeClasses} ${sizeClasses} ${className}`}
      type={buttonType}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
