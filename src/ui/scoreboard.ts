type ScoreboardColLabel = string | mod.Message;

/**
 * scoreboard creation and modification utility class
 * @author TastySyntax
 */
export class Scoreboard {
  constructor() { }

  /**
  * Set header lables for the Scoreboard
  * @param text1 Label of the first team
  * @param text2 Label of the second team
  * @returns CustomScoreboard
  */
  setHeaders(text1: string | mod.Message): Scoreboard;
  setHeaders(text1: string | mod.Message, text2?: string | mod.Message): Scoreboard {
    text1 = typeof text1 === 'string' ? mod.Message(text1) : text1;

    if (!text2) {
      mod.SetScoreboardHeader(text1);
      return this;
    }

    text2 = typeof text2 === 'string' ? mod.Message(text2) : text2;
    mod.SetScoreboardHeader(text1, text2);

    return this;
  }

  /**
   * Set the type of the scoreboard that should be used
   * @returns CustomScoreboard
   */
  setType(type: mod.ScoreboardType) {
    mod.SetScoreboardType(type);
    return this;
  }

  /**
  * Set labels for different colums in the scoreboard
  * @param col1 Label of the first column
  * @param col2 Label of the second column
  * @param col3 Label of the third column
  * @param col4 Label of the forth column
  * @param col5 Label of the fifth column
  * @returns CustomScoreboard
  */
  setColumnLabels(col1: ScoreboardColLabel): Scoreboard;
  setColumnLabels(col1: ScoreboardColLabel, col2: ScoreboardColLabel): Scoreboard;
  setColumnLabels(col1: ScoreboardColLabel, col2: ScoreboardColLabel, col3: ScoreboardColLabel): Scoreboard;
  setColumnLabels(col1: ScoreboardColLabel, col2: ScoreboardColLabel, col3: ScoreboardColLabel, col4: ScoreboardColLabel): Scoreboard;
  setColumnLabels(col1: ScoreboardColLabel, col2: ScoreboardColLabel, col3: ScoreboardColLabel, col4: ScoreboardColLabel, col5: ScoreboardColLabel): Scoreboard;
  setColumnLabels(...cols: ScoreboardColLabel[]): Scoreboard {
    const labels = cols.map(label => {
      if (typeof label === 'string') {
        return mod.Message(label);
      }

      return label;
    });

    switch (labels.length) {
      case 1:
        mod.SetScoreboardColumnNames(labels[0]);
        break;
      case 2:
        mod.SetScoreboardColumnNames(labels[0], labels[1]);
        break;
      case 3:
        mod.SetScoreboardColumnNames(labels[0], labels[1], labels[2]);
        break;
      case 4:
        mod.SetScoreboardColumnNames(labels[0], labels[1], labels[2], labels[3]);
        break;
      case 5:
        mod.SetScoreboardColumnNames(labels[0], labels[1], labels[2], labels[3], labels[4]);
        break;
      default:
        throw new Error('Invalid number of columns. Must be between 1 and 5.');
    }

    return this;
  }

  /**
  * Set width for different colums in the scoreboard
  * @param col1 Label of the first column
  * @param col2 Label of the second column
  * @param col3 Label of the third column
  * @param col4 Label of the forth column
  * @param col5 Label of the fifth column
  * @returns CustomScoreboard
  */
  setColumnWidth(col1: number): Scoreboard;
  setColumnWidth(col1: number, col2: number): Scoreboard;
  setColumnWidth(col1: number, col2: number, col3: number): Scoreboard;
  setColumnWidth(col1: number, col2: number, col3: number, col4: number): Scoreboard;
  setColumnWidth(col1: number, col2: number, col3: number, col4: number, col5: number): Scoreboard;
  setColumnWidth(...cols: number[]): Scoreboard {
    switch (cols.length) {
      case 1:
        mod.SetScoreboardColumnWidths(cols[0]);
        break;
      case 2:
        mod.SetScoreboardColumnWidths(cols[0], cols[1]);
        break;
      case 3:
        mod.SetScoreboardColumnWidths(cols[0], cols[1], cols[2]);
        break;
      case 4:
        mod.SetScoreboardColumnWidths(cols[0], cols[1], cols[2], cols[3]);
        break;
      case 5:
        mod.SetScoreboardColumnWidths(cols[0], cols[1], cols[2], cols[3], cols[4]);
        break;
      default:
        throw new Error('Invalid number of columns. Must be between 1 and 5.');
    }

    return this;
  }

  /**
  * Set column which should be used for sorting 
  * @param column Column ID / number
  * @param reversed Reverse sorting order
  * @returns CustomScoreboard
  */
  setSortingColumn(column: number, reversed = false) {
    mod.SetScoreboardSorting(column, reversed);
    return this;
  }
}
