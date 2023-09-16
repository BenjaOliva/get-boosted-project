import create from 'zustand';
import { persist } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { environment } from '../conf';

export type AsyncStore<T> = {
  data?: T;
  error?: any;
  loading: boolean;
  execute: (
    asyncFunction: () => Promise<T>,
    onSuccess?: (data: T) => void,
    onError?: (e: any) => void
  ) => void;
  setData: (data: T) => void;
};

export type AsyncStoreOptions<T> = {
  defaultValue?: T;
  defaultLoading?: boolean;
  persistKey?: string;
  userPrivate?: boolean;
  debugName?: string;
};

const userPrivateAsyncStores: AsyncStore<any>[] = [];
const asyncStores: AsyncStore<any>[] = [];

export const createAsyncStore = <T>(
  options?: AsyncStoreOptions<T>
): (() => AsyncStore<T>) => {
  const asyncStoreMethods = (
    set: (
      partial:
        | AsyncStore<T>
        | Partial<AsyncStore<T>>
        | ((state: AsyncStore<T>) => AsyncStore<T> | Partial<AsyncStore<T>>),
      replace?: boolean
    ) => void,
    get: () => AsyncStore<T>
  ) => ({
    data: options?.defaultValue,
    error: undefined,
    loading: options?.defaultLoading ?? false,
    execute: async (
      asyncFunction: () => Promise<T>,
      onSuccess?: (data: T) => void,
      onError?: (e: any) => void
    ) => {
      const setData = (data: T) => set(() => ({ data }));
      const setError = (error: any) => set(() => ({ error }));
      const setLoading = (loading: boolean) => set(() => ({ loading }));

      let successful = false;
      let fetchData;
      let reqError;

      try {
        setLoading(true);
        fetchData = await asyncFunction();
        setData(fetchData);
        successful = true;
      } catch (e) {
        console.log(e);
        reqError = e;
        setError(e);
        successful = false;
      }
      setLoading(false);

      if (successful) {
        onSuccess && onSuccess(fetchData);
      } else {
        onError && onError(reqError);
      }
    },
    setData: data => set(() => ({ data })),
  });

  let asyncStore;

  if (options?.persistKey) {
    asyncStore = create<AsyncStore<T>>()(
      persist(asyncStoreMethods, { name: options.persistKey })
    );
  } else {
    asyncStore = create<AsyncStore<T>>()(asyncStoreMethods);
  }

  if (environment === 'development' && options.debugName) {
    mountStoreDevtool(options.debugName, asyncStore);
  }

  asyncStores.push(asyncStore);

  if (options.userPrivate) {
    userPrivateAsyncStores.push(asyncStore);
  }

  return asyncStore;
};

export const deleteStores = (storesToDelete: 'all' | 'privates') => {
  const stores =
    storesToDelete === 'all' ? asyncStores : userPrivateAsyncStores;

  stores?.forEach(store => {
    //@ts-ignore
    store.getState().setData(undefined);
  });
};
