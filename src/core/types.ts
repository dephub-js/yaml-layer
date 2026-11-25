/**
 * Parsed YAML document enriched with file and slug metadata.
 */
export interface YamlEntry {
  /** Additional parsed YAML fields keyed by property name. */
  [x: string]: PropertyKey;
  /** Path to the source YAML file. */
  _filePath: string;
  /** Raw YAML string content read from disk. */
  _raw: string;
  /** URL-safe slug derived from the file path. */
  _slug: string;
}
