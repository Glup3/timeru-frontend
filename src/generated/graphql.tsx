import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Date custom scalar type */
  Date: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type AddCategoryMutationResponse = MutationResponse & {
   __typename?: 'AddCategoryMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  category?: Maybe<Category>,
};

export type AddPermissionMutationResponse = MutationResponse & {
   __typename?: 'AddPermissionMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  permission?: Maybe<Permission>,
};

export type AddProjectMutationResponse = MutationResponse & {
   __typename?: 'AddProjectMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  project?: Maybe<Project>,
};

export type AddUserPermissionMutationResponse = MutationResponse & {
   __typename?: 'AddUserPermissionMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  userPermission?: Maybe<UserPermission>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Category = {
   __typename?: 'Category',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  valuable?: Maybe<Scalars['Boolean']>,
};

export type CategoryInput = {
  title?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  valuable?: Maybe<Scalars['Boolean']>,
};

export type CredentialsInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};


export type LoginMutationResponse = MutationResponse & {
   __typename?: 'LoginMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  token?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  root?: Maybe<Scalars['String']>,
  register?: Maybe<RegisterMutationResponse>,
  login?: Maybe<LoginMutationResponse>,
  invalidateTokens?: Maybe<Scalars['Boolean']>,
  addCategory?: Maybe<AddCategoryMutationResponse>,
  removeCategory?: Maybe<RemoveCategoryMutationResponse>,
  updateCategory?: Maybe<UpdateCategoryMutationResponse>,
  updateUser?: Maybe<UpdateUserMutationResponse>,
  addPermission?: Maybe<AddPermissionMutationResponse>,
  updatePermission?: Maybe<UpdatePermissionMutationResponse>,
  removePermission?: Maybe<RemovePermissionMutationResponse>,
  addProject?: Maybe<AddProjectMutationResponse>,
  updateProject?: Maybe<UpdateProjectMutationResponse>,
  removeProject?: Maybe<RemoveProjectMutationResponse>,
  addUserPermission?: Maybe<AddUserPermissionMutationResponse>,
  startTimer?: Maybe<StartTimerMutationResponse>,
  stopTimer?: Maybe<StopTimerMutationResponse>,
};


export type MutationRegisterArgs = {
  credentials: CredentialsInput,
  personalInfo: PersonalInfoInput
};


export type MutationLoginArgs = {
  credentials: CredentialsInput
};


export type MutationAddCategoryArgs = {
  category: CategoryInput
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['ID']
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'],
  category: CategoryInput
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'],
  user: UserInput
};


export type MutationAddPermissionArgs = {
  permission: PermissionInput
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'],
  permission: PermissionInput
};


export type MutationRemovePermissionArgs = {
  id: Scalars['ID']
};


export type MutationAddProjectArgs = {
  project: ProjectInput
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID'],
  project: ProjectInput
};


export type MutationRemoveProjectArgs = {
  id: Scalars['ID']
};


export type MutationAddUserPermissionArgs = {
  userPermissionInput: UserPermissionInput
};


export type MutationStartTimerArgs = {
  timerInput: StartTimerInput
};

export type MutationResponse = {
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
};

export type Permission = {
   __typename?: 'Permission',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
};

export type PermissionInput = {
  title?: Maybe<Scalars['String']>,
};

export type PersonalInfoInput = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};

export type Project = {
   __typename?: 'Project',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  codename?: Maybe<Scalars['String']>,
};

export type ProjectInput = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  codename?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  root?: Maybe<Scalars['String']>,
  me?: Maybe<User>,
  categories?: Maybe<Array<Maybe<Category>>>,
  category?: Maybe<Category>,
  permissions?: Maybe<Array<Maybe<Permission>>>,
  permission?: Maybe<Permission>,
  projects?: Maybe<Array<Maybe<Project>>>,
  project?: Maybe<Project>,
  timeEntries?: Maybe<Array<Maybe<TimeEntry>>>,
  isTimerRunning?: Maybe<Scalars['Boolean']>,
};


export type QueryCategoryArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryPermissionArgs = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>
};


export type QueryProjectArgs = {
  id?: Maybe<Scalars['ID']>,
  codename?: Maybe<Scalars['String']>
};


export type QueryTimeEntriesArgs = {
  start: Scalars['Date'],
  end: Scalars['Date']
};

export type RegisterMutationResponse = MutationResponse & {
   __typename?: 'RegisterMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
};

export type RemoveCategoryMutationResponse = MutationResponse & {
   __typename?: 'RemoveCategoryMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  category?: Maybe<Category>,
};

export type RemovePermissionMutationResponse = MutationResponse & {
   __typename?: 'RemovePermissionMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  permission?: Maybe<Permission>,
};

export type RemoveProjectMutationResponse = MutationResponse & {
   __typename?: 'RemoveProjectMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  project?: Maybe<Project>,
};

