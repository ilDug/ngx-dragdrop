import { NgModule } from '@angular/core';
import { DagDropDirective } from './dag-drop.directive';
import { DagDragDirective } from './dag-drag.directive';



@NgModule({
    declarations: [
        DagDropDirective,
        DagDragDirective
    ],
    imports: [
    ],
    exports: [
        DagDropDirective,
        DagDragDirective
    ]
})
export class NgxDragdropModule { }
