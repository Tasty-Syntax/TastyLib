/**
 * Player utility class
 * @author TastySyntax
 */
export class Team {
  constructor(private _team: mod.Team) { }

  /**
   * get mod.Team
   */
  get modTeam(): mod.Team {
    return this._team;
  }

  /**
   * get team id
   */
  get id(): number {
    return mod.GetObjId(this._team);
  }

  /**
   * get team name
   */
  get name(): string {
    return String(this._team);
  }
}