export type StartTimerInput = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  valuable?: Maybe<Scalars['Boolean']>,
  projectId?: Maybe<Scalars['ID']>,
  categoryId?: Maybe<Scalars['ID']>,
};

export type StartTimerMutationResponse = MutationResponse & {
   __typename?: 'StartTimerMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  timeEntry?: Maybe<TimeEntry>,
};

export type StopTimerMutationResponse = MutationResponse & {
   __typename?: 'StopTimerMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  timeEntry?: Maybe<TimeEntry>,
};

export type TimeEntry = {
   __typename?: 'TimeEntry',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Date']>,
  end?: Maybe<Scalars['Date']>,
  duration?: Maybe<Scalars['Int']>,
  valuable?: Maybe<Scalars['Boolean']>,
  user?: Maybe<User>,
  project?: Maybe<Project>,
  category?: Maybe<Category>,
};

export type UpdateCategoryMutationResponse = MutationResponse & {
   __typename?: 'UpdateCategoryMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  category?: Maybe<Category>,
};

export type UpdatePermissionMutationResponse = MutationResponse & {
   __typename?: 'UpdatePermissionMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  permission?: Maybe<Permission>,
};

export type UpdateProjectMutationResponse = MutationResponse & {
   __typename?: 'UpdateProjectMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  project?: Maybe<Project>,
};

export type UpdateUserMutationResponse = MutationResponse & {
   __typename?: 'UpdateUserMutationResponse',
  code: Scalars['String'],
  success: Scalars['Boolean'],
  message: Scalars['String'],
  user?: Maybe<User>,
};


export type User = {
   __typename?: 'User',
  username?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['Boolean']>,
};

export type UserInput = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['Boolean']>,
  role?: Maybe<Scalars['String']>,
};

export type UserPermission = {
   __typename?: 'UserPermission',
  id?: Maybe<Scalars['ID']>,
  user?: Maybe<User>,
  project?: Maybe<Project>,
  permission?: Maybe<Permission>,
};

export type UserPermissionInput = {
  userId?: Maybe<Scalars['ID']>,
  username?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  projectCodename?: Maybe<Scalars['String']>,
  permissionId?: Maybe<Scalars['ID']>,
  permissionTitle?: Maybe<Scalars['String']>,
};

export type LoginMutationVariables = {
  credentials: CredentialsInput
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: Maybe<(
    { __typename?: 'LoginMutationResponse' }
    & Pick<LoginMutationResponse, 'code' | 'success' | 'message' | 'token'>
  )> }
);

export type RegisterMutationVariables = {
  credentials: CredentialsInput,
  personalInfo: PersonalInfoInput
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: Maybe<(
    { __typename?: 'RegisterMutationResponse' }
    & Pick<RegisterMutationResponse, 'code' | 'success' | 'message'>
  )> }
);

export type StartTimerMutationVariables = {
  timerInput: StartTimerInput
};


export type StartTimerMutation = (
  { __typename?: 'Mutation' }
  & { startTimer: Maybe<(
    { __typename?: 'StartTimerMutationResponse' }
    & Pick<StartTimerMutationResponse, 'code' | 'success' | 'message'>
    & { timeEntry: Maybe<(
      { __typename?: 'TimeEntry' }
      & Pick<TimeEntry, 'title' | 'start'>
    )> }
  )> }
);

export type StopTimerMutationVariables = {};


export type StopTimerMutation = (
  { __typename?: 'Mutation' }
  & { stopTimer: Maybe<(
    { __typename?: 'StopTimerMutationResponse' }
    & Pick<StopTimerMutationResponse, 'code' | 'success' | 'message'>
  )> }
);

export type IsTimerRunningQueryVariables = {};


export type IsTimerRunningQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isTimerRunning'>
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'firstName' | 'lastName' | 'email' | 'role' | 'active'>
  )> }
);

export type TimeEntriesQueryVariables = {
  start: Scalars['Date'],
  end: Scalars['Date']
};


export type TimeEntriesQuery = (
  { __typename?: 'Query' }
  & { timeEntries: Maybe<Array<Maybe<(
    { __typename?: 'TimeEntry' }
    & Pick<TimeEntry, 'id' | 'title' | 'description' | 'start' | 'end' | 'valuable'>
    & { project: Maybe<(
      { __typename?: 'Project' }
      & Pick<Project, 'color' | 'codename'>
    )>, category: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'title'>
    )> }
  )>>> }
);


