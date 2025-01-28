import clsx from "clsx";

const cafeName = "Sip Happens Café";
const cafeDesc =
  "Please leave your feedback about our service by selecting one of the options below.\n";

export default function DescriptionSection({ className }) {
  return (
    <>
      <div className={clsx(className)}>
        <h1>{cafeName}</h1>
        <p>{cafeDesc}</p>
      </div>
    </>
  );
}
