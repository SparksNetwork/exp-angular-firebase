export class Command {}

export class KeyValuesCommand extends Command {
  key: string;
  values: Object;
}

export class KeyCommand extends Command {
  key: string;
}

export class ValuesCommand extends Command {
  values: Object;
}

export interface BaseCollection extends Command {
  firebasePath: string;
  apiRoot: string;
}
