import { Injectable } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";

@Injectable()

export class UpdateEmployeeDto {
    static empList: any;
    empList(arg0: string, empList: any) {
        throw new Error('Method not implemented.');
    }
    @IsObject()
    @ValidateNested()
    @Type(() => UpdateEmployeeDto)
    
    @IsOptional()
    @IsString()
    firstName

    @IsOptional()
    @IsString()
    middleName

    @IsOptional()
    @IsString()
    lastName

    @IsOptional()
    @IsString()
    fullName
    
    @IsOptional()
    @IsString()
    phone
    @IsOptional()
    @IsString()
    mobileOne
    @IsOptional()
    @IsString()
    mobileTwo
    @IsOptional()
    @IsString()
    emergencyMobile
    @IsOptional()
    @IsString()
    officeEmail
    @IsOptional()
    @IsString()
    personalEmail
    @IsOptional()
    @IsString()
    empImage
    @IsOptional()
    @IsString()
    empSignature
    @IsOptional()
    @IsString()
    nationalId
    @Type(() => Number)
    @IsOptional()
    @IsNumber()
    departmentId
    @IsOptional()
    @IsNumber()
    designationId
    @IsOptional()
    @IsString()
    dateOfBirts
    @IsOptional()
    @IsNumber()
    gender
    @IsOptional()
    @IsNumber()
    religion
    @IsOptional()
    @IsNumber()
    maritialStatus
    @IsOptional()
    @IsNumber()
    spousName
    @IsOptional()
    @IsString()
    spouseProfe
    @IsOptional()
    @IsString()
    fatherOrHusbandName
    @IsOptional()
    @IsString()
    fatherOrHusbandProfe
    @IsOptional()
    @IsString()
    fatherOrHusbandMobile
    @IsOptional()
    @IsString()
    motherName
    @IsOptional()
    @IsString()
    motherProfe
    @IsOptional()
    @IsString()
    motherMobile
    @IsOptional()
    @IsString()
    presentDiviId
    @IsOptional()
    @IsNumber()
    presentDistId
    @IsOptional()
    @IsNumber()
    presentPSId
    @IsOptional()
    @IsNumber()
    presentCityCor
    @IsOptional()
    @IsString()
    presentWord
    @IsOptional()
    @IsString()
    presentWordNo
    @IsOptional()
    @IsString()
    presentVillRoad 
    @IsOptional()
    @IsString()
    presentBasHolding
    @IsOptional()
    @IsString()
    presentPostOffice
    @IsOptional()
    @IsString()
    presentPostOfficeCode
    @IsOptional()
    @IsString()
    perDiviId
    @IsOptional()
    @IsNumber()
    pertDisId
    @IsOptional()
    @IsNumber()
    pertPSId
    @IsOptional()
    @IsNumber()
    perCityCor
    @IsOptional()
    @IsString()
    perWord
    @IsOptional()
    @IsString()
    perWordNo
    @IsOptional()
    @IsString()
    perVillRoad
    @IsOptional()
    @IsString()
    perBasHolding
    @IsOptional()
    @IsString()
    perPostOffice
    @IsOptional()
    @IsString()
    perPostOfficeCode
}