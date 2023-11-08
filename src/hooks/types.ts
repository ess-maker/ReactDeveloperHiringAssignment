export interface inputType {className? : string , type : string ,img : string ,placeholder : string ,name? : string ,  onchange:() => void}
export interface SelectedNumberState {value: number;}
export interface typeSearch {value: string;}
export interface carsState {loading: boolean , data: courses_type[]}

export const initialState: carsState = {
    loading: false,
    data: []
}
export interface detilesTyes {titel:string , icon :string ,  id:number}

interface syllabus_types {
    week:number,
    topic:string,
    content:string
    
    }
interface students_types {
        id:number,
        name:string,
        email :string
}

export type courses_type = {
    id: number,
    courseName: string,
    instructor: string,
    description: string,
    enrollmentStatus: string,
    thumbnail: string,
    duration: string,
    schedule: string,
    location:string,
    Enrolled:boolean,
    completed:boolean,
    prerequisites: string[],
    syllabus:syllabus_types,
    students:students_types
}
