//our-domain.com/news
import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page 2 </h1>
      <ul>
        <li>
          <Link href='/news/news1'>news 1</Link>
        </li>
        <li>news 2</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
