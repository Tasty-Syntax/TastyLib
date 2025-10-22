interface UiParams {
  name: string;
  type: string;
  position: mod.Vector;
  size: mod.Vector;
  anchor: mod.UIAnchor;
  parent: mod.UIWidget;
  visible: boolean;
  textLabel: mod.Message;
  textColor: mod.Vector;
  textAlpha: number;
  textSize: number;
  textAnchor: mod.UIAnchor;
  padding: number;
  bgColor: mod.Vector;
  bgAlpha: number;
  bgFill: mod.UIBgFill;
  imageType: mod.UIImageType;
  imageColor: mod.Vector;
  imageAlpha: number;
  receiver: mod.Player | mod.Team;
  buttonEnabled: boolean;
  buttonColorBase: mod.Vector;
  buttonAlphaBase: number;
  buttonColorDisabled: mod.Vector;
  buttonAlphaDisabled: number;
  buttonColorPressed: mod.Vector;
  buttonAlphaPressed: number;
  buttonColorHover: mod.Vector;
  buttonAlphaHover: number;
  buttonColorFocused: mod.Vector;
  buttonAlphaFocused: number;
}

type BaseWidget = Pick<UiParams, "name"> & Partial<Pick<UiParams, "position" | 'size' | 'anchor' | 'parent' | 'visible' | 'padding' | 'bgColor' | 'bgAlpha' | 'bgFill' | 'receiver'>>

type Container = BaseWidget & {
  type: "container";
  children?: UiWidgetParams[]
}

type Text = BaseWidget & {
  type: 'text',
} & Partial<Pick<UiParams, 'textLabel' | 'textSize' | 'textColor' | 'textAlpha' | 'textAnchor'>>

type Image = BaseWidget & {
  type: "image";
} & Partial<Pick<UiParams, 'imageType' | 'imageColor' | 'imageAlpha'>>

type Button = BaseWidget & {
  type: "button";
} & Partial<Pick<UiParams, "buttonEnabled" | "buttonColorBase" | "buttonAlphaBase" | "buttonColorDisabled" | "buttonAlphaDisabled" | "buttonColorPressed" | "buttonAlphaPressed" | "buttonColorHover" | "buttonAlphaHover" | "buttonAlphaFocused" | "buttonColorFocused">>

export type UiWidgetParams = Container | Text | Image | Button;

export function parseUi(params: UiWidgetParams) {
  if (params.type === 'container') return createContainer(params);
  if (params.type === 'text') return createText(params);
  if (params.type === 'image') return createImage(params);
  return createButton(params);
}

function setDefaultParams<T extends UiWidgetParams>(params: UiWidgetParams): Required<Omit<BaseWidget & T, 'receiver'>> {
  params.position ??= mod.CreateVector(0, 0, 0);
  params.size ??= mod.CreateVector(100, 100, 0);
  params.anchor ??= mod.UIAnchor.Center;
  params.parent ??= mod.GetUIRoot();
  params.visible ??= true;
  params.padding ??= params.type === 'container' ? 0 : 8;
  params.bgColor ??= mod.CreateVector(0.25, 0.25, 0.25);
  params.bgAlpha ??= 0.5;
  params.bgFill ??= mod.UIBgFill.Solid;

  return params as Required<Omit<BaseWidget & T, 'receiver'>>;
}

function createContainer(params: Container) {
  const defaultParams = setDefaultParams(params);

  if (params.receiver) {
    mod.AddUIContainer(
      defaultParams.name,
      defaultParams.position,
      defaultParams.size,
      defaultParams.anchor,
      defaultParams.parent,
      defaultParams.visible,
      defaultParams.padding,
      defaultParams.bgColor,
      defaultParams.bgAlpha,
      defaultParams.bgFill,
      params.receiver
    );
  } else {
    mod.AddUIContainer(
      defaultParams.name,
      defaultParams.position,
      defaultParams.size,
      defaultParams.anchor,
      defaultParams.parent,
      defaultParams.visible,
      defaultParams.padding,
      defaultParams.bgColor,
      defaultParams.bgAlpha,
      defaultParams.bgFill,
    );
  }

  const widget = mod.FindUIWidgetWithName(params.name) as mod.UIWidget;

  if (params.children) {
    params.children?.forEach(c => {
      parseUi({ ...c, parent: widget });
    });
  }

  return widget;
}

function setDefaultTextParams(params: UiWidgetParams): Required<Omit<Text, 'receiver'>> {
  const defaultedParams = setDefaultParams<Text>(params);

  defaultedParams.textLabel ??= mod.Message('');
  defaultedParams.textSize ??= 0;
  defaultedParams.textColor ??= mod.CreateVector(1, 1, 0);
  defaultedParams.textAlpha ??= 1;
  defaultedParams.textAnchor ??= mod.UIAnchor.Center;

  return defaultedParams;
}

