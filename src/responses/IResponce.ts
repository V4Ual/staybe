interface IResponce{
    unauthorizedResponse({res,message}:any):Promise<any>
    badRequestResponse({res,err}:any):Promise<any>
    conflictErrorResponse({res,message}:any):Promise<any>
    internalServerErrorResponse({res, err}:any):Promise<any>
    successResponse({res,message,data}:any):Promise<any>

    success(message: any, response_data: any): Promise<any>
    fail(message: any, response_data: any): Promise<any>
}

export {IResponce}