import { createElement } from "react";

const BALLOON_COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E9",
];

function Balloon({ delay, left, color }) {
  const style = {
    position: "absolute",
    top: 0,
    left: left,
    width: 60,
    height: 80,
    borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
    backgroundColor: color,
    zIndex: 9999,
    animation: `balloon-float 8s ease-in forwards ${delay}s`,
  };

  const stringStyle = {
    position: "absolute",
    bottom: -10,
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderTop: "15px solid " + color,
  };

  return createElement(
    "div",
    { style: style },
    createElement("div", { style: stringStyle }),
  );
}

export function CelebrationBalloons({ dealName, dealValue }) {
  const balloons = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    left: `${Math.random() * 90}%`,
    color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
  }));

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: 9998,
  };

  const cardStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 9999,
    animation: "celebration-pop 0.5s ease-out",
  };

  const cardInnerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "30px 50px",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#10B981",
    margin: 0,
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#374151",
    margin: 0,
  };

  return createElement(
    "div",
    { style: containerStyle },
    createElement(
      "style",
      null,
      `
        @keyframes balloon-float {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          50% { transform: translateY(50vh) translateX(20px); opacity: 1; }
          100% { transform: translateY(100vh) translateX(-20px); opacity: 0; }
        }
        @keyframes celebration-pop {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
      `
    ),
    createElement("div", { style: cardStyle },
      createElement("div", { style: cardInnerStyle },
        createElement("h2", { style: titleStyle }, "🎉 Deal Won!"),
        createElement("p", { style: subtitleStyle }, dealName + (dealValue ? " - " + dealValue : ""))
      )
    ),
    balloons.map((balloon) =>
      createElement(Balloon, {
        key: balloon.id,
        delay: balloon.delay,
        left: balloon.left,
        color: balloon.color,
      })
    )
  );
}