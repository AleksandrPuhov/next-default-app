import { NextPage } from 'next';

import {
  dehydrate,
  QueryClient,
  useMutation,
  useQueryClient,
} from 'react-query';

import { Cards } from '@/widgets/Cards';
import { fetchPosts, usePosts } from 'src/pages/hooks/usePosts';

const HomePage: NextPage = () => {
  const { data, isLoading, isFetching } = usePosts();

  // console.log('isLoading', isLoading);
  // console.log('isFetching', isFetching);

  // console.log('isFetching', isFetching);

  // const queryClient = useQueryClient();

  // const addComment = useMutation(
  //   (newTodo) => axios.post('/api/data', { text: newTodo }),
  //   {
  //     onMutate: () => {
  //       console.log('sdfsfsdf');
  //     },
  //     onSuccess: () => {
  //       console.log('update');
  //       queryClient.invalidateQueries({ queryKey: 'posts' });
  //     },
  //   }
  // );

  return (
    <>
      <p>HomePage</p>
      <p>{data[0].title}</p>
      <button>asdadadad</button>
      <Cards link={'/about'} name={'About Page'} />
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       staleTime: Infinity,
  //     },
  //   },
  // });

  await queryClient.prefetchQuery('posts', fetchPosts, { staleTime: 0 });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default HomePage;
