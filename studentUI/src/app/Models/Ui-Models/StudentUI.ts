import { address } from "./AddressUI";
import { gender } from "./GenderUI";



export interface Student{
    id:string,
    firstName:string,
    lastName:string,
    doB:string,
    emailid:string,
    mobileNo:number,
    profileImg:string,
    genderid:string,
    gender:gender,
    address:address
}