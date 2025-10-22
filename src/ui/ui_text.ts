import { UiWidget } from "./_ui_widget";

/**
 * Represents a UI text widget.
 * @extends _UiWidget
 * @author TastySyntax
 */
export class UiText extends UiWidget {
  /**
   * Constructs a new UiText instance.
   * @param name - The name of the text widget
   * @param searchRoot - Root mod.UIWidget to start search from
   */
  private constructor(
    name: string,
    searchRoot?: mod.UIWidget
  ) {
    super(name, searchRoot)
  }

  /**
   * Constructs a new UiText instance linked to a already existing widget.
   * @param name - The name of the button.
   * @param searchRoot - Root mod.UIWidget to start search from
   */
  static get(name: string, searchRoot?: mod.UIWidget) {
    return new UiText(name, searchRoot);
  }

  /**
   * Creates a new UiText widget and adds it to the UI.
   * @param name - The name of the text widget.
   * @param position - The position vector for the UI text.
   * @param textBoxSize - The size of the text box.
   * @param anchor - The anchor position for the text box.
   * @param message - The message to display, as a string or `mod.Message`.
   * @param recipient - Optional recipient (player or team) for private messages.
   * @returns A new instance of UiText representing the created widget.
   */
  static new(
    name: string,
    position: mod.Vector,
    textBoxSize: mod.Vector,
    anchor: mod.UIAnchor,
    message: string | mod.Message,
    recipient?: mod.Player | mod.Team
  ) {
    if (typeof message === "string") {
      message = mod.Message(message);
    }

    if (recipient) {
      mod.AddUIText(name, position, textBoxSize, anchor, message, recipient);
    } else {
      mod.AddUIText(name, position, textBoxSize, anchor, message);
    }

    return new UiText(name);
  }

  /**
   * Sets the text size of the widget.
   * @param size - Text size.
   * @returns - The current instance of UiText.
   */
  setTextSize(size: number) {
    mod.SetUITextSize(this.widget, size);
    return this;
  }

  /**
   * Sets the text color of the widget.
   * @param color - Text color.
   * @returns - The current instance of UiText.
   */
  setTextColor(color: mod.Vector) {
    mod.SetUITextColor(this.widget, color);
    return this;
  }

  /**
   * Sets the text alpha of the widget.
   * @param alpha - Alpha value.
   * @returns - The current instance of UiText.
   */
  setTextAlpha(alpha: number) {
    mod.SetUITextAlpha(this.widget, alpha);
    return this;
  }

  /**
   * Sets the anchor of the widget.
   * @param anchor - Anchor mod.UIWidget
   * @returns - The current instance of UiText.
   */
  setTextAnchor(anchor: mod.UIAnchor) {
    mod.SetUITextAnchor(this.widget, anchor);
    return this;
  }
}
