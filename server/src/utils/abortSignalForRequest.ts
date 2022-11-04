import { Request } from "express";

export function getAbortSignalForRequest(req: Request) {
  const abortController = new AbortController();
  req.on("close", () => abortController.abort());
  return abortController.signal;
}
