npm start
echo "npm start 스크립트 실행 완료"
git diff --quiet HEAD README.md
diff_exit_code=$?
echo $diff_exit_code
if [ $diff_exit_code -eq 0 ]; then
  echo "변경사항 없음"
else
  git add .
  git config --local user.email "xoghksdla@gmail.com"
  git config --local user.name "fullth"
  git commit -m "update: README.md"
  git push
  echo "커밋 후 푸쉬"
fi
