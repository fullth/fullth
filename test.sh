git diff --quiet HEAD README.md
if [ $? -eq 0 ]; then
  echo "README has not changed. Skipping update."
  exit 0
else
  npm start
  git add .
  git config --local user.email "xoghksdla@gmail.com"
  git config --local user.name "fullth"
  git commit -m "update: README.md"
  git push
fi