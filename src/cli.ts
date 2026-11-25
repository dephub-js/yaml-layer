#!/usr/bin/env node
import { useCli } from '@dephub/layer';
import { writeLayerEntry } from '@dephub/layer-entry';

import { yamlBuilderConfig } from '#/utils/config.ts';

await useCli({
  defaultConfigPath: 'yaml-layer.config.ts',
  description: __PKG_DESCRIPTION__,
  tasks: [writeLayerEntry],
  ...yamlBuilderConfig,
});
