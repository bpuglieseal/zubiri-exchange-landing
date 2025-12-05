interface ButtonProps {
  children: React.ReactNode;
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

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-primary text-white font-normal py-3 px-5 rounded-4xl flex justify-center items-center cursor-pointer shadow-button-initial hover:shadow-button transition-shadow">
      {children}
    </button>
  );
}
