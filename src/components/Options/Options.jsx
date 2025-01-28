import clsx from "clsx";

import css from "./Options.module.css";

export default function Options({
  className,
  feedbacks,
  allowReset,
  onFeedbackChange,
  onResetFeedback,
}) {
  const feedbackItems = Object.keys(feedbacks);
  return (
    <div className={clsx(css.optionsSection, className)}>
      {feedbackItems.map((item) => (
        <button key={item} onClick={() => onFeedbackChange(item)}>
          {item}
        </button>
      ))}
      {allowReset && <button onClick={() => onResetFeedback()}>Reset</button>}
    </div>
  );
}
