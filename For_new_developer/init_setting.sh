## this is for new contributer

cd ..
npm install
npm install husky --save-dev
npm pkg set scripts.prepare="husky install"
npm run prepare
git config --global commit.template .gitmessage.txt