function createText(params: UiWidgetParams) {
  const defaultedParams = setDefaultTextParams(params);

  if (params.receiver) {
    mod.AddUIText(
      defaultedParams.name,
      defaultedParams.position,
      defaultedParams.size,
      defaultedParams.anchor,
      defaultedParams.parent,
      defaultedParams.visible,
      defaultedParams.padding,
      defaultedParams.bgColor,
      defaultedParams.bgAlpha,
      defaultedParams.bgFill,
      defaultedParams.textLabel,
      defaultedParams.textSize,
      defaultedParams.textColor,
      defaultedParams.textAlpha,
      defaultedParams.textAnchor,
      params.receiver
    );
  } else {
    mod.AddUIText(
      defaultedParams.name,
      defaultedParams.position,
      defaultedParams.size,
      defaultedParams.anchor,
      defaultedParams.parent,
      defaultedParams.visible,
      defaultedParams.padding,
      defaultedParams.bgColor,
      defaultedParams.bgAlpha,
      defaultedParams.bgFill,
      defaultedParams.textLabel,
      defaultedParams.textSize,
      defaultedParams.textColor,
      defaultedParams.textAlpha,
      defaultedParams.textAnchor,
    );
  }

  return mod.FindUIWidgetWithName(params.name) as mod.UIWidget;
}

function setDefaultImageParams(params: UiWidgetParams): Required<Omit<Image, 'receiver'>> {
  const defaultedParams = setDefaultParams<Image>(params)

  defaultedParams.imageType ??= mod.UIImageType.None;
  defaultedParams.imageColor ??= mod.CreateVector(1, 1, 1);
  defaultedParams.imageAlpha ??= 1;

  return defaultedParams;
}

function createImage(params: UiWidgetParams) {
  const defaultedParams = setDefaultImageParams(params);

  if (params.receiver) {
    mod.AddUIImage(
      defaultedParams.name,
      defaultedParams.position,
      defaultedParams.size,
      defaultedParams.anchor,
      defaultedParams.parent,
      defaultedParams.visible,
      defaultedParams.padding,
      defaultedParams.bgColor,
      defaultedParams.bgAlpha,
      defaultedParams.bgFill,
      defaultedParams.imageType,
      defaultedParams.imageColor,
      defaultedParams.imageAlpha,
      params.receiver
    );
  } else {
    mod.AddUIImage(
      defaultedParams.name,
      defaultedParams.position,
      defaultedParams.size,
      defaultedParams.anchor,
      defaultedParams.parent,
      defaultedParams.visible,
      defaultedParams.padding,
      defaultedParams.bgColor,
      defaultedParams.bgAlpha,
      defaultedParams.bgFill,
      defaultedParams.imageType,
      defaultedParams.imageColor,
      defaultedParams.imageAlpha,
    );
  }

  return mod.FindUIWidgetWithName(params.name) as mod.UIWidget;
}

function setDefaultButtonParams(params: UiWidgetParams): Required<Omit<Button, 'receiver'>> {
  const defaultedParams = setDefaultParams<Button>(params)

  defaultedParams.buttonEnabled ??= true;
  defaultedParams.buttonColorBase ??= mod.CreateVector(0.7, 0.7, 0.7);
  defaultedParams.buttonAlphaBase ??= 1;
  defaultedParams.buttonColorDisabled ??= mod.CreateVector(0.2, 0.2, 0.2);
  defaultedParams.buttonAlphaDisabled ??= 0.5;
  defaultedParams.buttonColorPressed ??= mod.CreateVector(0.25, 0.25, 0.25);
  defaultedParams.buttonAlphaPressed ??= 1;
  defaultedParams.buttonColorHover ??= mod.CreateVector(1, 1, 1);
  defaultedParams.buttonAlphaHover ??= 1;
  defaultedParams.buttonColorFocused ??= mod.CreateVector(1, 1, 1);
  defaultedParams.buttonAlphaFocused ??= 1;

  return defaultedParams;
}

function createButton(params: UiWidgetParams) {
  const defaultedParams = setDefaultButtonParams(params);

  if (params.receiver) {
    mod.AddUIButton(
      defaultedParams.name,
      defaultedParams.position,
      defaultedParams.size,
      defaultedParams.anchor,
      defaultedParams.parent,
      defaultedParams.visible,
      defaultedParams.padding,
      defaultedParams.bgColor,
      defaultedParams.bgAlpha,
      defaultedParams.bgFill,
      defaultedParams.buttonEnabled,
      defaultedParams.buttonColorBase,
      defaultedParams.buttonAlphaBase,
      defaultedParams.buttonColorDisabled,
      defaultedParams.buttonAlphaDisabled,
      defaultedParams.buttonColorPressed,
      defaultedParams.buttonAlphaPressed,
      defaultedParams.buttonColorHover,
      defaultedParams.buttonAlphaHover,
      defaultedParams.buttonColorFocused,
      defaultedParams.buttonAlphaFocused,
      params.receiver
    );
  } else {
    mod.AddUIButton(
      defaultedParams.name,
      defaultedParams.position,
      defaultedParams.size,
      defaultedParams.anchor,
      defaultedParams.parent,
      defaultedParams.visible,
      defaultedParams.padding,
      defaultedParams.bgColor,
      defaultedParams.bgAlpha,
      defaultedParams.bgFill,
      defaultedParams.buttonEnabled,
      defaultedParams.buttonColorBase,
      defaultedParams.buttonAlphaBase,
      defaultedParams.buttonColorDisabled,
      defaultedParams.buttonAlphaDisabled,
      defaultedParams.buttonColorPressed,
      defaultedParams.buttonAlphaPressed,
      defaultedParams.buttonColorHover,
      defaultedParams.buttonAlphaHover,
      defaultedParams.buttonColorFocused,
      defaultedParams.buttonAlphaFocused,
    );
  }

  return mod.FindUIWidgetWithName(params.name) as mod.UIWidget;
}
