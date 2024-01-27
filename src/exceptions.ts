export default class HttpRequestError extends Error {
  constructor(
    readonly status: number,
    readonly message: string
  ) {
    super(message);

    this.name = "CustomHttpError";
  }
}

class GetFirstErrorMessage {
  execute(errors: any): string {
    if (errors[0].constraints) {
      return this.getErrorMessage(errors[0].constraints);
    }
    if (errors[0].children.length) {
      return this.getErrorMessage(errors[0].children[0].constraints);
    }
    return "";
  }

  getErrorMessage(object) {
    const firstKey = Object.keys(object)[0];
    return object[firstKey];
  }
}
export { HttpRequestError, GetFirstErrorMessage };
