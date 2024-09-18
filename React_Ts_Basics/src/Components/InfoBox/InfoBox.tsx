import { ReactNode } from "react";

interface HintBoxProps {
  mode: "hint";
  children: ReactNode;
  className: string;
}

interface WarningBoxProps {
  mode: "warning";
  children: ReactNode;
  severity?: "low" | "mid" | "high" | string;
  className: string;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children, className } = props;
  if (mode === "hint") {
    return (
      <aside className={className}>
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`warning--${severity} ${className}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
