import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { CelebrationBalloons } from "@/components/celebration/celebration_balloons";

export default class extends Controller {
  static values = {
    dealName: String,
    dealValue: String,
    show: { type: Boolean, default: false },
  };

  connect() {
    if (this.showValue) {
      this.root = createRoot(this.element);
      this._render();
      setTimeout(() => {
        this.element.remove();
      }, 10000);
    }
  }

  disconnect() {
    this.root?.unmount();
  }

  _render() {
    this.root.render(
      createElement(CelebrationBalloons, {
        dealName: this.dealNameValue || "Deal",
        dealValue: this.dealValueValue || "",
      }),
    );
  }
}