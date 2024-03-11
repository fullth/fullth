git diff --quiet HEAD README.md
if [ $? -ne 0 ]; then
  echo "README has not changed. Skipping update."
  exit 0
else
  npm start
  git add .
  git config --local user.email "xoghksdla@gmail.com"
  git config --local user.name "fullth"
  git commit -m "update: ReadMe.md"
  git push
fi