import { CreateMovieDto } from "./create-movie.dto";
declare const UpdateMovieDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMovieDto>>;
export declare class UpdateMovieDto extends UpdateMovieDto_base {
    readonly id: number;
    readonly title?: string;
    readonly year?: number;
    readonly genres?: string;
    readonly isReleased?: boolean;
}
export {};
