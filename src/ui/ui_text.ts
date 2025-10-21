import { UiWidget } from "./_ui_widget";

/**
 * UI creation and modification utility class
 * @author TastySyntax
 */
export class UiText extends UiWidget {
  constructor(
    name: string,
    position: mod.Vector,
    textBoxSize: mod.Vector,
    anchor: mod.UIAnchor,
    message: string | mod.Message,
    recipient?: mod.Player | mod.Team
  ) {
    super(name)

    if (typeof message === "string") {
      message = mod.Message(message);
    }
    if (recipient) {
      mod.AddUIText(name, position, textBoxSize, anchor, message, recipient);
    } else {
      mod.AddUIText(name, position, textBoxSize, anchor, message);
    }
  }

  setTextSize(size: number) {
    mod.SetUITextSize(this.widget, size);
    return this;
  }

  setTextColor(color: mod.Vector) {
    mod.SetUITextColor(this.widget, color);
    return this;
  }

  setTextAlpha(alpha: number) {
    mod.SetUITextAlpha(this.widget, alpha);
    return this;
  }

  setTextAnchor(anchor: mod.UIAnchor) {
    mod.SetUITextAnchor(this.widget, anchor);
    return this;
  }

  async setTimeout(duration: number, callback: () => void) {
    await mod.Wait(duration);
    callback();
  }
}
