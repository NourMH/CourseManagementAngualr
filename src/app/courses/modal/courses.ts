
export interface Courses {
    status: boolean
    data: DataCourses[]
    massage: string
  }
  
  export interface DataCourses {
    date: string
    reservied: boolean
  }
  
export interface CourseReservation {
    day: number
    time: string
}
export type Staduims = StaduimsData[]
export interface StaduimsData {
    id: number
    name: string
}