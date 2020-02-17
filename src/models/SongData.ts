/**
 * This file was automatically generated by json-schema-to-typescript. DO NOT MODIFY IT BY HAND.
 * Instead, modify `songs.schema.json` and run `yarn validate` to regenerate the SongData types
 * here as well as checking that the data files match.
 */

/**
 * Describes the shape of data that any individual json file under `src/songs` will conform to
 */

export interface GameData {
  /**
   * Describes unique configuration options for this game
   */
  meta: {
    /**
     * List of all play styles available
     */
    styles: string[];
    /**
     * List of all difficultiy classes available
     */
    difficulties: {
      /**
       * A unique string key to identify this difficulty class
       */
      key: string;
      /**
       * A css color to use to visually define this difficulty class
       */
      color: string;
    }[];
    /**
     * List of all special flags one might filter songs by
     */
    flags: string[];
    lvlMax: number;
  };
  /**
   * Defines the default configuration for this game
   */
  defaults: {
    style: string;
    difficulties: string[];
    flags: string[];
    lowerLvlBound: number;
    upperLvlBound: number;
  };
  /**
   * Set of localized values for display of any styles, difficulties, or flags
   */
  i18n: {
    [k: string]: I18NDict;
  };
  songs: Song[];
}
/**
 * Dictionary of localized strings
 */
export interface I18NDict {
  [k: string]:
    | string
    | {
        [k: string]: string;
      };
}
export interface Song {
  flags?: string[];
  name: string;
  artist: string;
  genre?: string;
  artist_translation: string;
  bpm: string;
  name_translation: string;
  search_hint?: string;
  charts: Chart[];
  jacket: string;
  folder?: string;
}
export interface Chart {
  flags?: string[];
  /**
   * e.g. single/double
   */
  style: string;
  /**
   * e.g. expert/challenge
   */
  diffClass: string;
  lvl: number;
  step?: number;
  shock?: number;
  freeze?: number;
}
