#/usr/bin/env bash
git clone git@github.com:mitwilsch/mitchell.schooler.me
git clone git@github.com:mitwilsch/schooler.me

for d in */; do
  cd $d
  git pull
  npm i
  npm run build
  cd ..
done