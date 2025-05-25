import { AppliesService } from './applies.service';
import { CreateApplyDto } from './dto/create-apply.dto';
import { UpdateApplyDto } from './dto/update-apply.dto';
export declare class AppliesController {
    private readonly appliesService;
    constructor(appliesService: AppliesService);
    create(createApplyDto: CreateApplyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateApplyDto: UpdateApplyDto): string;
    remove(id: string): string;
}
