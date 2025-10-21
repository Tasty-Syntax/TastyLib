/**
 * Represents a UI widget.
 * @author TastySyntax
 */
export abstract class UiWidget {
  private _name: string;

  /**
   * Constructs a new UiWidget instance.
   * @param name - The name of the widget.
   * @param position - The position of the widget.
   * @param size - The size of the widget.
   * @param anchor - The anchor point of the widget.
   */
  constructor(name: string) {
    this._name = name;
  }

  /**
   * Gets the name of the widget.
   * @returns The name of the widget.
   */
  get name(): string {
    return this._name;
  }

  /**
   * Gets the position of the widget.
   * @returns The position of the widget.
   */
  get position(): mod.Vector {
    return mod.GetUIWidgetPosition(this.widget);
  }

  /**
   * Gets the size of the widget.returns
   * @returns The size of the widget.
   */
  get size(): mod.Vector {
    return mod.GetUIWidgetPosition(this.widget);
  }

  /**
   * Gets the anchor point of the widget.
   * @returns The anchor point of the widget.
   */
  get anchor(): mod.UIAnchor {
    return mod.GetUIWidgetAnchor(this.widget);
  }

  /**
   * Gets the widget object.
   * @returns The widget object.
   */
  get widget(): mod.Any {
    return mod.FindUIWidgetWithName(this.name);
  }

  /**
   * Sets the anchor point of the widget.
   * @param anchor - The new anchor point of the widget.
   * @returns The current instance of UiWidget.
   */
  setWidgetAnchor(anchor: mod.UIAnchor): UiWidget {
    mod.SetUIWidgetAnchor(this.widget, anchor);
    return this;
  }

  /**
   * Sets the alpha value of the widget.
   * @param alpha - The new alpha value of the widget.
   * @returns The current instance of UiWidget.
   */
  setWidgetBgAlpha(alpha: number): UiWidget {
    mod.SetUIWidgetBgAlpha(this.widget, alpha);
    return this;
  }

  /**
   * Sets the background color of the widget.
   * @param color - The new background color of the widget.
   * @returns The current instance of UiWidget.
   */
  setWidgetBgColor(color: mod.Vector): UiWidget {
    mod.SetUIWidgetBgColor(this.widget, color);
    return this;
  }

  /**
   * Sets the background fill of the widget.
   * @param fill - The new background fill of the widget.
   * @returns The current instance of UiWidget.
   */
  setWidgetBgFill(fill: mod.UIBgFill): UiWidget {
    mod.SetUIWidgetBgFill(this.widget, fill);
    return this;
  }

  /**
   * Sets the depth of the widget.
   * @param depth - The new depth of the widget.
   * @returns The current instance of UiWidget.
   */
  setWidgetDepth(depth: mod.UIDepth): UiWidget {
    mod.SetUIWidgetDepth(this.widget, depth);
    return this;
  }

  /**
   * Sets the name of the widget.
   * @param name - The new name of the widget.
   * @returns The current instance of UiWidget.
   */
  setWidgetName(name: string): UiWidget {
    mod.SetUIWidgetName(this.widget, name);
    this._name = name;
    return this;
  }

  /**
   * Sets the padding of the widget.
   * @param padding - The new padding of the widget.
   * @returns The current instance of UiWidget.
   */
  setWidgetPadding(padding: number): UiWidget {
    mod.SetUIWidgetPadding(this.widget, padding);
    return this;
  }

  /**
   * Sets the parent of the widget.
   * @param parent - The new parent of the widget.
   * @returns The current instance of UiWidget.
   */
  setWidgetParent(parent: mod.UIWidget): UiWidget {
    mod.SetUIWidgetParent(this.widget, parent);
    return this;
  }

  /**
   * Sets the position of the widget.
   * @param position - The new position of the widget.
   * @returns The current instance of UiWidget.
   */
  setWidgetPosition(position: mod.Vector): UiWidget {
    mod.SetUIWidgetPosition(this.widget, position);
    return this;
  }

  /**
   * Sets the size of the widget.
   * @param size - The new size of the widget.
   * @returns The current instance of UiWidget.
   */
  setWidgetSize(size: mod.Vector): UiWidget {
    mod.SetUIWidgetSize(this.widget, size);
    return this;
  }

  /**
   * Sets the visibility of the widget.
   * @param visible - The new visibility of the widget.
   * @returns The current instance of UiWidget.
   */
  setWidgetVisible(visible: boolean): UiWidget {
    mod.SetUIWidgetVisible(this.widget, visible);
    return this;
  }


  /**
   * Execute a function after a certain amount of seconds
   * @param duration - Duration in seconds
   * @param callback - Function that gets called after set duration
   */
  async setTimeout(duration: number, callback: () => void) {
    await mod.Wait(duration);
    callback();
  }

  /**
   * Deletes the widget.
   */
  delete(): void {
    mod.DeleteUIWidget(this.widget);
  }

  /**
   * Deletes all widgets.
   */
  static removeAll() {
    mod.DeleteAllUIWidgets();
  }
}
