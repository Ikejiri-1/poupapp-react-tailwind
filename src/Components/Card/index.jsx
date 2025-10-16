function Card({ children }) {
  return <div className="bg-neutral-surface rounded-3xl">{children}</div>;
}
export function CardHeader({ children }) {
  return (
    <div className="bg-neutral-header p-4 text-center rounded-t-3xl text-xl text-neutral-text leading-[120%] font-bold">
      {children}
    </div>
  );
}
export function CardBody({ children }) {
  return <div className="px-4 py-6 ">{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
