interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-primary text-white font-normal py-3 px-5 rounded-4xl flex justify-center items-center cursor-pointer shadow-button-initial hover:shadow-button transition-shadow">
      {children}
    </button>
  );
}
