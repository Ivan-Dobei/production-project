import {Country, Currency} from 'shared/const/common';

export interface ProfileData {
   firstname: string;
   lastname: string;
   age: number;
   currency: Currency;
   country: Country;
   city: string;
   username: string;
   avatar: string;
}

export interface ProfileSchema {
   data?: ProfileData;
   isLoading: boolean;
   error?: string;
   readonly: boolean;
}
