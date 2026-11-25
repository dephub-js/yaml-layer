import type { BuilderConfig } from '@dephub/layer';

import { path } from '@dephub/path';
import readFile from '@dephub/read';
import { slug } from '@dephub/slug';

import type { YamlEntry } from '#/core/types.ts';

import { parseYaml } from '#/utils/parse.ts';

const defaultName = 'yaml-layer';

export const yamlBuilderConfig: BuilderConfig<YamlEntry> = {
  defaultOutDir: `.${defaultName}`,
  name: __PKG_NAME__.split('/')[1] ?? defaultName,
  outExtension: '.json',
  parser: parseYaml,
  pattern: '**/*.+(yaml|yml)',
  resolver: async ({ entry }) => {
    const _slug = slug(path.parse(entry).name);
    const _raw = await readFile(entry);

    return { _filePath: entry, _raw, _slug };
  },
  version: __PKG_VERSION__,
};
