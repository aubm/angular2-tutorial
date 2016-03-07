import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-hero-detail',
    templateUrl: '/app/hero-detail.template.html',
    styleUrls: ['/app/hero-detail.css']
})
export class HeroDetailComponent {

    hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams
    ) {}

    async ngOnInit() {
        let id = +this._routeParams.get('id');
        this.hero = await this._heroService.getHero(id);
    }

    goBack() {
        window.history.back();
    }
}