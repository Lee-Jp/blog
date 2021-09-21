#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo '*********** 打包项目 ************'
npm run docs:build

echo '*********** 部署项目 ************'
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Lee-Jp/blog.git master:gh-pages

cd -
rm -rf docs/.vuepress/dist

echo '*********** 部署成功 ************'
