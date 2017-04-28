
export class Product {
  id: string;
  name: string;
  builds: {
  id: string;
  version: string;
  run_count: number;
  pass_rate: number;
}[]
}
