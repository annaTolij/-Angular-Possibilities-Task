# Work with Angular 2+

Task:
1. Создать приложение angular с препроцессором scc – scss.
2. Показать знание lazy loading – должно после ng build –prod сгенерироваться больше js файлов, чем без lazy loading.
3. Сделать компонент login с валидацией полей через реактивные формы и отправкой значения из формы на адрес (localhost:3000/api/login), вывести на экран ошибку о том, что запрос не отправился.
4. Сделать компонент registration с валидацией полей через реактивные формы и отправкой значения из формы на адрес (localhost:3000/api/registration), вывести на экран ошибку о том, что запрос не отправился.
   Поля - name, password, confirm, email/phone
   Должно быть одно поле для email или phone – сделать одновременную валидацию на два типа. 
5. Сделать отдельным компонентом хедер
6. Сделать компонент с таблицей данных, в которой реализованы фильтр по всем полям таблицы и сортировки
7. Сделать компонент, который по кнопке переходит на другой компонент, передавая в роутере параметр (localhost:порт приложения/example/params/4). Во втором компоненте сделать отображение этого параметра на экране (второй компонент должен был children для первого в роутинге).
8. Создать menu компонент, который будет содержать ссылки на все эти компоненты.
9. Создать компонент-родитель и в нём реализовать 3 компонента-ребёнка. Продемонстрировать передачу между ними параметров, с помощью Input, Output. Связи между каждым компонентом приветствуются.

 Реализовать все страницы с angular material

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
