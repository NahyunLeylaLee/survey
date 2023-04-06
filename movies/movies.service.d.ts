import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
export declare class MoviesService {
    private readonly movies;
    constructor(movies: Repository<Movie>);
    getAll(): Promise<Movie[]>;
    createMovie(createMovieDto: CreateMovieDto): Promise<Movie>;
    updateMovie(id: number, updateMovieDto: UpdateMovieDto): Promise<import("typeorm").UpdateResult>;
}
