import {Request,Response} from 'express';
import { getRepository } from "typeorm";
import Student from "../models/Student";
import students_view from '../view/students_view';
import studentView from '../view/students_view';

export default{
  async index(request:Request, response:Response){

    const studentRepository = getRepository(Student);

    const students = await studentRepository.find();

    return response.json(students_view.renderMany(students));

  },
  async create(request:Request, response:Response){

  const {
      name,
      email,
      cpf,
      ra
  } = request.body;

  const studentRepository = getRepository(Student);
  const stundent = studentRepository.create({
      name,
      email,
      cpf,
      ra
  });
  await studentRepository.save(stundent);
  return response.status(201).json({m:'try save'})

  },
  async show(request:Request, response:Response){

    const { id } = request.params;

    const studentRepository = getRepository(Student);

    const stundent = await studentRepository.findOneOrFail(id);

    return response.json(studentView.render(stundent));
  },
}