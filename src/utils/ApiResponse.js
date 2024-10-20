export class ApiResponseCreate {
  constructor(statuscode, payload, message) {
    this.statuscode = statuscode;
    this.payload = payload;
    this.message = message;
    this.success = statuscode < 400;
  }
}
