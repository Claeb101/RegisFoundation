# Regis

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Collaboration

The master branch is only for final reviewed commits.

Making Changes:
1. Create a new branch off of dev branch named feature/FEATURE_NAME and update the repo.
  * git checkout dev--
  * git checkout -b feature/FEATURE_NAME
  * git push -u origin feature/FEATURE_NAME
2. Commit changes locally and push to the repo.
  * **make changes**
  * git commit -am "COMMIT MESSAGE"
  * git push origin feature/FEATURE_NAME
3. Create a pull request for review.
4. Merge the branch to the dev branch and delete the feature branch.
  * git checkout dev
  * git merge feature/FEATURE_NAME
  * git push
  * git push -d origin feature/FEATURE_NAME
  * git branch -d feature/FEATURE_NAME
5. The dev branch will be progressively merged to master.

## Cloning

Clone the master branch.
Run npm install in the cloned project folder.
Ensure that @angular/cli has been installed globally. If not, run npm install -g @angular/cli.
Follow the steps below to run a dev server or build the project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
