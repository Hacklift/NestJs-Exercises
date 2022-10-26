import { Injectable } from '@nestjs/common';
import { students} from "../db"
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto} from './dto/student.dto';
import {v4 as uuid } from "uuid"
import { FindTeacherResponseDto } from 'src/teacher/dto/teacher.dto';

@Injectable()
export class StudentsService {
    student = students;
    getStudents(): FindStudentResponseDto[] {
        return this.student
    }

    getStudentById(studentId: string): FindStudentResponseDto {
        return this.student.find(student => {
            return student.id === studentId
        })
    }


    createStudent(payload: CreateStudentDto): StudentResponseDto{
        let newStudent = {
            id: uuid(),
            ...payload    
         }  
         this.student.push(newStudent);
         return newStudent    
    } 

    updateStudent(payload: UpdateStudentDto, studentId: string){
        let updatedStudent: StudentResponseDto;

        const updatedStudentList = this.student.map(student => {
            if (student.id === studentId){
                updatedStudent= {
                id: studentId,
                ...payload
            }
            return updatedStudent
        }else return student
 
        });
        this.student = updatedStudentList;
        return updatedStudentList
    }

    getStudentByTeacherId(teacherId: string): FindStudentResponseDto[]{

    return this.student.filter(student => {
        return student.teacher === teacherId

    })
}

updateStudentByTeacherId(teacherId: string, studentId: string): FindTeacherResponseDto [] {
    let updatedStudent: StudentResponseDto;
    const updatedStudentList = this.student.map(student => {
        if (student.id === studentId){
            updatedStudent = {
                ...student,
                teacher: teacherId
        }
        return updatedStudent

        }
        else return student
    });
    this.student = updatedStudentList;

    return updatedStudentList

}

}


