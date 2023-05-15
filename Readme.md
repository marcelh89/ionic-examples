## Steps to reproduce:

- Install ionic cli `npm i -g @ionic/cli`
- Create project `ionic start`
- cd into created project
- Add Android `ionic capacitor add android`
- Add ios `ionic capacitor add ios`
- Run in Browser `ionic serve`
- Run in Android `ionic capacitor run android`
- Run in iOS `ionic capacitor run ios`


## Create template from existing project
- Create project with default starter `ionic start myproject --type=react`
- modify your project to your needs
  - remove dependencies for react like react, react-dom, react-router, react-router-dom, react-scripts
  - add LWC dependencies
  - adjust build scripts to use LWC build
- Set Custom project type `ionic config set --type=lwc`
- Save project as new starter with `ionic start mytemplate --type=lwc --save`
- Create new project using custom starter `ionic start mynewproject --template=mytemplate`
