import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, of, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';

@Injectable()
class MockHeroService {}

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let component: DashboardComponent;

  // NOTE: For Services
  // 1st Describe
  // let userApiService: SpyObj<UserApiService>;

  beforeEach(() => {

    // 2nd create a spyOn
    // let userApiService = spyOn('HeroService', ['getUsers'] );
    // userApiService.getUsers.and.returnValue(of ([]));
    // let MockHeroService: Partial<HeroService>;
    // MockHeroService = {
    // }
    
    // let testQuote = [];
    // // Create a fake TwainService object with a `getQuote()` spy
    // const heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    // // Make the spy return a synchronous Observable with the test data
    // let getQuoteSpy = heroService.getHeroes.and.returnValue(of(testQuote));

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        DashboardComponent,
        // ,

      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: HeroService, useClass: MockHeroService}
        // { provide: HeroService, useClass: heroService}
        // { provide: HeroService, useValue: heroService }
      ]
    })
    // .overrideComponent(DashboardComponent, {})
    .compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    console.log("COMPO----: ", component)
    console.log("FIX----: ", fixture)
  });

  it('should be DEFINED', async() => {
    console.log("COMPO 2----: ", component)
    console.log("FIX 2----: ", fixture)
    expect(component).toBeDefined();
  })

  //afterEach(() => {
    //component.ngOnDestroy = function() {};
    //fixture.destroy();
  //});

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    spyOn(component, 'getHeroes');
    component.ngOnInit();
    expect(component.getHeroes).toHaveBeenCalled();
  });

  // it('should run #getHeroes()', async () => {
  //   component.heroService = component.heroService || {};
  //   spyOn(component.heroService, 'getHeroes').and.returnValue(observableOf({}));
  //   component.getHeroes();
  //   // expect(component.heroService.getHeroes).toHaveBeenCalled();
  // });

});
