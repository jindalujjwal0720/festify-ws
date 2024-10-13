import { IBESInstance } from '@sharedtypes/bes';
import { api } from '@rootui/api';

const besInstancesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBESInstances: builder.query({
      query: () => ({
        url: `/v1/d/bes/instances`,
        method: 'GET',
      }),
      providesTags: ['BESInstance'],
    }),
    getInstanceById: builder.query({
      query: (instanceId: string) => ({
        url: `/v1/d/bes/instances/${instanceId}`,
        method: 'GET',
      }),
      providesTags: ['BESInstance'],
    }),
    getBESInstanceByAlias: builder.query({
      query: (alias: string) => ({
        url: `/v1/d/bes/instances/alias/${alias}`,
        method: 'GET',
      }),
      providesTags: ['BESInstance'],
    }),
    createBESInstance: builder.mutation({
      query: (data: Partial<IBESInstance>) => ({
        url: `/v1/d/bes/instances`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['BESInstance'],
    }),
    updateBESInstance: builder.mutation({
      query: ({
        instanceId,
        instance,
      }: {
        instanceId: string;
        instance: Partial<IBESInstance>;
      }) => ({
        url: `/v1/d/bes/instances/${instanceId}`,
        method: 'PATCH',
        body: instance,
      }),
      invalidatesTags: ['BESInstance'],
    }),
    deleteBESInstances: builder.mutation({
      query: (instanceIds: string[]) => ({
        url: `/v1/d/bes/instances`,
        method: 'DELETE',
        body: { instanceIds },
      }),
      invalidatesTags: ['BESInstance'],
    }),
  }),
});

export const {
  useGetBESInstancesQuery,
  useGetBESInstanceByAliasQuery,
  useCreateBESInstanceMutation,
  useUpdateBESInstanceMutation,
  useDeleteBESInstancesMutation,
} = besInstancesApi;
