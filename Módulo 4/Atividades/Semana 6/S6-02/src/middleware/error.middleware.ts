import { Request, Response, NextFunction } from "express"

export default function(error: any, req: Request, res:Response, _: NextFunction){
  if(error instanceof Error){
    return res.status(400).json({
      message: error.message
    })
  }

  return res.status(500).json({
    message: "Internal server error."
  })
}