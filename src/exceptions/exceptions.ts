export interface HttpExceptionOptions {
    cause?: Error;
    description?: string;
}
export interface DescriptionAndOptions {
    description?: string;
    httpExceptionOptions?: HttpExceptionOptions;
}

export declare class HttpException extends Error {
    private readonly response;
    private readonly status;
    private readonly options?;

    constructor(response: string | Record<string, any>, status: number, options?: HttpExceptionOptions);
}


export class EventNotFoundException extends HttpException {
    constructor(eventId: string) {
      super(
        `Evento com id ${eventId} não encontrado, verifique`,
        HttpStatus.NOT_FOUND,
      );
    }
  }