import { ReactNode } from "react";

interface InfoBoxProps {
  mode: "hint" | "warning";
  children: ReactNode;
  className: string;
}

const InfoBox = ({ mode, children, className }: InfoBoxProps) => {
  if (mode === "hint") {
    return (
      <aside className={className}>
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={className}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
