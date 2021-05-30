rm -fr dist && 
yarn build && 
cd dist && 
git init && 
git add . && 
git commit -m "update" && 
git branch -M master && 
git remote add origin git@github.com:yangjindong/taste.git && 
git push -f -u origin master && 
cd -
echo https://yangjindong.github.io/taste/index.html