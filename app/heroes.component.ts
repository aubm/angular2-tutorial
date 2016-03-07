import {Component,OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    templateUrl: '/app/heroes.template.html',
    styleUrls: ['/app/heroes.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(
        private _router: Router,
        private _heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    async getHeroes() {
        this.heroes = await this._heroService.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
