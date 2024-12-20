import { IPermissionPolicy } from '@sharedtypes/aim/permission-policy';

export interface GetPoliciesByAccountIdResponse {
  policies: IPermissionPolicy[];
}

export interface GetPolicyByIdResponse {
  policy: IPermissionPolicy;
}

export type CreatePolicyRequest = {
  alias: string;
  description: string;
  rules: {
    effect: 'allow' | 'deny';
    actions: string[];
    resources: string[];
  }[];
};

export interface CreatePolicyResponse {
  message: string;
}

export interface UpdatePolicyRequest {
  policy: {
    alias: string;
    description: string;
    rules: {
      effect: 'allow' | 'deny';
      actions: string[];
      resources: string[];
    }[];
  };
  policyId: string;
}

export interface UpdatePolicyResponse {
  message: string;
}

export interface AttachUsersToPolicyRequest {
  policyId: string;
  userIds: string[];
}

export interface DetachUsersFromPolicyRequest {
  policyId: string;
  userIds: string[];
}
