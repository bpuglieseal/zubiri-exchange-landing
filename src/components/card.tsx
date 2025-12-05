interface CardProps {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    title: string;
    description: string;
}

export default function Card({icon, title, description}: CardProps) {
  return (
    <div className="py-8 px-6 bg-card-bg border border-card-border shadow-card rounded-xl">
        {icon && <div className="p-3 bg-primary shadow-card-icon rounded-xl w-fit">{icon}</div>}
      <div className="mt-4 space-y-2">
        <h5 className="font-medium text-xl">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}