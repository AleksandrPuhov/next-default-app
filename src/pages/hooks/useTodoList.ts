import { useQuery } from 'react-query';

import apiHelper from '@/app/api/apiHelper';

const fetchTodoList = async () => {
  const parsed = await apiHelper.get('/todos');
  const result = parsed.data;
  return result;
};

const useTodoList = () => {
  return useQuery('todoList', fetchTodoList, {
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};

export { useTodoList, fetchTodoList };
