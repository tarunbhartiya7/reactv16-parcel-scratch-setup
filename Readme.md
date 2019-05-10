1. Formatting code
   install prettier - yarn add -D prettier

   run prettier on file - npx prettier App.js --write

2. Autoformat on save
   create a .prettierrc file with an empty object in it
   install prettier extension by Esben
   make changes in settings.json

3. Integrate prettier check on CI tool
   add check script in package.json and then it reports error if any file is not formatteds
