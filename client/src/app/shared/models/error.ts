export interface IError {
  message: string;
  statusCode: string;
  details?: string;
  errors?: [];
}
