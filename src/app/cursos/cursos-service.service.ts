import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {

  constructor() { 
   
  }
  getCurso(){
    return ["java", "C#", "Angular"];
  }
}