export const LoginDocument = gql`
    mutation Login($credentials: CredentialsInput!) {
  login(credentials: $credentials) {
    code
    success
    message
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($credentials: CredentialsInput!, $personalInfo: PersonalInfoInput!) {
  register(credentials: $credentials, personalInfo: $personalInfo) {
    code
    success
    message
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *      personalInfo: // value for 'personalInfo'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const StartTimerDocument = gql`
    mutation StartTimer($timerInput: StartTimerInput!) {
  startTimer(timerInput: $timerInput) {
    code
    success
    message
    timeEntry {
      title
      start
    }
  }
}
    `;
export type StartTimerMutationFn = ApolloReactCommon.MutationFunction<StartTimerMutation, StartTimerMutationVariables>;

/**
 * __useStartTimerMutation__
 *
 * To run a mutation, you first call `useStartTimerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartTimerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startTimerMutation, { data, loading, error }] = useStartTimerMutation({
 *   variables: {
 *      timerInput: // value for 'timerInput'
 *   },
 * });
 */
export function useStartTimerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartTimerMutation, StartTimerMutationVariables>) {
        return ApolloReactHooks.useMutation<StartTimerMutation, StartTimerMutationVariables>(StartTimerDocument, baseOptions);
      }
export type StartTimerMutationHookResult = ReturnType<typeof useStartTimerMutation>;
export type StartTimerMutationResult = ApolloReactCommon.MutationResult<StartTimerMutation>;
export type StartTimerMutationOptions = ApolloReactCommon.BaseMutationOptions<StartTimerMutation, StartTimerMutationVariables>;
export const StopTimerDocument = gql`
    mutation StopTimer {
  stopTimer {
    code
    success
    message
  }
}
    `;
export type StopTimerMutationFn = ApolloReactCommon.MutationFunction<StopTimerMutation, StopTimerMutationVariables>;

/**
 * __useStopTimerMutation__
 *
 * To run a mutation, you first call `useStopTimerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopTimerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopTimerMutation, { data, loading, error }] = useStopTimerMutation({
 *   variables: {
 *   },
 * });
 */
export function useStopTimerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StopTimerMutation, StopTimerMutationVariables>) {
        return ApolloReactHooks.useMutation<StopTimerMutation, StopTimerMutationVariables>(StopTimerDocument, baseOptions);
      }
export type StopTimerMutationHookResult = ReturnType<typeof useStopTimerMutation>;
export type StopTimerMutationResult = ApolloReactCommon.MutationResult<StopTimerMutation>;
export type StopTimerMutationOptions = ApolloReactCommon.BaseMutationOptions<StopTimerMutation, StopTimerMutationVariables>;
export const IsTimerRunningDocument = gql`
    query IsTimerRunning {
  isTimerRunning
}
    `;

/**
 * __useIsTimerRunningQuery__
 *
 * To run a query within a React component, call `useIsTimerRunningQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsTimerRunningQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsTimerRunningQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsTimerRunningQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IsTimerRunningQuery, IsTimerRunningQueryVariables>) {
        return ApolloReactHooks.useQuery<IsTimerRunningQuery, IsTimerRunningQueryVariables>(IsTimerRunningDocument, baseOptions);
      }
export function useIsTimerRunningLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IsTimerRunningQuery, IsTimerRunningQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IsTimerRunningQuery, IsTimerRunningQueryVariables>(IsTimerRunningDocument, baseOptions);
        }
export type IsTimerRunningQueryHookResult = ReturnType<typeof useIsTimerRunningQuery>;
export type IsTimerRunningLazyQueryHookResult = ReturnType<typeof useIsTimerRunningLazyQuery>;
export type IsTimerRunningQueryResult = ApolloReactCommon.QueryResult<IsTimerRunningQuery, IsTimerRunningQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    username
    firstName
    lastName
    email
    role
    active
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const TimeEntriesDocument = gql`
    query TimeEntries($start: Date!, $end: Date!) {
  timeEntries(start: $start, end: $end) {
    id
    title
    description
    start
    end
    valuable
    project {
      color
      codename
    }
    category {
      title
    }
  }
}
    `;

/**
 * __useTimeEntriesQuery__
 *
 * To run a query within a React component, call `useTimeEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimeEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimeEntriesQuery({
 *   variables: {
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useTimeEntriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TimeEntriesQuery, TimeEntriesQueryVariables>) {
        return ApolloReactHooks.useQuery<TimeEntriesQuery, TimeEntriesQueryVariables>(TimeEntriesDocument, baseOptions);
      }
export function useTimeEntriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TimeEntriesQuery, TimeEntriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TimeEntriesQuery, TimeEntriesQueryVariables>(TimeEntriesDocument, baseOptions);
        }
export type TimeEntriesQueryHookResult = ReturnType<typeof useTimeEntriesQuery>;
export type TimeEntriesLazyQueryHookResult = ReturnType<typeof useTimeEntriesLazyQuery>;
export type TimeEntriesQueryResult = ApolloReactCommon.QueryResult<TimeEntriesQuery, TimeEntriesQueryVariables>;