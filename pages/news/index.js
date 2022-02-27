import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/this">This is First News</Link>
        </li>
        <li>This is Second News</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
