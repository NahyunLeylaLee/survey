import { CoreEntity } from "src/common/entities/core.entity";
import { User } from "src/users/entities/user.entity";
export declare class News extends CoreEntity {
    title: string;
    content: string;
    creator: User;
    modifier: User;
    creatorId: number;
}
