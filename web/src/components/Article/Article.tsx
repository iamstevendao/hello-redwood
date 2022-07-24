import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <>
      <article key={article.id}>
        <header>
          <h2>
            <Link to={routes.article({ id: article.id })}>{article.title}</Link>
          </h2>
        </header>
        <p>{article.body}</p>
        <div>Posted at: {article.createdAt}</div>
      </article>
    </>
  )
}

export default Article
