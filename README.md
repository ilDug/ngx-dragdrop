# ngx-dragdrop

[![Node.js Package](https://github.com/ilDug/ngx-dragdrop/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ilDug/ngx-dragdrop/actions/workflows/npm-publish.yml)

Angular directives for passing data with Drag & Drop.

## Demo
See [demo](https://ildug.github.io/ngx-dragdrop/)


## Install

Install via package manager or fork this project ("projects/ngx-dragdrop/src")

NPM 

```
npm install @ildug/ngx-dragdrop
```
YARN 

```
yarn add @ildug/ngx-dragdrop
```

## Usage in angular app

Import the module in your angular app. In your module **app.module.ts**

``` typescript
    ...
    import { NgxDragdropModule } from '@ildug/ngx-dragdrop';

    @NgModule({
        declarations: [
            AppComponent,
        ],
        imports: [
            ...
            NgxDragdropModule,
            ...
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }
```

### dagDrag

Add the directive to an element to give it the *draggable* behaviour. Then assign a value to an element witch will be dragged.


In **my.component.html**

``` html
<div [dagDrag]="item" > drag me </div>
```

### dagDrop
Add the directive to an element to give it the *droppable* behaviour. Listen for the drop event and get dropped data

``` html
<div (dagDrop)="useItem($event)" > drop here </div>
``` 

When the draggable element enter in drop area,  **drop-over**  class is added to this element.

## To Do

- drag-start and drag-end events emitters
- drag-enter and drag-leave events emitters
