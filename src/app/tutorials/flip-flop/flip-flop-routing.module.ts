import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipFlopComponent } from './flip-flop.component';
import {AsynchronousSequentialCircuitsComponent} from "./asynchronous-sequential-circuits/asynchronous-sequential-circuits.component";

const routes: Routes = [
  { path: '', component: FlipFlopComponent, children: [
      { path: 'AsynchronousSequentialCircuits'
        , loadChildren: () => import('./asynchronous-sequential-circuits//asynchronous-sequential-circuits.module').then(m => m.AsynchronousSequentialCircuitsModule)
      },
      { path: 'SynchronousSequentialCircuits'
        , loadChildren: () => import('./synchronous-sequential-circuits/synchronous-sequential-circuits.module').then(m => m.SynchronousSequentialCircuitsModule)
      },
    ] },

  // { path: 'AsynchronousSequentialCircuits', loadChildren: () => import('./tutorials/flip-flop/asynchronous-sequential-circuits/asynchronous-sequential-circuits.module').then(m => m.AsynchronousSequentialCircuitsModule) },

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlipFlopRoutingModule { }
