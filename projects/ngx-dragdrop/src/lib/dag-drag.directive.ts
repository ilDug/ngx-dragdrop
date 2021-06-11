import { Directive, HostListener, Output, Input, EventEmitter, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[dagDrag]'
})
export class DagDragDirective<T> implements OnInit {

    /** events listeners */
    @HostListener('drag', ['$event']) onDragListener = this.onDrag
    @HostListener('dragstart', ['$event']) onDragStartListener = this.onDragStart
    @HostListener('dragend', ['$event']) onDragEndListener = this.onDragEnd


    /** whether element is dragging - TWO-WAY BINDING */
    private _dragging: boolean;
    @Output() draggingChange = new EventEmitter<boolean>();
    @Input() get dragging(): boolean { return this._dragging; }
    set dragging(d: boolean) {
        this._dragging = d;
        this.draggingChange.emit(this._dragging);
    };

    /** data transfered during drag-drop */
    @Input() dagDrag: T;

    /** image src visualised during dragging */
    @Input() dragImage: string;


    constructor(
        private el: ElementRef,
        private r: Renderer2
    ) { }



    ngOnInit() {
        /** set attribute to element */
        this.r.setAttribute(this.el.nativeElement, 'draggable', 'true');
    }



    public onDragStart(e) {

        // e.preventDefault();
        e.stopPropagation();

        /** set data-transfer */
        const payload = JSON.stringify(this.dagDrag)
        const data: DataTransfer = e.dataTransfer;
        data.setData("text/plain", payload);
        data.dropEffect = "move";

        /** element */
        const element: HTMLElement = this.el.nativeElement

        /** image TO DO  */
        // const img = new Image();
        // img.src = this.dragImage || null; 
        // img.style.height = element.offsetHeight/2 + 'px'
        // data.setDragImage(element, 0, 0)

        /** set dragging property on drag start */
        this.dragging = true;

    }





    public onDragEnd(e) {
        /** set dragging property on drag end */
        this.dragging = false;
    }





    public onDrag(e) {
        e.preventDefault();
    }

}
