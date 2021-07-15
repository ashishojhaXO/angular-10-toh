ngentest.config.js not found. Using default config instead.
  *** config *** {
  framework: 'karma',
  templates: {
    klass: "import { async } from '@angular/core/testing';\n" +
      "import { Observable, of as observableOf, throwError } from 'rxjs';\n" +
      '\n' +
      "<%- importMocks.join('\\n') -%>\n" +
      '\n' +
      "describe('<%- className %>', () => {\n" +
      '  let obj;\n' +
      '\n' +
      "  <%- providerMocks.mocks.join('\\n') %>\n" +
      '\n' +
      '  beforeEach(() => {\n' +
      '    obj = new <%- className %>(<%- ctorParamJs %>);\n' +
      '  });\n' +
      '\n' +
      '  <% for(var key in accessorTests) { %>\n' +
      '  <%- accessorTests[key] -%>\n' +
      '  <% } %>\n' +
      '\n' +
      '  <% for(var key in functionTests) { -%>\n' +
      '  <%- functionTests[key] -%>\n' +
      '  <% } -%>\n' +
      '\n' +
      '});\n',
    component: '// tslint:disable\n' +
      "import { async, ComponentFixture, TestBed } from '@angular/core/testing';\n" +
      "import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';\n" +
      "import { isPlatformBrowser } from '@angular/common';\n" +
      "import { FormsModule, ReactiveFormsModule } from '@angular/forms';\n" +
      "import { By } from '@angular/platform-browser';\n" +
      "import { Observable, of as observableOf, throwError } from 'rxjs';\n" +
      '\n' +
      "<%- importMocks.join('\\n') -%>\n" +
      '\n' +
      "<%- providerMocks.mocks.join('\\n') %>\n" +
      '\n' +
      '<% config.directives.forEach(directive => { %>\n' +
      "@Directive({ selector: '[<%- directive -%>]' })\n" +
      'class <%- directive.charAt(0).toUpperCase() + directive.slice(1) -%>Directive {\n' +
      '  @Input() <%- directive -%>;\n' +
      '}\n' +
      '<% }) -%>\n' +
      '\n' +
      '<% config.pipes.forEach(pipe => { %>\n' +
      "@Pipe({name: '<%- pipe -%>'})\n" +
      'class <%- pipe.charAt(0).toUpperCase() + pipe.slice(1) -%>Pipe implements PipeTransform {\n' +
      '  transform(value) { return value; }\n' +
      '}\n' +
      '<% }) -%>\n' +
      '\n' +
      "describe('<%- className %>', () => {\n" +
      '  let fixture: ComponentFixture<<%- className %>>;\n' +
      '  let component: <%- className %>;\n' +
      '\n' +
      '  beforeEach(() => {\n' +
      '    TestBed.configureTestingModule({\n' +
      '      imports: [ FormsModule, ReactiveFormsModule ],\n' +
      '      declarations: [\n' +
      '        <%- className %>,\n' +
      '        <% if (config.pipes.length > 0) { %>\n' +
      "          <%- config.pipes.map(e => e.charAt(0).toUpperCase() + e.slice(1) + 'Pipe').join(', ') %>,\n" +
      '        <% } %>\n' +
      '        <% if (config.directives.length > 0) { %>\n' +
      "          <%- config.directives.map(e => e.charAt(0).toUpperCase() + e.slice(1) + 'Directive').join(', ') %>\n" +
      '        <% } %>\n' +
      '      ],\n' +
      '      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],\n' +
      '      providers: [\n' +
      "        <%- providerMocks.providers.join(',\\n        ') %>\n" +
      '      ]\n' +
      '    })\n' +
      '    // .overrideComponent(<%- className %>, {\n' +
      '    // <% componentProviderMocks.forEach(mock => { %>\n' +
      '    //  <%- mock -%>\n' +
      '    // <% }) %>\n' +
      '    // })\n' +
      '    .compileComponents();\n' +
      '\n' +
      '    fixture = TestBed.createComponent(<%- className %>);\n' +
      '    component = fixture.componentInstance;\n' +
      '    fixture.detectChanges();\n' +
      '  });\n' +
      '\n' +
      '  //afterEach(() => {\n' +
      '    //component.ngOnDestroy = function() {};\n' +
      '    //fixture.destroy();\n' +
      '  //});\n' +
      '\n' +
      "  it('should run #constructor()', async () => {\n" +
      '    expect(component).toBeTruthy();\n' +
      '  });\n' +
      '\n' +
      '  // NOTE: ORI: accessorTests\n' +
      '  <% for(var key in accessorTests) { %>\n' +
      '  <%- accessorTests[key] -%>\n' +
      '  <% } %>\n' +
      '  \n' +
      '  // NOTE: ORI: functionTests\n' +
      '  <%# for(var key in functionTests) { %>\n' +
      '    <%# // NOTE: Only printing ng functions at the moment %>\n' +
      '    <%# pattern = /^ng/ %>\n' +
      '    <%# if(pattern.test(key) ) { %>\n' +
      '      <%#- functionTests[key] -%>\n' +
      '    <%# } %>\n' +
      '  <%# } %>\n' +
      '\n' +
      '  // NOTE: NEW: functionTests\n' +
      '  <% for(var key in functionTests) { %>\n' +
      '    <%- functionTests[key] -%>\n' +
      '  <% } %>\n' +
      '  \n' +
      '});\n',
    directive: '// tslint:disable\n' +
      "import { async, ComponentFixture, TestBed } from '@angular/core/testing';\n" +
      "import { Component, Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\n" +
      "import { isPlatformBrowser } from '@angular/common';\n" +
      "import { By } from '@angular/platform-browser';\n" +
      "import { Observable, of as observableOf, throwError } from 'rxjs';\n" +
      '\n' +
      "<%- importMocks.join('\\n') -%>\n" +
      '\n' +
      "<%- providerMocks.mocks.join('\\n') %>\n" +
      '\n' +
      '@Component({\n' +
      '  template: `\n' +
      "<% if (selector.type === 'element') { -%>\n" +
      "  <<%- selector.name -%> <%- inputMocks.html.join(' ') -%> <%- outputMocks.html.join(' ') -%>></<%- selector.name %>>\n" +
      "<% } else if (selector.type === 'attribute') { -%>\n" +
      "  <div <%- selector.name -%> <%- inputMocks.html.join(' ') -%> <%- outputMocks.html.join(' ') -%>></div>\n" +
      "<% } else if (selector.type === 'class') { -%>\n" +
      `  <div class="<%- selector.name -%>" <%- inputMocks.html.join(' ') -%> <%- outputMocks.html.join(' ') -%>></div>\n` +
      '<% } -%>\n' +
      '  `\n' +
      '})\n' +
      'class DirectiveTestComponent {\n' +
      '<% inputMocks.js.forEach(function(prop) { -%>\n' +
      '  <%- prop -%>\n' +
      '<% }) %>\n' +
      '<% outputMocks.js.forEach(function(prop) { %>\n' +
      '  <%- prop -%>\n' +
      '<% }) %>\n' +
      '}\n' +
      '\n' +
      "describe('<%- className %>', () => {\n" +
      '  let fixture: ComponentFixture<DirectiveTestComponent>;\n' +
      '  let component: DirectiveTestComponent;\n' +
      '  let directiveEl;\n' +
      '  let directive;\n' +
      '\n' +
      '  beforeEach(async () => {\n' +
      '    TestBed.configureTestingModule({\n' +
      '      declarations: [<%- className %>, DirectiveTestComponent],\n' +
      '      providers: [\n' +
      "        <%- providerMocks.providers.join(',\\n        ') %>\n" +
      '      ],\n' +
      '      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]\n' +
      '    }).compileComponents();\n' +
      '    fixture = TestBed.createComponent(DirectiveTestComponent);\n' +
      '    component = fixture.componentInstance;\n' +
      '    directiveEl = fixture.debugElement.query(By.directive(<%- className %>));\n' +
      '    directive = directiveEl.injector.get(<%- className %>);\n' +
      '  });\n' +
      '\n' +
      '  it("should run a directive", async () => {\n' +
      '    expect(component).toBeTruthy();\n' +
      '    expect(directive).toBeTruthy();\n' +
      '  });\n' +
      '\n' +
      '  <% for(var key in functionTests) { -%>\n' +
      '  <%- functionTests[key] -%>\n' +
      '  <% } -%>\n' +
      '\n' +
      '});\n',
    injectable: "import { async } from '@angular/core/testing';\n" +
      "import { Injectable } from '@angular/core';\n" +
      "import { Observable, of as observableOf, throwError } from 'rxjs';\n" +
      '\n' +
      "<%- importMocks.join('\\n') -%>\n" +
      '\n' +
      "<%- providerMocks.mocks.join('\\n') %>\n" +
      '\n' +
      "describe('<%- className %>', () => {\n" +
      '  let service;\n' +
      '\n' +
      '  beforeEach(() => {\n' +
      '    service = new <%- className %>(<%- ctorParamJs %>);\n' +
      '  });\n' +
      '\n' +
      '  <% for(var key in functionTests) { -%>\n' +
      '  <%- functionTests[key] -%>\n' +
      '  <% } -%>\n' +
      '\n' +
      '});\n',
    pipe: "import { async } from '@angular/core/testing';\n" +
      "import { Observable, of as observableOf, throwError } from 'rxjs';\n" +
      '\n' +
      "<%- importMocks.join('\\n') -%>\n" +
      '\n' +
      "<%- providerMocks.mocks.join('\\n') %>\n" +
      '\n' +
      "describe('<%- className %>', () => {\n" +
      '  let pipe;\n' +
      '\n' +
      '  beforeEach(() => {\n' +
      '    pipe = new <%- className %>(<%- ctorParamJs %>);\n' +
      '  });\n' +
      '\n' +
      '  <% for(var key in functionTests) { -%>\n' +
      '  <%- functionTests[key] -%>\n' +
      '  <% } -%>\n' +
      '\n' +
      '});\n'
  },
  directives: [],
  pipes: [],
  replacements: [
    { from: 'require\\("html-custom-element"\\)', to: '{}' },
    { from: '^\\S+\\.define\\(.*\\);', to: '' }
  ],
  providerMocks: {
    ElementRef: [ 'nativeElement = {};' ],
    Router: [ 'navigate() {};' ],
    Document: [ 'querySelector() {};' ],
    HttpClient: [ 'post() {};' ],
    TranslateService: [ 'translate() {};' ],
    EncryptionService: []
  },
  includeMatch: [ /(component|directive|pipe|service).ts/ ],
  excludeMatch: []
}
  *** EXPRESSION *** 0 this.heroService = heroService;
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'ExpressionStatement',
    start: 66,
    end: 97,
    expression: Node {
      type: 'AssignmentExpression',
      start: 66,
      end: 96,
      operator: '=',
      left: [Node],
      right: [Node]
    }
  },
  '2': {
    isAsync: false,
    props: {},
    params: { heroService: {} },
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION ExpressionStatement *** this.heroService = heroService;
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'AssignmentExpression',
    start: 66,
    end: 96,
    operator: '=',
    left: Node {
      type: 'MemberExpression',
      start: 66,
      end: 82,
      object: [Node],
      property: [Node],
      computed: false
    },
    right: Node {
      type: 'Identifier',
      start: 85,
      end: 96,
      name: 'heroService'
    }
  },
  '2': {
    isAsync: false,
    props: {},
    params: { heroService: {} },
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION AssignmentExpression *** this.heroService = heroService
  *** EXPRESSION *** 1 this.heroes = [];
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'ExpressionStatement',
    start: 106,
    end: 123,
    expression: Node {
      type: 'AssignmentExpression',
      start: 106,
      end: 122,
      operator: '=',
      left: [Node],
      right: [Node]
    }
  },
  '2': {
    isAsync: false,
    props: {},
    params: { heroService: {} },
    map: { 'this.heroService': 'heroService' },
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION ExpressionStatement *** this.heroes = [];
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'AssignmentExpression',
    start: 106,
    end: 122,
    operator: '=',
    left: Node {
      type: 'MemberExpression',
      start: 106,
      end: 117,
      object: [Node],
      property: [Node],
      computed: false
    },
    right: Node {
      type: 'ArrayExpression',
      start: 120,
      end: 122,
      elements: []
    }
  },
  '2': {
    isAsync: false,
    props: {},
    params: { heroService: {} },
    map: { 'this.heroService': 'heroService' },
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION AssignmentExpression *** this.heroes = []
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'ArrayExpression', start: 120, end: 122, elements: [] },
  '2': {
    isAsync: false,
    props: {},
    params: { heroService: {} },
    map: { 'this.heroService': 'heroService' },
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION ArrayExpression *** []
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'MemberExpression',
    start: 106,
    end: 117,
    object: Node { type: 'ThisExpression', start: 106, end: 110 },
    property: Node { type: 'Identifier', start: 111, end: 117, name: 'heroes' },
    computed: false
  },
  '2': {
    isAsync: false,
    props: {},
    params: { heroService: {} },
    map: { 'this.heroService': 'heroService' },
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION MemberExpression *** this.heroes
      ** setPropsOrParams { one: 'this', two: 'heroes', code: 'this.heroes' }
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'ThisExpression', start: 106, end: 110 },
  '2': {
    isAsync: false,
    props: { heroes: {} },
    params: { heroService: {} },
    map: { 'this.heroService': 'heroService' },
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION ThisExpression *** this
[36m
PROCESSING #ngOnInit[0m
[Arguments] { '0': '----------- getFuncMockJS: ' }
[Arguments] { '0': 'allFuncMockJS : ', '1': [] }
[36m
PROCESSING #getHeroes[0m
  *** EXPRESSION *** 0 this.heroService.getHeroes() .subscribe(heroes => this.heroes = heroes.slice(1, 5));
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'ExpressionStatement',
    start: 179,
    end: 275,
    expression: Node {
      type: 'CallExpression',
      start: 179,
      end: 274,
      callee: [Node],
      arguments: [Array]
    }
  },
  '2': { isAsync: false, props: {}, params: {}, map: {}, globals: {} },
  '3': undefined
}
    *** EXPRESSION ExpressionStatement *** this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'CallExpression',
    start: 179,
    end: 274,
    callee: Node {
      type: 'MemberExpression',
      start: 179,
      end: 230,
      object: [Node],
      property: [Node],
      computed: false
    },
    arguments: [ [Node] ]
  },
  '2': { isAsync: false, props: {}, params: {}, map: {}, globals: {} },
  '3': undefined
}
    *** EXPRESSION CallExpression *** this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5))
      ** setPropsOrParams {
  one: 'this',
  two: 'heroService',
  code: 'this.heroService.getHeroes()\n' +
    '            .subscribe(heroes => this.heroes = heroes.slice(1, 5))'
}
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'MemberExpression',
    start: 179,
    end: 230,
    object: Node {
      type: 'CallExpression',
      start: 179,
      end: 207,
      callee: [Node],
      arguments: []
    },
    property: Node {
      type: 'Identifier',
      start: 221,
      end: 230,
      name: 'subscribe'
    },
    computed: false
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION MemberExpression *** this.heroService.getHeroes()
            .subscribe
      ** setPropsOrParams {
  one: 'this',
  two: 'heroService',
  code: 'this.heroService.getHeroes()\n            .subscribe'
}
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'CallExpression',
    start: 179,
    end: 207,
    callee: Node {
      type: 'MemberExpression',
      start: 179,
      end: 205,
      object: [Node],
      property: [Node],
      computed: false
    },
    arguments: []
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION CallExpression *** this.heroService.getHeroes()
      ** setPropsOrParams {
  one: 'this',
  two: 'heroService',
  code: 'this.heroService.getHeroes()'
}
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'MemberExpression',
    start: 179,
    end: 205,
    object: Node {
      type: 'MemberExpression',
      start: 179,
      end: 195,
      object: [Node],
      property: [Node],
      computed: false
    },
    property: Node {
      type: 'Identifier',
      start: 196,
      end: 205,
      name: 'getHeroes'
    },
    computed: false
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION MemberExpression *** this.heroService.getHeroes
      ** setPropsOrParams { one: 'this', two: 'heroService', code: 'this.heroService.getHeroes' }
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'MemberExpression',
    start: 179,
    end: 195,
    object: Node { type: 'ThisExpression', start: 179, end: 183 },
    property: Node {
      type: 'Identifier',
      start: 184,
      end: 195,
      name: 'heroService'
    },
    computed: false
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION MemberExpression *** this.heroService
      ** setPropsOrParams { one: 'this', two: 'heroService', code: 'this.heroService' }
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'ThisExpression', start: 179, end: 183 },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION ThisExpression *** this
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'ArrowFunctionExpression',
    start: 231,
    end: 273,
    id: null,
    expression: true,
    generator: false,
    async: false,
    params: [ [Node] ],
    body: Node {
      type: 'AssignmentExpression',
      start: 241,
      end: 273,
      operator: '=',
      left: [Node],
      right: [Node]
    }
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION ArrowFunctionExpression *** heroes => this.heroes = heroes.slice(1, 5)
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'AssignmentExpression',
    start: 241,
    end: 273,
    operator: '=',
    left: Node {
      type: 'MemberExpression',
      start: 241,
      end: 252,
      object: [Node],
      property: [Node],
      computed: false
    },
    right: Node {
      type: 'CallExpression',
      start: 255,
      end: 273,
      callee: [Node],
      arguments: [Array]
    }
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION AssignmentExpression *** this.heroes = heroes.slice(1, 5)
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'CallExpression',
    start: 255,
    end: 273,
    callee: Node {
      type: 'MemberExpression',
      start: 255,
      end: 267,
      object: [Node],
      property: [Node],
      computed: false
    },
    arguments: [ [Node], [Node] ]
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION CallExpression *** heroes.slice(1, 5)
      ** setPropsOrParams { one: 'heroes', two: 'slice(1, 5)', code: 'heroes.slice(1, 5)' }
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'MemberExpression',
    start: 255,
    end: 267,
    object: Node { type: 'Identifier', start: 255, end: 261, name: 'heroes' },
    property: Node { type: 'Identifier', start: 262, end: 267, name: 'slice' },
    computed: false
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION MemberExpression *** heroes.slice
      ** setPropsOrParams { one: 'heroes', two: 'slice', code: 'heroes.slice' }
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'Identifier', start: 255, end: 261, name: 'heroes' },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION Identifier *** heroes
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'Literal', start: 268, end: 269, value: 1, raw: '1' },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION Literal *** 1
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'Literal', start: 271, end: 272, value: 5, raw: '5' },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION Literal *** 5
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'MemberExpression',
    start: 241,
    end: 252,
    object: Node { type: 'ThisExpression', start: 241, end: 245 },
    property: Node { type: 'Identifier', start: 246, end: 252, name: 'heroes' },
    computed: false
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION MemberExpression *** this.heroes
      ** setPropsOrParams { one: 'this', two: 'heroes', code: 'this.heroes' }
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'ThisExpression', start: 241, end: 245 },
  '2': {
    isAsync: false,
    props: { heroService: [Object], heroes: {} },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION ThisExpression *** this
[Arguments] { '0': '----------- getFuncMockJS: ' }
[Arguments] {
  '0': 'value: ',
  '1': { getHeroes: [Function (anonymous)] }
}
[Arguments] {
  '0': 'valueFIletered: ',
  '1': [ [ 'getHeroes', [Function (anonymous)] ] ]
}
[Arguments] {
  '0': 'key2, value2: ',
  '1': 'getHeroes',
  '2': [Function (anonymous)]
}
[Arguments] {
  '0': '=======NOW JS: ',
  '1': [ 'component.heroService = component.heroService || {}' ]
}
[Arguments] {
  '0': '${thisName}.${key1} = ${thisName}.${key1} || {}: ',
  '1': 'component.heroService = component.heroService || {}'
}
[Arguments] { '0': 'value: ', '1': {} }
[Arguments] { '0': 'valueFIletered: ', '1': [] }
[Arguments] {
  '0': 'allFuncMockJS : ',
  '1': [
    'component.heroService = component.heroService || {}',
    "spyOn(component.heroService, 'getHeroes').and.returnValue(observableOf({}))"
  ]
}
[36m
PROCESSING #searchHeroes[0m
  *** EXPRESSION *** 0 this.heroService.searchHeroes("") .subscribe(heroes => this.heroes = heroes.slice(0, 5));
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'ExpressionStatement',
    start: 311,
    end: 412,
    expression: Node {
      type: 'CallExpression',
      start: 311,
      end: 411,
      callee: [Node],
      arguments: [Array]
    }
  },
  '2': { isAsync: false, props: {}, params: {}, map: {}, globals: {} },
  '3': undefined
}
    *** EXPRESSION ExpressionStatement *** this.heroService.searchHeroes("")
            .subscribe(heroes => this.heroes = heroes.slice(0, 5));
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'CallExpression',
    start: 311,
    end: 411,
    callee: Node {
      type: 'MemberExpression',
      start: 311,
      end: 367,
      object: [Node],
      property: [Node],
      computed: false
    },
    arguments: [ [Node] ]
  },
  '2': { isAsync: false, props: {}, params: {}, map: {}, globals: {} },
  '3': undefined
}
    *** EXPRESSION CallExpression *** this.heroService.searchHeroes("")
            .subscribe(heroes => this.heroes = heroes.slice(0, 5))
      ** setPropsOrParams {
  one: 'this',
  two: 'heroService',
  code: 'this.heroService.searchHeroes("")\n' +
    '            .subscribe(heroes => this.heroes = heroes.slice(0, 5))'
}
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'MemberExpression',
    start: 311,
    end: 367,
    object: Node {
      type: 'CallExpression',
      start: 311,
      end: 344,
      callee: [Node],
      arguments: [Array]
    },
    property: Node {
      type: 'Identifier',
      start: 358,
      end: 367,
      name: 'subscribe'
    },
    computed: false
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION MemberExpression *** this.heroService.searchHeroes("")
            .subscribe
      ** setPropsOrParams {
  one: 'this',
  two: 'heroService',
  code: 'this.heroService.searchHeroes("")\n            .subscribe'
}
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'CallExpression',
    start: 311,
    end: 344,
    callee: Node {
      type: 'MemberExpression',
      start: 311,
      end: 340,
      object: [Node],
      property: [Node],
      computed: false
    },
    arguments: [ [Node] ]
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION CallExpression *** this.heroService.searchHeroes("")
      ** setPropsOrParams {
  one: 'this',
  two: 'heroService',
  code: 'this.heroService.searchHeroes("")'
}
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'MemberExpression',
    start: 311,
    end: 340,
    object: Node {
      type: 'MemberExpression',
      start: 311,
      end: 327,
      object: [Node],
      property: [Node],
      computed: false
    },
    property: Node {
      type: 'Identifier',
      start: 328,
      end: 340,
      name: 'searchHeroes'
    },
    computed: false
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION MemberExpression *** this.heroService.searchHeroes
      ** setPropsOrParams {
  one: 'this',
  two: 'heroService',
  code: 'this.heroService.searchHeroes'
}
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'MemberExpression',
    start: 311,
    end: 327,
    object: Node { type: 'ThisExpression', start: 311, end: 315 },
    property: Node {
      type: 'Identifier',
      start: 316,
      end: 327,
      name: 'heroService'
    },
    computed: false
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION MemberExpression *** this.heroService
      ** setPropsOrParams { one: 'this', two: 'heroService', code: 'this.heroService' }
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'ThisExpression', start: 311, end: 315 },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION ThisExpression *** this
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'Literal', start: 341, end: 343, value: '', raw: '""' },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION Literal *** ""
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'ArrowFunctionExpression',
    start: 368,
    end: 410,
    id: null,
    expression: true,
    generator: false,
    async: false,
    params: [ [Node] ],
    body: Node {
      type: 'AssignmentExpression',
      start: 378,
      end: 410,
      operator: '=',
      left: [Node],
      right: [Node]
    }
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION ArrowFunctionExpression *** heroes => this.heroes = heroes.slice(0, 5)
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'AssignmentExpression',
    start: 378,
    end: 410,
    operator: '=',
    left: Node {
      type: 'MemberExpression',
      start: 378,
      end: 389,
      object: [Node],
      property: [Node],
      computed: false
    },
    right: Node {
      type: 'CallExpression',
      start: 392,
      end: 410,
      callee: [Node],
      arguments: [Array]
    }
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION AssignmentExpression *** this.heroes = heroes.slice(0, 5)
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'CallExpression',
    start: 392,
    end: 410,
    callee: Node {
      type: 'MemberExpression',
      start: 392,
      end: 404,
      object: [Node],
      property: [Node],
      computed: false
    },
    arguments: [ [Node], [Node] ]
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION CallExpression *** heroes.slice(0, 5)
      ** setPropsOrParams { one: 'heroes', two: 'slice(0, 5)', code: 'heroes.slice(0, 5)' }
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'MemberExpression',
    start: 392,
    end: 404,
    object: Node { type: 'Identifier', start: 392, end: 398, name: 'heroes' },
    property: Node { type: 'Identifier', start: 399, end: 404, name: 'slice' },
    computed: false
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION MemberExpression *** heroes.slice
      ** setPropsOrParams { one: 'heroes', two: 'slice', code: 'heroes.slice' }
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'Identifier', start: 392, end: 398, name: 'heroes' },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION Identifier *** heroes
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'Literal', start: 405, end: 406, value: 0, raw: '0' },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION Literal *** 0
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'Literal', start: 408, end: 409, value: 5, raw: '5' },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION Literal *** 5
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node {
    type: 'MemberExpression',
    start: 378,
    end: 389,
    object: Node { type: 'ThisExpression', start: 378, end: 382 },
    property: Node { type: 'Identifier', start: 383, end: 389, name: 'heroes' },
    computed: false
  },
  '2': {
    isAsync: false,
    props: { heroService: [Object] },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION MemberExpression *** this.heroes
      ** setPropsOrParams { one: 'this', two: 'heroes', code: 'this.heroes' }
[Arguments] {
  '0': 'fn setMOCKDATA: ',
  '1': Node { type: 'ThisExpression', start: 378, end: 382 },
  '2': {
    isAsync: false,
    props: { heroService: [Object], heroes: {} },
    params: {},
    map: {},
    globals: {}
  },
  '3': undefined
}
    *** EXPRESSION ThisExpression *** this
[Arguments] { '0': '----------- getFuncMockJS: ' }
[Arguments] {
  '0': 'value: ',
  '1': { searchHeroes: [Function (anonymous)] }
}
[Arguments] {
  '0': 'valueFIletered: ',
  '1': [ [ 'searchHeroes', [Function (anonymous)] ] ]
}
[Arguments] {
  '0': 'key2, value2: ',
  '1': 'searchHeroes',
  '2': [Function (anonymous)]
}
[Arguments] {
  '0': '=======NOW JS: ',
  '1': [ 'component.heroService = component.heroService || {}' ]
}
[Arguments] {
  '0': '${thisName}.${key1} = ${thisName}.${key1} || {}: ',
  '1': 'component.heroService = component.heroService || {}'
}
[Arguments] { '0': 'value: ', '1': {} }
[Arguments] { '0': 'valueFIletered: ', '1': [] }
[Arguments] {
  '0': 'allFuncMockJS : ',
  '1': [
    'component.heroService = component.heroService || {}',
    "spyOn(component.heroService, 'searchHeroes').and.returnValue(observableOf({}))"
  ]
}
Generated unit test to /home/ashish/proj/office/f7/langs/typescript/toh-ng-10/app/src/app/dashboard/dashboard.component.spec.ts
