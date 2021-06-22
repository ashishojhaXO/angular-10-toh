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

// @Injectable()
class MockHeroService { 
//   getHeroes() {}
}

describe('HeroesComponent', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let component: HeroesComponent;

  let spy: jasmine.SpyObj<HeroService>;

  beforeEach( () => {


    // let heroServiceSpy = jasmine.createSpyObj('HeroService', ['getHeroes']);

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        HeroesComponent,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        HeroesComponent,
        { provide: HeroService, useClass: MockHeroService }
        // { provide: HeroService, useValue: heroServiceSpy}
      ]
    })
    .compileComponents();

    // component = TestBed.inject(HeroesComponent);
    // let heroService = TestBed.inject(HeroService);
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


    // let heroService = TestBed.inject(HeroService);
    // // let heroService = TestBed.inject(HeroService) as jasmine.SpyObj<HeroService>;

    // console.log("Hserv: ", heroService);
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

    let ret = spy.getHeroes.and.returnValue(of([]));

    console.log("COMPPPP 222: ", component, component.getHeroes );

    let serv = fixture.debugElement.injector.get(HeroService);
    let spy_getPosts = spyOn(serv,"getHeroes").and.callFake(() => {
      return of([])
    });

    spyOn(component, 'getHeroes');
    component.ngOnInit();
    expect(component.getHeroes).toHaveBeenCalled();
  });

  // it('should run #getHeroes()', () => {
  //   // let component: any = component;
  //   (component as any).heroService = (component as any).heroService || {};
  //   spyOn( (component as any).heroService, 'getHeroes').and.returnValue(observableOf([]));
  //   component.getHeroes();
  //   // expect(component.heroService.getHeroes).toHaveBeenCalled();
  // });

});
