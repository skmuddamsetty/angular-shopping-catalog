import { Request, Response } from "express";
import { COURSES, PRODUCTS } from "./db-data";

export var productsKeyCounter = 100;

export function getAllCourses(req: Request, res: Response) {
  /*
    console.log("ERROR loading courses!");
    res.status(500).json({message: 'error occurred.'});
    return;
*/

  setTimeout(() => {
    res.status(200).json({ payload: Object.values(COURSES) });
  }, 1500);
}

export function getCourseById(req: Request, res: Response) {
  const courseId = req.params["id"];

  const courses: any = Object.values(COURSES);

  const course = courses.find((course) => course.id == courseId);

  res.status(200).json(course);
}

// product routes
export function getAllProducts(req: Request, res: Response) {
  setTimeout(() => {
    res.status(200).json({ payload: Object.values(PRODUCTS) });
  }, 1500);
}

export function createProduct(req: Request, res: Response) {
  console.log("Creating new product ...");
  const changes = req.body;
  const newProduct = {
    id: productsKeyCounter,
    seqNo: productsKeyCounter,
    ...changes,
  };
  PRODUCTS[newProduct.id] = newProduct;
  productsKeyCounter += 1;
  setTimeout(() => {
    res.status(200).json(newProduct);
  }, 2000);
}
