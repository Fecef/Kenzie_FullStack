class ErrorHTTP {
  statusCode: number
  message: string

  constructor(message: string, statusCode = 400){
    this.message = message
    this.statusCode = statusCode
  }
}

export default ErrorHTTP