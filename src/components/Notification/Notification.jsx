import clsx from "clsx";

export default function Notification({ className, message }) {
  return <p className={clsx(className)}>{message}</p>;
}
