import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(title, metaTags) {
        this.title = title;
        this.metaTags = metaTags;
    }
    ngOnInit() {
        this.title.setTitle('Página Inicial');
        this.metaTags.addTags([
            { name: 'title', content: 'This is my home page' },
            { name: 'description', content: 'This is my home page' },
            { name: 'twitter:card', content: 'This is my home page' },
            { name: 'og:url', content: '/home' },
            { name: 'og:title', content: 'Home Page' },
            { name: 'og:description', content: 'This is my home page' },
        ]);
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map