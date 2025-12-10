import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  type?: "normal" | "icon";
  onClick?: () => void;
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
  onClick,
}: ButtonProps) {
  const typeClasses = clsx(
    type === "normal" &&
      "bg-primary text-white font-normal py-3 px-5 rounded-4xl shadow-button-initial hover:shadow-button transition-shadow cursor-pointer",
    type === "icon" &&
      "p-2 flex justify-center items-center bg-[rgba(255,255,255,0.25)] opacity-80 rounded-lg cursor-pointer transition-opacity hover:opacity-100"
  );

  return (
    <button className={typeClasses} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
