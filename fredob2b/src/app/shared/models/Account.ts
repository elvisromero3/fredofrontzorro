
  
  export interface AccountDto {
    responseCode: number;
    responseMenssage: string;
    fullName?:string;
    email?:string;
    userName?:string;
    dateCreated?:string;
    token?:string;
    roles?:string[];
  }