import { UiWidget } from "./_ui_widget";

/**
 * Represents a UI button widget.
 * @extends _UiWidget
 * @author TastySyntax
 */
export class UiButton extends UiWidget {
  /**
   * Constructs a new UiButton instance.
   * @param name - The name of the button.
   */
  private constructor(name: string, searchRoot?: mod.UIWidget) {
    super(name, searchRoot);
  }

  /**
   * Constructs a new UiButton instance linked to a already existing widget.
   * @param name - The name of the button.
   * @param searchRoot - Root mod.UIWidget to start search from
   */
  static get(name: string, searchRoot?: mod.UIWidget) {
    return new UiButton(name, searchRoot);
  }

  /**
   * Constructs a new UiButton instance.
   * @param name - The name of the button.
   * @param position - The position of the button.
   * @param size - The size of the button.
   * @param anchor - The anchor point of the button.
   */
  static new(name: string, position: mod.Vector, size: mod.Vector, anchor: mod.UIAnchor, recipient?: mod.Player | mod.Team) {
    if (recipient) {
      mod.AddUIButton(name, position, size, anchor, recipient);
    } else {
      mod.AddUIButton(name, position, size, anchor);
    }

    return new UiButton(name);
  }

  /**
   * Sets the alpha value of the button when not hovered or focused.
   * @param value - The alpha value of the button.
   * @returns - The current instance of UiButton.
   */
  setAlphaBase(value: number) {
    mod.SetUIButtonAlphaBase(this.widget, value);
    return this;
  }

  /**
   * Sets the alpha value of the button when disabled.
   * @param value - The alpha value of the button.
   * @returns - The current instance of UiButton.
   */
  setAlphaDisabled(value: number) {
    mod.SetUIButtonAlphaDisabled(this.widget, value);
    return this;
  }

  /**
   * Sets the alpha value of the button when focused.
   * @param value - The alpha value of the button.
   * @returns - The current instance of UiButton.
   */
  setAlphaFocused(value: number) {
    mod.SetUIButtonAlphaFocused(this.widget, value);
    return this;
  }

  /**
   * Sets the alpha value of the button when hovered.
   * @param value - The alpha value of the button.
   * @returns - The current instance of UiButton.
   */
  setAlphaHover(value: number) {
    mod.SetUIButtonAlphaHover(this.widget, value);
    return this;
  }

  /**
   * Sets the alpha value of the button when pressed.
   * @param value - The alpha value of the button.
   * @returns - The current instance of UiButton.
   */
  setAlphaPressed(value: number) {
    mod.SetUIButtonAlphaPressed(this.widget, value);
    return this;
  }

  /**
   * Sets the color of the button when not hovered or focused.
   * @param color - The color of the button.
   * @returns - The current instance of UiButton.
   */
  setColorBase(color: mod.Vector) {
    mod.SetUIButtonColorBase(this.widget, color);
    return this;
  }

  /**
   * Sets the color of the button when disabled.
   * @param color - The color of the button.
   * @returns - The current instance of UiButton.
   */
  setColorDisabled(color: mod.Vector) {
    mod.SetUIButtonColorDisabled(this.widget, color);
    return this;
  }

  /**
   * Sets the color of the button when focused.
   * @param color - The color of the button.
   * @returns - The current instance of UiButton.
   */
  setColorFocused(color: mod.Vector) {
    mod.SetUIButtonColorFocused(this.widget, color);
    return this;
  }

  /**
   * Sets the color of the button when hovered.
   * @param color - The color of the button.
   * @returns - The current instance of UiButton.
   */
  setColorHover(color: mod.Vector) {
    mod.SetUIButtonColorHover(this.widget, color)
    return this;
  }

  /**
   * Sets the color of the button when pressed.
   * @param color - The color of the button.
   * @returns - The current instance of UiButton.
   */
  setColorPressed(color: mod.Vector) {
    mod.SetUIButtonColorPressed(this.widget, color)
    return this;
  }

  /**
   * Sets the enabled state of the button.
   * @param enabled - The enabled state of the button.
   * @returns - The current instance of UiButton.
   */
  setEnabled(enabled: boolean) {
    mod.SetUIButtonEnabled(this.widget, enabled);
    return this;
  }
}
