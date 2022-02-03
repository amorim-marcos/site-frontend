import { GetServerSideProps } from 'next'
import { Post } from 'types/data'
import CanalBNK from 'views/Canal-BNK'

import { POSTS } from 'mocks/canal_bnk'

export interface CanalBnkProps {
  posts: Post[]
}

export default function CanalBnk(props: CanalBnkProps) {
  return <CanalBNK posts={props.posts} />
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: { posts: POSTS } }
}
