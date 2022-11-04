import { Request } from "express";

export function getAbortSignalForRequest(req: Request) {
  const abortController = new AbortController();
  req.once("close", () => {
    console.log("request close event received ", req.url);
    abortController.abort();
    console.log("abort() called ", req.url);
  });
  req.once("error", () => {
    console.log("request error event received ", req.url);
  });
  return abortController.signal;
}
