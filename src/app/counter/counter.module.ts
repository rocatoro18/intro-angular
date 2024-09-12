// AQUI VAMOS A TENER LA DEFINICION DE LOS COMPONENTES DEL COUNTER

import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{}
