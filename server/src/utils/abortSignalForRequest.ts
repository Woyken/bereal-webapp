import { Request } from "express";

export function getAbortSignalForRequest(req: Request) {
  const abortController = new AbortController();
  req.once("close", () => abortController.abort());
  return abortController.signal;
}
