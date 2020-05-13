# RegisFoundation
Dr. ANS Regis Foundation

## Setup
The RegisFoundation repository contains 2 folders, FrontEnd and BackEnd. The front-end folder contains the angular application.
Please refer to the README.md file in FrontEnd for more information.
Note: The BackEnd folder is still in development, and wil be used to run the production front-end artifacts in ./FrontEnd/dist.

## Cloning

Clone the master branch of the entire RegisFoundation repository.
Navigate to the ***FrontEnd** project folder.
Run npm install in the cloned **FrontEnd** project folder.
Ensure that @angular/cli has been installed globally. If not, run npm install -g @angular/cli.
Follow the steps in the FrontEnd/README.md to run a dev server or build the angular project.

## Collaboration

The master branch is only for final reviewed commits.

**Making Changes:**
1. **Create a new branch off of dev branch named feature/FEATURE_NAME and update the repo.**
  * git checkout dev--
  * git checkout -b feature/FEATURE_NAME
  * git push -u origin feature/FEATURE_NAME
2. **Commit changes locally and push to the repo.**
  * make feature changes in feature/FEATURE_NAME
  * git commit -am "COMMIT MESSAGE"
  * git push origin feature/FEATURE_NAME
3. **Create a pull request for review.**
4. **Merge the branch to the dev branch and delete the feature branch.**
  * git checkout dev
  * git merge feature/FEATURE_NAME
  * git push
  * git push -d origin feature/FEATURE_NAME
  * git branch -d feature/FEATURE_NAME
5. **The dev branch will be progressively merged to master.**
