// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, of, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';

@Injectable()
class MockHeroService {}

describe('HeroesComponent', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let component: HeroesComponent;

  beforeEach(async () => {

    // let testQuote = [];
    // // Create a fake TwainService object with a `getQuote()` spy
    // const heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    // // Make the spy return a synchronous Observable with the test data
    // let heroService_getHeroes = heroService.getHeroes.and.returnValue(of(testQuote));

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        HeroesComponent,

      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
        // { provide: HeroService, useValue: heroService }
      ]
    })
    // .overrideComponent(HeroesComponent, {
    // 
    // })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let heroService = TestBed.inject(HeroService);
  })

  //afterEach(() => {
    //component.ngOnDestroy = function() {};
    //fixture.destroy();
  //});

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  // NOTE: accessorTests

  // NOTE: functionTests

  // NOTE: functionTests-2

  it('should run #ngOnInit()', async () => {
    spyOn(component, 'getHeroes');
    component.ngOnInit();
    expect(component.getHeroes).toHaveBeenCalled();
  });

  it('should run #getHeroes()', () => {
    // let component: any = component;
    (component as any).heroService = (component as any).heroService || {};
    spyOn( (component as any).heroService, 'getHeroes').and.returnValue(observableOf([]));
    component.getHeroes();
    // expect(component.heroService.getHeroes).toHaveBeenCalled();
  });

  // it('should run #add()', async () => {
  //   component.heroService = component.heroService || {};
  //   spyOn(component.heroService, 'addHero').and.returnValue(observableOf({}));
  //   component.heroes = component.heroes || {};
  //   spyOn(component.heroes, 'push');
  //   component.add('name');
  //   // expect(component.heroService.addHero).toHaveBeenCalled();
  //   // expect(component.heroes.push).toHaveBeenCalled();
  // });

  // it('should run #delete()', async () => {
  //   component.heroes = component.heroes || {};
  //   component.heroes = ['heroes'];
  //   component.heroService = component.heroService || {};
  //   spyOn(component.heroService, 'deleteHero').and.returnValue(observableOf({}));
  //   component.delete({
  //     id: {}
  //   });
  //   // expect(component.heroService.deleteHero).toHaveBeenCalled();
  // });

});
