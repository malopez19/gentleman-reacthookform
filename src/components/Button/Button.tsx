interface ButtonProps {
  countMethod: () => void;
  label: string;
}
export default function Button({ countMethod, label }: ButtonProps) {
  return (
    <button className="custon-button" onClick={countMethod}>
      {label}
    </button>
  );
}
