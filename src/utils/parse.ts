import { readFile } from '@dephub/read';
import { parse } from 'yaml';

export async function parseYaml(path: string): Promise<any> {
  const _raw = await readFile(path);

  return parse(_raw);
}
