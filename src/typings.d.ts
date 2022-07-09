declare module 'host' {
    export interface Host {
      protocol?: string;
      hostname?: string;
      pathname?: string;
    }
    export function parse(url: string, queryString?: string): Host;
  }

  declare var libraryName: any;

  interface JQuery {
    tooltip(options?: any): any;
    scrollspy(options?: any): any;
    // pathname(options?: any): any;
    // hostname(options?: any): any;
  }
