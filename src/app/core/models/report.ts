export class Report {
  id: string;
  name: string;
  total: number;
  passed: number;
  pass_rate: number;
  test_cases: {id: string; name: string; result: string}[]

}
