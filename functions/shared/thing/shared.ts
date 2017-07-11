import {
  BaseCollection,
  KeyValuesCommand,
  ValuesCommand,
  KeyCommand,
} from '../../lib/firebase-collections/shared'

export const ThingCollection: BaseCollection = {
  firebasePath: '/thing',
  apiRoot: '/thing',
}

export interface Thing {
  name: string;
}

export interface ThingRecord extends Thing { $key: string; }

export class ThingCmdCreate extends ValuesCommand {
  values: Thing;
}

export class ThingCmdReplace extends KeyValuesCommand {
  values: Thing;
}

export class ThingCmdUpdate extends KeyValuesCommand {
  values: Thing;
}

export class ThingCmdDelete extends KeyCommand {}
