export interface inputType {className? : string , type : string ,img : string ,placeholder : string ,name? : string ,  onchange:() => void}
export interface listNavtypes {titel:string,id:number}
export interface cartype {cars: any;image: string,title:string,start_production: number ,class: string}
export interface SelectedNumberState {value: number;}
export interface typeSearch {value: string;}
export interface carsState {loading: boolean , data: cartype[]}

export const initialState: carsState = {
    loading: false,
    data: []
}
export interface detilesTyes {titel:string , icon :string ,  id:number}
