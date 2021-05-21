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

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let component: DashboardComponent;

  // NOTE: For Services
  // 1st Describe
  // let userApiService: SpyObj<UserApiService>;

  beforeEach( async () => {

    // 2nd create a spyOn
    // let userApiService = spyOn('HeroService', ['getUsers'] );
    // userApiService.getUsers.and.returnValue(of ([]));
    
    let testQuote = [];
    // Create a fake TwainService object with a `getQuote()` spy
    const heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    // Make the spy return a synchronous Observable with the test data
    let getQuoteSpy = heroService.getHeroes.and.returnValue(of(testQuote));

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        DashboardComponent,
        // ,

      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        // { provide: HeroService, useClass: MockHeroService}
        // { provide: HeroService, useValue: MockHeroService}
        // { provide: HeroService, useClass: heroService}
        { provide: HeroService, useValue: heroService }
      ]
    })
    // .overrideComponent(DashboardComponent, {})
    .compileComponents()
    // .then(() => {
    //   fixture = TestBed.createComponent(DashboardComponent);
    //   component = fixture.componentInstance;
    //   fixture.detectChanges();

    //   console.log("FIX-0--: ", fixture)
    //   console.log("COMPONNN 0---: ", component);
    // })

      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      console.log("FIX-0--: ", fixture)
      console.log("COMPONNN 0---: ", component);

  });

  //afterEach(() => {
    //component.ngOnDestroy = function() {};
    //fixture.destroy();
  //});

  it('should run #ngOnInit()', async () => {
    console.log("FIX-3--: ", fixture)
    console.log("COMPONNN 3---: ", component);
    spyOn(component, 'getHeroes');
    component.ngOnInit();
    expect(component.getHeroes).toHaveBeenCalled();
  });

  it('should run #constructor()', async () => {
    console.log("FIX-2--: ", fixture)
    console.log("COMPONNN 2---: ", component);
    expect(component).toBeTruthy();
  });

  it('should be DEFINED', async () => {
    console.log("FIX-1--: ", fixture)
    console.log("COMPONNN 1---: ", component);
    expect(component).toBeDefined();
  });

  // it('should run #getHeroes()', async () => {
  //   component.heroService = component.heroService || {};
  //   spyOn(component.heroService, 'getHeroes').and.returnValue(observableOf({}));
  //   component.getHeroes();
  //   // expect(component.heroService.getHeroes).toHaveBeenCalled();
  // });

});
