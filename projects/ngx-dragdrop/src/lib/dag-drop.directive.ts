import { Directive, EventEmitter, HostBinding, HostListener, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[dagDrop]'
})
export class DagDropDirective<T>{

  /** event listeners */
  @HostListener("drop", ["$event"]) onDropListener = this.onDrop;
  @HostListener("dragover", ["$event"]) onDragOverListener = this.onDragOver;
  @HostListener("dragleave", ["$event"]) onDragLeaveListener = this.onDragLeave;

  /** apply class "drag-over" to element during over */
  @HostBinding("class.drag-over") dragOverClass: boolean = false;
  /** set element attribute */
  @HostBinding('attr.droppable') droppable: boolean = true;

  /**  emits the transfered data */
  @Output() dagDrop: EventEmitter<T> = new EventEmitter();

  constructor() { }

  public onDrop(e) {
    e.preventDefault();

    this.dragOverClass = false;

    const dataTransfer: DataTransfer = e.dataTransfer;
    const data = dataTransfer.getData("text/plain");
    this.dagDrop.emit(JSON.parse(data))
  }


  public onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();

    this.dragOverClass = true;
  }


  public onDragLeave(e) {
    e.stopPropagation();
    e.preventDefault();

    this.dragOverClass = false;
  }

}
