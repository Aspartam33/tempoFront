export interface IPaymentModel{
    Amount:number;
    CardHolder:string;
    CardHolderId:string;
    CardNumber:string;
    ExpirationDate:string;
    CVC:string;
    Email:string;
    Address:string;
    City:string;
    State:string;
    Country:string;
    ZipCode:string;
    description:string;
    UserAgent:string;
    Cookie:string;
    PublicKeyId:string;
    KeyId:string;
    type_id:string;
    numb_id:string;
    month_card:string;
    year_card:string;
    ip:string;

}

export interface Imonth{
    text:string,
    value:string,
}


export interface Iyear{
    text:string,
    value:string,
}