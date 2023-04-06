import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getAll(): Promise<Movie[]>;
    create(createMovieDto: CreateMovieDto): Promise<boolean>;
    patch(movieId: number, updateData: UpdateMovieDto): Promise<boolean>;
}
