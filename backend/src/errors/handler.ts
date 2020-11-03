import { ErrorRequestHandler, response } from "express";

const errorHandler: ErrorRequestHandler = (error, request,response,next) => {
    console.error(error);
    return response.status(500).json({message:"internal error"})
}
export default errorHandler;