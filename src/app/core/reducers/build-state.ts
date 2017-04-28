/**
 * Read more about Immutable Records here
 * 1. https://coderwall.com/p/vxk_tg/using-immutable-js-in-typescript
 * 2. http://untangled.io/immutable-js-the-foolproof-guide-to-creating-lists/
 * 3. https://blog.jscrambler.com/immutable-data-immutable-js/
 * 4. https://medium.com/azendoo-team/immutable-record-react-redux-99f389ed676#.91s1g124s
 */

import { Build } from './../../core/models/build';
import { Map, Record, List } from 'immutable';

export interface BuildState extends Map<string, any> {
  buildIds: List<number>;
  buildEntities: Map<number, Build>;
  selectedBuildId: number;
  selectedBuild: Build;
}

export const BuildStateRecord = Record({
  buildIds: List([]),
  buildEntities: Map({}),
  selectedBuildId: null,
  selectedBuild: Map({})
});
