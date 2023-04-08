import { createInjector } from 'typed-inject';

interface Logger {
  info(message: string): void;
}

const logger: Logger = {
  info(message: string) {
    console.log(message);
  }
};

class HttpClient {
  constructor(private log: Logger) {}
  public static inject = ['logger'] as const;
}

class MyService {
  constructor(private http: HttpClient, private log: Logger) {}
  public static inject = ['httpClient', 'logger'] as const;
}

const appInjector = createInjector().provideValue('logger', logger).provideClass('httpClient', HttpClient);

const myService = appInjector.injectClass(MyService);
// Dependencies for MyService validated and injected