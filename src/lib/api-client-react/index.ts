// NOTE: This is a stub API client for standalone deployment.
// In production, update this to use your actual API endpoints or
// redeploy the full monorepo to Vercel with proper workspace configuration.

export { setBaseUrl, setAuthTokenGetter } from './custom-fetch';
export type { AuthTokenGetter } from './custom-fetch';

// Stub exports - replace with actual API endpoints when available
export const useGetAdminAnalytics = () => ({ data: null, isLoading: false, error: null });
export const useListAdminOrders = () => ({ data: null, isLoading: false, error: null });
export const useUpdateAdminOrderStatus = () => ({ mutate: () => {}, isPending: false });
export const getListAdminOrdersQueryKey = () => ['/api/admin/orders'];

export const useListAdminCategories = () => ({ data: null, isLoading: false, error: null });
export const useCreateAdminCategory = () => ({ mutate: () => {}, isPending: false });
export const useDeleteAdminCategory = () => ({ mutate: () => {}, isPending: false });
export const getListAdminCategoriesQueryKey = () => ['/api/admin/categories'];

export const useListAdminMenuItems = () => ({ data: null, isLoading: false, error: null });
export const useCreateAdminMenuItem = () => ({ mutate: () => {}, isPending: false });
export const useUpdateAdminMenuItem = () => ({ mutate: () => {}, isPending: false });
export const useDeleteAdminMenuItem = () => ({ mutate: () => {}, isPending: false });
export const getListAdminMenuItemsQueryKey = () => ['/api/admin/menu'];

export const useGetAdminBanners = () => ({ data: null, isLoading: false, error: null });
export const useUpdateAdminBanners = () => ({ mutate: () => {}, isPending: false });
export const useRequestUploadUrl = () => ({ mutate: () => {}, isPending: false });
export const useHealthCheck = () => ({ data: null, isLoading: false, error: null });
