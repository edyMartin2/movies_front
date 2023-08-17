import MoviesType from "./MoviesType";

export default interface CardHelperType {
    id: string,
    url: string,
    title: string,
    description?: string,
    userType: string,
    information: MoviesType
}