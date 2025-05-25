import { CreateApplyDto } from './dto/create-apply.dto';
import { UpdateApplyDto } from './dto/update-apply.dto';
export declare class AppliesService {
    create(createApplyDto: CreateApplyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateApplyDto: UpdateApplyDto): string;
    remove(id: number): string;
}
