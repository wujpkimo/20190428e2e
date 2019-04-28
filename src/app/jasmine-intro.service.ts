import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JasmineIntroService {

  constructor() { }

  addNumber(a: number, b: number) {
    return a + b;
  }
  subtractNumber(a: number, b: number) {
    return a - b;
  }

  andNumber(a: number, b: number) {
    return a * b;
  }

  excertNumber(a: number, b: number) {
    return a / b;
  }

}
