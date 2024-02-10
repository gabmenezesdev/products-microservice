import { Request } from "express";

export interface IRequestWithUser extends Request {
  user: {
    companyId: any;
    id: string;
  };
}
