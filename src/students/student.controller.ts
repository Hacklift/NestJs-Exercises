import { Body, Controller, Get, Param, Post, Put, ParseUUIDPipe } from "@nestjs/common";
import {UpdateStudentDto, FindStudentResponseDto, StudentResponseDto} from "./dto/student.dto"
import { StudentsService } from "./students.service";


@Controller('students')
export class StudentController{

    constructor(private readonly studentService: StudentsService) {}

    @Get()
    getStudents(): FindStudentResponseDto [] {
        return this.studentService.getStudents()
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId: string
    ): FindStudentResponseDto {
        return this.studentService.getStudentById(studentId)
    }

    @Post()
    createStudent(
        @Body() body
    ): StudentResponseDto {
        return this.studentService.createStudent(body)
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId', new ParseUUIDPipe()) studentId: string,
        @Body() body: UpdateStudentDto
    ): StudentResponseDto [] {
        return this.studentService.updateStudent(body, studentId)
    }

}