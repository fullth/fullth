#!/bin/bash

npm start
echo "npm start 스크립트 실행 완료"

# Git diff를 이용하여 변경된 파일 확인
git_diff=$(git diff --name-only README.md)
echo $git_diff
# 변경 여부를 확인하는 조건문
if [ -n "$git_diff" ]; then
  git add .
    git config --local user.email "xoghksdla@gmail.com"
    git config --local user.name "fullth"
    git commit -m "update: README.md"
    git push
  echo "커밋 완료"
else
  echo "변경된 파일이 없습니다."
fi
