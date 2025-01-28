import clsx from "clsx";

import css from "./Feedback.module.css";

export default function Feedback({ className, feedbacks, total, positive }) {
  const feedbackResults = [
    { key: "good", label: "good", value: feedbacks.good },
    { key: "neutral", label: "neutral", value: feedbacks.neutral },
    { key: "bad", label: "bad", value: feedbacks.bad },
    { key: "total", label: "total", value: total },
    { key: "positive", label: "positive", value: `${positive}%` },
  ];

  return (
    <div className={clsx(css.feedbackSection, className)}>
      <ul>
        {feedbackResults.map((feedback) => (
          <li key={feedback.key}>
            <span className={css.feedbackLabel}>{feedback.label}:</span>
            <span>{feedback.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
