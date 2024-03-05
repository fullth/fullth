import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

let text = `# Hi there 👋

## 이런 환경에 익숙해요✍🏼

## Language

<p>
  <img alt="" src= "https://img.shields.io/badge/TypeScript-black?logo=typescript&logoColor=blue"/>
  <img alt="" src= "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> 
</p>

## 📕 Latest Blog Posts

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

  console.log('업데이트 완료')
})();
