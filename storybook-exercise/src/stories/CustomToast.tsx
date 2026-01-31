import React from "react";

type ToastStatus = "success" | "warning" | "error";

interface CustomToastProps {
  status: ToastStatus;
  text: string;
  hasIcon?: boolean;
}

const statusStyles: Record<ToastStatus, { bg: string; icon: string }> = {
  success: { bg: "lightgreen", icon: "✅" },
  warning: { bg: "lightyellow", icon: "⚠️" },
  error: { bg: "lightcoral", icon: "❌" },
};

export const CustomToast: React.FC<CustomToastProps> = ({
  status,
  text,
  hasIcon = true,
}) => {
  const { bg, icon } = statusStyles[status];

  return (
    <div
      style={{
        backgroundColor: bg,
        padding: "1rem",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        fontSize: "1rem",
        maxWidth: "300px",
      }}
    >
      {hasIcon && <span>{icon}</span>}
      <span>{text}</span>
    </div>
  );
};
