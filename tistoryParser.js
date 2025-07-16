import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

let text = `## 👋 Hi there 
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=fullth&layout=compact&hide=r,jupyter%20notebook,c%23&exclude_repo=roharui.github.io)](https://github.com/anuraghazra/github-readme-stats)

## 📕 Latest Blog Posts
[![Readme Update](https://github.com/fullth/fullth/actions/workflows/main.yml/badge.svg)](https://github.com/fullth/fullth/actions/workflows/main.yml)</br>
`;

// rss-parser 생성
const parser = new Parser({
  headers: {
    Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
  }});

(async () => {
  const feed = await parser.parseURL('https://fullth.tistory.com/rss');

  for (let i = 0; i < 5; i++) {
    const {title, link} = feed.items[i];
    console.log(`${i + 1}번째 게시물`);
    console.log(`추가될 제목: ${title}`);
    console.log(`추가될 링크: ${link}`);
    text += `<a href=${link}>${title}</a></br>`;
  }

  // README.md 파일 작성
  writeFileSync('README.md', text, 'utf8', (e) => {
    console.log(e)
  })
})();
