export interface RequestData {
  body: any;
  headers: { [key: string]: string };
  method: string;
  url: string;
  accepts: string[];
  hostname: string;
  ip: string;
  query: { [key: string]: string };
  protocol: string;
}
