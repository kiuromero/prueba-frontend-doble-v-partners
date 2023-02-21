export class Response<T> {

  incomplete_results: boolean;
  total_cout: number; 
  items: T[];

  public constructor(_response?: any) {
    this.incomplete_results = _response?.incomplete_results;
    this.total_cout = _response?.total_cout;
    this.items = _response?.items;   
  }

};
