interface iCardFrontProps {
  front: string;
}

export function CardFront({ front }: iCardFrontProps) {
  return (
    <div>
      <h1>{front}</h1>
    </div>
  );
}
