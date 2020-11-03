import { NgModule } from '@angular/core';
import { DagDragDirective } from './dag-drag.directive';
import { DagDropDirective } from './dag-drop.directive';



@NgModule({
    declarations: [DagDragDirective, DagDropDirective],
    imports: [],
    exports: [DagDragDirective, DagDropDirective]
})
export class NgxDragdropModule { }
