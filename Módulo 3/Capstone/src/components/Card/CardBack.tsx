interface iCardBackProps {
  verse: string;
}

export function CardBack({ verse }: iCardBackProps) {
  return (
    <div>
      <p>{verse}</p>
    </div>
  );
}
