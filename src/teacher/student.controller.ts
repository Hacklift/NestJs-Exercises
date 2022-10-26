import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { StudentsService } from 'src/students/students.service';
import { FindStudentResponseDto} from  "../students/dto/student.dto"
import { FindTeacherResponseDto } from './dto/teacher.dto';


@Controller ("teachers/:teacherId/students")
export class StudentsTeachersController {

    constructor(private readonly studentservice: StudentsService){}


    @Get()
    getStudentByTeacherId(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string
    ): FindStudentResponseDto [] {
        return this.studentservice.getStudentByTeacherId(teacherId)
    }

    @Put('/:studentId')
    updateStudentByTeacherId(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
        @Param('studentId', new ParseUUIDPipe()) studentId: string
    ): FindTeacherResponseDto [] {
        return this.studentservice.updateStudentByTeacherId(teacherId, studentId)
    }

}
