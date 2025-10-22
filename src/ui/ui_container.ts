import { UiWidget } from "./_ui_widget";

/**
 * Represents a UI container widget.
 * @extends _UiWidget
 * @author TastySyntax
 */
export class UiContainer extends UiWidget {
  /**
   * Constructs a new UiContainer instance.
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
   * Constructs a new UiContainer instance linked to a already existing widget.
   * @param name - The name of the button.
   * @param searchRoot - Root mod.UIWidget to start search from
   */
  static get(name: string, searchRoot?: mod.UIWidget) {
    return new UiContainer(name, searchRoot);
  }

  /**
   * Creates a new UiContainer widget and adds it to the UI.
   * @param name - The name of the container widget.
   * @param position - The position vector for the container.
   * @param size - The size of the conatainer.
   * @param anchor - The anchor position for the container.
   * @param recipient - Optional recipient (player or team).
   * @returns A new instance of UiContainer representing the created widget.
   */
  static new(
    name: string,
    position: mod.Vector,
    size: mod.Vector,
    anchor: mod.UIAnchor,
    recipient?: mod.Player | mod.Team
  ) {
    if (recipient) {
      mod.AddUIContainer(name, position, size, anchor, recipient);
    } else {
      mod.AddUIContainer(name, position, size, anchor);
    }

    return new UiContainer(name);
  }
}
