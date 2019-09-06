import { Component } from '@angular/core';

@Component({
    selector: 'dag-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public items = [
        { name: "heart", src: "assets/heart.svg", color: "red" },
        { name: "club", src: "assets/club.svg", color: "black" },
        { name: "diamond", src: "assets/diamond.svg", color: "red" },
        { name: "spade", src: "assets/spade.svg", color: "black" },
    ]

}
