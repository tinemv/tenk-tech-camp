import React from "react";
import { ProgressIndicator } from "@dnb/eufemia";

export interface ProgressProps {
  progressValue: number;
}

export default function Progress(props: ProgressProps) {
  const { progressValue } = props;

  return (
    <ProgressIndicator
      top
      type="linear"
      progress={progressValue}
      size="medium"
      no_animation
      label={"Hvor langt du har kommet: " + progressValue.toFixed(0) + "%"}
      label_direction="vertical"
      title="Se hvor langt du har kommet!"
    />
  );
}
