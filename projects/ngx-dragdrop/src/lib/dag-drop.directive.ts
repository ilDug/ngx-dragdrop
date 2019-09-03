import { Directive, Output, EventEmitter, Input, HostListener, Renderer2, OnInit, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: "[dagDrop]"
})
export class DagDropDirective implements OnInit {

    /** event listeners */
    @HostListener("drop", ["$event"]) onDropListener = this.onDrop;
    @HostListener("dragover", ["$event"]) onDragOverListener = this.onDragOver;
    @HostListener("dragleave", ["$event"]) onDragLeaveListener = this.onDragLeave;

    /** apply class "drag-over" to element during over */
    @HostBinding("class.drag-over") dragOverClass: boolean = false;

    /**  emits the transfered data */
    @Output() dagDrop: EventEmitter<string> = new EventEmitter();

    constructor(
        private el: ElementRef, 
        private r: Renderer2
    ) { }




    ngOnInit() {
        /** set element attribute */
        this.r.setProperty(this.el.nativeElement, "droppable", "true");
    }



    public onDrop(e) {
        event.preventDefault();

        this.dragOverClass = false;

        const dataTransfer: DataTransfer = e.dataTransfer;
        const data = dataTransfer.getData("text/plain");
        this.dagDrop.emit(data)
    }






    public onDragOver(e) {
        event.stopPropagation();
        event.preventDefault();

        this.dragOverClass = true;
    }





    public onDragLeave(e) {
        event.stopPropagation();
        event.preventDefault();

        this.dragOverClass = false;
    }
}
