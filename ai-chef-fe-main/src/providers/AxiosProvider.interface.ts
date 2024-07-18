import { ApiErrorUseCase } from "../enum/error.enum";

export type ApiError = {
  id?: string;
  errorLabel: string;
  errorTitle?: string;
  useCase: ApiErrorUseCase;
  statusCode: number;
};
