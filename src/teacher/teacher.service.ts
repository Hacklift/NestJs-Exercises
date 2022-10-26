import { Injectable } from '@nestjs/common';
import { teacher} from '../db';
import { FindTeacherResponseDto } from './dto/teacher.dto';


@Injectable()
export class TeacherService {
    private teachers = teacher; 

    getAllTeachers(): FindTeacherResponseDto[] {
        return this.teachers
    }

    getTeacherById(teacherId: string): FindTeacherResponseDto  {
        return this.teachers.find(teacher => {
            return teacher.id === teacherId
        })
    }
}
