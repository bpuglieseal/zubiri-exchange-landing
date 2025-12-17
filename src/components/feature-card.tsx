interface CardProps {
  children?: React.ReactNode;
}

export default function FeatureCard({ children }: CardProps) {
  return (
    <div className="py-8 px-6 bg-card-bg border border-card-border shadow-card rounded-xl max-h-fit max-w-fit mt-4">
      {children}
    </div>
  );
}
