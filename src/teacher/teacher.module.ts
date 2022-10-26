import { Module } from '@nestjs/common';
import { StudentsModule } from 'src/students/students.module';
import { StudentsTeachersController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    imports: [StudentsModule],
    controllers: [TeacherController, StudentsTeachersController],
    providers: [TeacherService]
})
export class TeacherModule {}
