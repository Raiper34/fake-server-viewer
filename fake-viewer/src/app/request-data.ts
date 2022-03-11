export interface RequestData {
  body: any;
  headers: any;
  method: string;
  url: string;
  accepts: string[];
  hostname: string;
  ip: string;
  query: any;
  protocol: string;
}
