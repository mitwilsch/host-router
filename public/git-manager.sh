#/usr/bin/env bash
git clone https://git@github.com/mitwilsch/mitchell.schooler.me
git clone https://git@github.com/mitwilsch/schooler.me

for f in *; do
  cd $f
  git pull
  npm i
  npm run build
done

