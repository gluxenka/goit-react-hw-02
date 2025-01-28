import { useEffect, useState } from "react";

import css from "./App.module.css";

import DescriptionSection from "../DescriptionSection/DescriptionSection.jsx";
import FeedbackSection from "../FeedbackSection/FeedbackSection.jsx";
import Notification from "../Notification/Notification.jsx";
import OptionsSection from "../OptionsSection/OptionsSection.jsx";

const getInitialFeedbacks = () => ({
  good: 0,
  neutral: 0,
  bad: 0,
});

const FEEDBACKS_STORAGE_KEY = "feedbacks";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const defaultFeedbacks = getInitialFeedbacks();
    const rawData = window.localStorage.getItem(FEEDBACKS_STORAGE_KEY);

    try {
      const parsedData = JSON.parse(rawData);

      return Object.keys(defaultFeedbacks).reduce(
        (acc, key) => ({
          ...acc,
          [key]: parsedData[key] ?? defaultFeedbacks[key],
        }),
        defaultFeedbacks,
      );
    } catch {
      return defaultFeedbacks;
    }
  });

  const positiveNumber = feedbacks.good + feedbacks.neutral;
  const totalFeedbacks = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const hasFeedbacks = totalFeedbacks > 0;
  const positiveFeedbacks = hasFeedbacks
    ? Math.round((positiveNumber / totalFeedbacks) * 100)
    : 0;

  useEffect(() => {
    window.localStorage.setItem(
      FEEDBACKS_STORAGE_KEY,
      JSON.stringify(feedbacks),
    );
  }, [feedbacks]);

  const onFeedbackChange = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const onFeedbackReset = () => {
    setFeedbacks(getInitialFeedbacks());
  };

  return (
    <>
      <DescriptionSection className={css.taskContainer} />
      <OptionsSection
        className={css.taskContainer}
        feedbacks={feedbacks}
        allowReset={hasFeedbacks}
        onFeedbackChange={onFeedbackChange}
        onResetFeedback={onFeedbackReset}
      />
      {hasFeedbacks ? (
        <FeedbackSection
          className={css.taskContainer}
          feedbacks={feedbacks}
          total={totalFeedbacks}
          positive={positiveFeedbacks}
        />
      ) : (
        <Notification
          className={css.taskContainer}
          message={"No feedback yet"}
        />
      )}
    </>
  );
}

export default App;
