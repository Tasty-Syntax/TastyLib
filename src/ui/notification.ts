export function displayStaticNotification(message: string): void;
export function displayStaticNotification(message: mod.Message): void;
export function displayStaticNotification(
  message: string | mod.Message,
  recipient?: mod.Player
): void;
export function displayStaticNotification(
  message: string | mod.Message,
  recipient?: mod.Team
): void;
export function displayStaticNotification(
  message: string | mod.Message,
  recipient?: any
): void {
  if (typeof message === "string") {
    message = mod.Message(message);
  }
  if (recipient) {
    // Show notification for specific entity
    recipient == mod.Types.Player
      ? mod.DisplayNotificationMessage(message, recipient as mod.Player)
      : mod.DisplayNotificationMessage(message, recipient as mod.Team);
  } else {
    // Show notification for all
    mod.DisplayNotificationMessage(message);
  }
}

export function displayWorldLogNotification(message: mod.Message): void;
export function displayWorldLogNotification(
  message: mod.Message,
  recipient?: mod.Player
): void;
export function displayWorldLogNotification(
  message: mod.Message,
  recipient?: mod.Team
): void;
export function displayWorldLogNotification(
  message: mod.Message,
  recipient?: any
): void {
  if (recipient) {
    recipient == mod.Types.Player
      ? mod.DisplayHighlightedWorldLogMessage(
        message,
        recipient as mod.Player
      )
      : mod.DisplayHighlightedWorldLogMessage(message, recipient as mod.Team);
  } else {
    mod.DisplayHighlightedWorldLogMessage(message);
  }
}
