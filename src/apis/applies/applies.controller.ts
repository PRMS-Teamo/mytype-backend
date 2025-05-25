import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppliesService } from './applies.service';
import { CreateApplyDto } from './dto/create-apply.dto';
import { UpdateApplyDto } from './dto/update-apply.dto';

@Controller('applies')
export class AppliesController {
  constructor(private readonly appliesService: AppliesService) {}

  @Post()
  create(@Body() createApplyDto: CreateApplyDto) {
    return this.appliesService.create(createApplyDto);
  }

  @Get()
  findAll() {
    return this.appliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appliesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplyDto: UpdateApplyDto) {
    return this.appliesService.update(+id, updateApplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appliesService.remove(+id);
  }
}
