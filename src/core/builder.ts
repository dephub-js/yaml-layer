import { type Builder, useBuilder } from '@dephub/layer';

import { yamlBuilderConfig } from '#/utils/config.ts';

import type { YamlEntry } from './types.ts';

/**
 * Builder function configured to process YAML files.
 *
 * @param layerConfig Optional partial Layer configuration overrides.
 * @returns A promise that resolves when the build completes.
 * @throws If a non-`Error` value is thrown by the parser, a schema, a transformer, or a task.
 * @example
 * ```ts
 * import { builder } from '@dephub/yaml-layer';
 * import { s } from '@dephub/schema';
 *
 * await builder({
 *   contentDir: './content/services',
 *   docType: 'Service',
 *   exclude: ['temp'],
 *   outDir: './dist/services',
 *   schemas: {
 *     'tech-support': s.object({
 *       name: s.string(),
 *       pages: s.number(),
 *     }),
 *     'web-development': s.object({
 *       title: s.string(),
 *     }),
 *   },
 *   transformers: {
 *     'tech-support': (data) =>
 *       // `data` is fully typed as `{ name: string, pages: number }`
 *       ({ ...data, processed: true }),
 *     'web-development': (data) =>
 *       // `data` is fully typed as `{ title: string }`
 *       ({ ...data, processed: true }),
 *   },
 * });
 * ```
 */
export const builder: Builder<YamlEntry> = await useBuilder(yamlBuilderConfig);
