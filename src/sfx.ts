/**
 * sfx source creation and modification utility class
 * @author TastySyntax
 */
export class Sfx {

  /**
  * Plays a sound for the whole server
  * @param soundEffect Soundeffect enum value
  * @param volume Volume of played sound
  * @param recipient Player to play sound to
  */
  static playSound(soundEffect: mod.RuntimeSpawn_Common, volume: number): void;

  /**
  * Plays a sound for a player
  * @param soundEffect Soundeffect enum value
  * @param volume Volume of played sound
  * @param recipient Player to play sound to
  */
  static playSound(
    soundEffect: mod.RuntimeSpawn_Common,
    volume: number,
    recipient: mod.Player
  ): void;

  /**
  * Plays a sound for a team
  * @param soundEffect Soundeffect enum value
  * @param volume Volume of played sound
  * @param recipient Player to play sound to
  */
  static playSound(
    soundEffect: mod.RuntimeSpawn_Common,
    volume: number,
    recipient: mod.Team
  ): void;

  static playSound(
    soundEffect: mod.RuntimeSpawn_Common,
    volume: number = 100,
    recipient?: mod.Player | mod.Team
  ): void {
    const sound = this.spawnSoundObject(soundEffect);

    mod.EnableSFX(sound, true);

    if (!recipient) {
      mod.PlaySound(sound, volume);
      return;
    }

    if (mod.IsType(recipient, mod.Types.Player)) {
      mod.PlaySound(sound, volume, recipient as mod.Player);
    } else {
      mod.PlaySound(sound, volume, recipient as mod.Team);
    }
  }

  /**
  * Creates a soundobject that can be used for sound playing
  * @param soundEffect Soundeffect enum value
  * @param position Object position
  * @param rotation Object rotation 
  * @param scale Object scale 
  */
  private static spawnSoundObject(
    effect: mod.RuntimeSpawn_Common,
    position = mod.CreateVector(0, 0, 0),
    rotation = mod.CreateVector(0, 0, 0),
    scale = mod.CreateVector(0, 0, 0)
  ): mod.SFX {
    return mod.SpawnObject(
      effect,
      position,
      rotation,
      scale
    )
  }
}
