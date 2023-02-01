import { NextPage } from 'next';

import {
  dehydrate,
  QueryClient,
  useMutation,
  useQueryClient,
} from 'react-query';

import { Cards } from '@/widgets/Cards';

import { fetchTodoList } from 'src/pages/hooks/useTodoList';
import apiHelper from '@/app/api/apiHelper';

const HomePage: NextPage = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTodo: { id: number; name: string; count: number }) => {
      return apiHelper.post('/todos', newTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('todoList');
    },
  });

  return (
    <>
      <p>HomePage</p>
      <button
        onClick={() => {
          mutation.mutate({
            id: 0,
            name: 'New Name',
            count: 1,
          });
        }}
      >
        asdadadad
      </button>
      <Cards link={'/about'} name={'About Page'} />
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: false,
      },
    },
  });

  await queryClient.prefetchQuery('todoList', fetchTodoList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default HomePage;
