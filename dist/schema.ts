import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    numeric: any,
    timestamptz: any,
}


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "radiate.dipdup_state" */
    deleteRadiateDipdupState?: radiate_dipdup_state_mutation_response
    /** delete single row from the table: "radiate.dipdup_state" */
    deleteRadiateDipdupStateByPk?: radiate_dipdup_state
    /** delete data from the table: "radiate.history" */
    deleteRadiateHistory?: radiate_history_mutation_response
    /** delete single row from the table: "radiate.history" */
    deleteRadiateHistoryByPk?: radiate_history
    /** delete data from the table: "radiate.stream" */
    deleteRadiateStream?: radiate_stream_mutation_response
    /** delete single row from the table: "radiate.stream" */
    deleteRadiateStreamByPk?: radiate_stream
    /** insert data into the table: "radiate.dipdup_state" */
    insertRadiateDipdupState?: radiate_dipdup_state_mutation_response
    /** insert a single row into the table: "radiate.dipdup_state" */
    insertRadiateDipdupStateOne?: radiate_dipdup_state
    /** insert data into the table: "radiate.history" */
    insertRadiateHistory?: radiate_history_mutation_response
    /** insert a single row into the table: "radiate.history" */
    insertRadiateHistoryOne?: radiate_history
    /** insert data into the table: "radiate.stream" */
    insertRadiateStream?: radiate_stream_mutation_response
    /** insert a single row into the table: "radiate.stream" */
    insertRadiateStreamOne?: radiate_stream
    /** update data of the table: "radiate.dipdup_state" */
    updateRadiateDipdupState?: radiate_dipdup_state_mutation_response
    /** update single row of the table: "radiate.dipdup_state" */
    updateRadiateDipdupStateByPk?: radiate_dipdup_state
    /** update data of the table: "radiate.history" */
    updateRadiateHistory?: radiate_history_mutation_response
    /** update single row of the table: "radiate.history" */
    updateRadiateHistoryByPk?: radiate_history
    /** update data of the table: "radiate.stream" */
    updateRadiateStream?: radiate_stream_mutation_response
    /** update single row of the table: "radiate.stream" */
    updateRadiateStreamByPk?: radiate_stream
    __typename: 'mutation_root'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
    /** fetch data from the table: "radiate.dipdup_state" */
    radiateDipdupState: radiate_dipdup_state[]
    /** fetch aggregated fields from the table: "radiate.dipdup_state" */
    radiateDipdupStateAggregate: radiate_dipdup_state_aggregate
    /** fetch data from the table: "radiate.dipdup_state" using primary key columns */
    radiateDipdupStateByPk?: radiate_dipdup_state
    /** fetch data from the table: "radiate.history" */
    radiateHistory: radiate_history[]
    /** fetch aggregated fields from the table: "radiate.history" */
    radiateHistoryAggregate: radiate_history_aggregate
    /** fetch data from the table: "radiate.history" using primary key columns */
    radiateHistoryByPk?: radiate_history
    /** fetch data from the table: "radiate.stream" */
    radiateStream: radiate_stream[]
    /** fetch aggregated fields from the table: "radiate.stream" */
    radiateStreamAggregate: radiate_stream_aggregate
    /** fetch data from the table: "radiate.stream" using primary key columns */
    radiateStreamByPk?: radiate_stream
    __typename: 'query_root'
}


/**
 * Stores current level of index and hash of it's config
 * 
 * 
 * columns and relationships of "radiate.dipdup_state"
 * 
 */
export interface radiate_dipdup_state {
    hash?: Scalars['String']
    indexHash: Scalars['String']
    indexName: Scalars['String']
    /** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
    indexType: Scalars['String']
    level: Scalars['Int']
    __typename: 'radiate_dipdup_state'
}


/** aggregated selection of "radiate.dipdup_state" */
export interface radiate_dipdup_state_aggregate {
    aggregate?: radiate_dipdup_state_aggregate_fields
    nodes: radiate_dipdup_state[]
    __typename: 'radiate_dipdup_state_aggregate'
}


/** aggregate fields of "radiate.dipdup_state" */
export interface radiate_dipdup_state_aggregate_fields {
    avg?: radiate_dipdup_state_avg_fields
    count: Scalars['Int']
    max?: radiate_dipdup_state_max_fields
    min?: radiate_dipdup_state_min_fields
    stddev?: radiate_dipdup_state_stddev_fields
    stddev_pop?: radiate_dipdup_state_stddev_pop_fields
    stddev_samp?: radiate_dipdup_state_stddev_samp_fields
    sum?: radiate_dipdup_state_sum_fields
    var_pop?: radiate_dipdup_state_var_pop_fields
    var_samp?: radiate_dipdup_state_var_samp_fields
    variance?: radiate_dipdup_state_variance_fields
    __typename: 'radiate_dipdup_state_aggregate_fields'
}


/** aggregate avg on columns */
export interface radiate_dipdup_state_avg_fields {
    level?: Scalars['Float']
    __typename: 'radiate_dipdup_state_avg_fields'
}


/** unique or primary key constraints on table "radiate.dipdup_state" */
export type radiate_dipdup_state_constraint = 'dipdup_state_pkey'


/** aggregate max on columns */
export interface radiate_dipdup_state_max_fields {
    hash?: Scalars['String']
    indexHash?: Scalars['String']
    indexName?: Scalars['String']
    /** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
    indexType?: Scalars['String']
    level?: Scalars['Int']
    __typename: 'radiate_dipdup_state_max_fields'
}


/** aggregate min on columns */
export interface radiate_dipdup_state_min_fields {
    hash?: Scalars['String']
    indexHash?: Scalars['String']
    indexName?: Scalars['String']
    /** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
    indexType?: Scalars['String']
    level?: Scalars['Int']
    __typename: 'radiate_dipdup_state_min_fields'
}


/** response of any mutation on the table "radiate.dipdup_state" */
export interface radiate_dipdup_state_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: radiate_dipdup_state[]
    __typename: 'radiate_dipdup_state_mutation_response'
}


/** select columns of table "radiate.dipdup_state" */
export type radiate_dipdup_state_select_column = 'hash' | 'indexHash' | 'indexName' | 'indexType' | 'level'


/** aggregate stddev on columns */
export interface radiate_dipdup_state_stddev_fields {
    level?: Scalars['Float']
    __typename: 'radiate_dipdup_state_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface radiate_dipdup_state_stddev_pop_fields {
    level?: Scalars['Float']
    __typename: 'radiate_dipdup_state_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface radiate_dipdup_state_stddev_samp_fields {
    level?: Scalars['Float']
    __typename: 'radiate_dipdup_state_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface radiate_dipdup_state_sum_fields {
    level?: Scalars['Int']
    __typename: 'radiate_dipdup_state_sum_fields'
}


/** update columns of table "radiate.dipdup_state" */
export type radiate_dipdup_state_update_column = 'hash' | 'indexHash' | 'indexName' | 'indexType' | 'level'


/** aggregate var_pop on columns */
export interface radiate_dipdup_state_var_pop_fields {
    level?: Scalars['Float']
    __typename: 'radiate_dipdup_state_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface radiate_dipdup_state_var_samp_fields {
    level?: Scalars['Float']
    __typename: 'radiate_dipdup_state_var_samp_fields'
}


/** aggregate variance on columns */
export interface radiate_dipdup_state_variance_fields {
    level?: Scalars['Float']
    __typename: 'radiate_dipdup_state_variance_fields'
}


/** columns and relationships of "radiate.history" */
export interface radiate_history {
    amount: Scalars['numeric']
    id: Scalars['Int']
    /** An object relationship */
    stream: radiate_stream
    streamId: Scalars['Int']
    timestamp: Scalars['timestamptz']
    __typename: 'radiate_history'
}


/** aggregated selection of "radiate.history" */
export interface radiate_history_aggregate {
    aggregate?: radiate_history_aggregate_fields
    nodes: radiate_history[]
    __typename: 'radiate_history_aggregate'
}


/** aggregate fields of "radiate.history" */
export interface radiate_history_aggregate_fields {
    avg?: radiate_history_avg_fields
    count: Scalars['Int']
    max?: radiate_history_max_fields
    min?: radiate_history_min_fields
    stddev?: radiate_history_stddev_fields
    stddev_pop?: radiate_history_stddev_pop_fields
    stddev_samp?: radiate_history_stddev_samp_fields
    sum?: radiate_history_sum_fields
    var_pop?: radiate_history_var_pop_fields
    var_samp?: radiate_history_var_samp_fields
    variance?: radiate_history_variance_fields
    __typename: 'radiate_history_aggregate_fields'
}


/** aggregate avg on columns */
export interface radiate_history_avg_fields {
    amount?: Scalars['Float']
    id?: Scalars['Float']
    streamId?: Scalars['Float']
    __typename: 'radiate_history_avg_fields'
}


/** unique or primary key constraints on table "radiate.history" */
export type radiate_history_constraint = 'history_pkey'


/** aggregate max on columns */
export interface radiate_history_max_fields {
    amount?: Scalars['numeric']
    id?: Scalars['Int']
    streamId?: Scalars['Int']
    timestamp?: Scalars['timestamptz']
    __typename: 'radiate_history_max_fields'
}


/** aggregate min on columns */
export interface radiate_history_min_fields {
    amount?: Scalars['numeric']
    id?: Scalars['Int']
    streamId?: Scalars['Int']
    timestamp?: Scalars['timestamptz']
    __typename: 'radiate_history_min_fields'
}


/** response of any mutation on the table "radiate.history" */
export interface radiate_history_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: radiate_history[]
    __typename: 'radiate_history_mutation_response'
}


/** select columns of table "radiate.history" */
export type radiate_history_select_column = 'amount' | 'id' | 'streamId' | 'timestamp'


/** aggregate stddev on columns */
export interface radiate_history_stddev_fields {
    amount?: Scalars['Float']
    id?: Scalars['Float']
    streamId?: Scalars['Float']
    __typename: 'radiate_history_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface radiate_history_stddev_pop_fields {
    amount?: Scalars['Float']
    id?: Scalars['Float']
    streamId?: Scalars['Float']
    __typename: 'radiate_history_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface radiate_history_stddev_samp_fields {
    amount?: Scalars['Float']
    id?: Scalars['Float']
    streamId?: Scalars['Float']
    __typename: 'radiate_history_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface radiate_history_sum_fields {
    amount?: Scalars['numeric']
    id?: Scalars['Int']
    streamId?: Scalars['Int']
    __typename: 'radiate_history_sum_fields'
}


/** update columns of table "radiate.history" */
export type radiate_history_update_column = 'amount' | 'id' | 'streamId' | 'timestamp'


/** aggregate var_pop on columns */
export interface radiate_history_var_pop_fields {
    amount?: Scalars['Float']
    id?: Scalars['Float']
    streamId?: Scalars['Float']
    __typename: 'radiate_history_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface radiate_history_var_samp_fields {
    amount?: Scalars['Float']
    id?: Scalars['Float']
    streamId?: Scalars['Float']
    __typename: 'radiate_history_var_samp_fields'
}


/** aggregate variance on columns */
export interface radiate_history_variance_fields {
    amount?: Scalars['Float']
    id?: Scalars['Float']
    streamId?: Scalars['Float']
    __typename: 'radiate_history_variance_fields'
}


/** columns and relationships of "radiate.stream" */
export interface radiate_stream {
    contractAddress: Scalars['String']
    createdOn: Scalars['timestamptz']
    deposit: Scalars['numeric']
    /** An array relationship */
    history: radiate_history[]
    /** An aggregate relationship */
    history_aggregate: radiate_history_aggregate
    id: Scalars['Int']
    isActive: Scalars['Boolean']
    ratePerSecond: Scalars['numeric']
    receiver: Scalars['String']
    remainingBalance: Scalars['numeric']
    sender: Scalars['String']
    startTime: Scalars['timestamptz']
    stopTime: Scalars['timestamptz']
    streamId: Scalars['String']
    token: Scalars['Int']
    tokenId: Scalars['Int']
    __typename: 'radiate_stream'
}


/** aggregated selection of "radiate.stream" */
export interface radiate_stream_aggregate {
    aggregate?: radiate_stream_aggregate_fields
    nodes: radiate_stream[]
    __typename: 'radiate_stream_aggregate'
}


/** aggregate fields of "radiate.stream" */
export interface radiate_stream_aggregate_fields {
    avg?: radiate_stream_avg_fields
    count: Scalars['Int']
    max?: radiate_stream_max_fields
    min?: radiate_stream_min_fields
    stddev?: radiate_stream_stddev_fields
    stddev_pop?: radiate_stream_stddev_pop_fields
    stddev_samp?: radiate_stream_stddev_samp_fields
    sum?: radiate_stream_sum_fields
    var_pop?: radiate_stream_var_pop_fields
    var_samp?: radiate_stream_var_samp_fields
    variance?: radiate_stream_variance_fields
    __typename: 'radiate_stream_aggregate_fields'
}


/** aggregate avg on columns */
export interface radiate_stream_avg_fields {
    deposit?: Scalars['Float']
    id?: Scalars['Float']
    ratePerSecond?: Scalars['Float']
    remainingBalance?: Scalars['Float']
    token?: Scalars['Float']
    tokenId?: Scalars['Float']
    __typename: 'radiate_stream_avg_fields'
}


/** unique or primary key constraints on table "radiate.stream" */
export type radiate_stream_constraint = 'stream_pkey'


/** aggregate max on columns */
export interface radiate_stream_max_fields {
    contractAddress?: Scalars['String']
    createdOn?: Scalars['timestamptz']
    deposit?: Scalars['numeric']
    id?: Scalars['Int']
    ratePerSecond?: Scalars['numeric']
    receiver?: Scalars['String']
    remainingBalance?: Scalars['numeric']
    sender?: Scalars['String']
    startTime?: Scalars['timestamptz']
    stopTime?: Scalars['timestamptz']
    streamId?: Scalars['String']
    token?: Scalars['Int']
    tokenId?: Scalars['Int']
    __typename: 'radiate_stream_max_fields'
}


/** aggregate min on columns */
export interface radiate_stream_min_fields {
    contractAddress?: Scalars['String']
    createdOn?: Scalars['timestamptz']
    deposit?: Scalars['numeric']
    id?: Scalars['Int']
    ratePerSecond?: Scalars['numeric']
    receiver?: Scalars['String']
    remainingBalance?: Scalars['numeric']
    sender?: Scalars['String']
    startTime?: Scalars['timestamptz']
    stopTime?: Scalars['timestamptz']
    streamId?: Scalars['String']
    token?: Scalars['Int']
    tokenId?: Scalars['Int']
    __typename: 'radiate_stream_min_fields'
}


/** response of any mutation on the table "radiate.stream" */
export interface radiate_stream_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: radiate_stream[]
    __typename: 'radiate_stream_mutation_response'
}


/** select columns of table "radiate.stream" */
export type radiate_stream_select_column = 'contractAddress' | 'createdOn' | 'deposit' | 'id' | 'isActive' | 'ratePerSecond' | 'receiver' | 'remainingBalance' | 'sender' | 'startTime' | 'stopTime' | 'streamId' | 'token' | 'tokenId'


/** aggregate stddev on columns */
export interface radiate_stream_stddev_fields {
    deposit?: Scalars['Float']
    id?: Scalars['Float']
    ratePerSecond?: Scalars['Float']
    remainingBalance?: Scalars['Float']
    token?: Scalars['Float']
    tokenId?: Scalars['Float']
    __typename: 'radiate_stream_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface radiate_stream_stddev_pop_fields {
    deposit?: Scalars['Float']
    id?: Scalars['Float']
    ratePerSecond?: Scalars['Float']
    remainingBalance?: Scalars['Float']
    token?: Scalars['Float']
    tokenId?: Scalars['Float']
    __typename: 'radiate_stream_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface radiate_stream_stddev_samp_fields {
    deposit?: Scalars['Float']
    id?: Scalars['Float']
    ratePerSecond?: Scalars['Float']
    remainingBalance?: Scalars['Float']
    token?: Scalars['Float']
    tokenId?: Scalars['Float']
    __typename: 'radiate_stream_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface radiate_stream_sum_fields {
    deposit?: Scalars['numeric']
    id?: Scalars['Int']
    ratePerSecond?: Scalars['numeric']
    remainingBalance?: Scalars['numeric']
    token?: Scalars['Int']
    tokenId?: Scalars['Int']
    __typename: 'radiate_stream_sum_fields'
}


/** update columns of table "radiate.stream" */
export type radiate_stream_update_column = 'contractAddress' | 'createdOn' | 'deposit' | 'id' | 'isActive' | 'ratePerSecond' | 'receiver' | 'remainingBalance' | 'sender' | 'startTime' | 'stopTime' | 'streamId' | 'token' | 'tokenId'


/** aggregate var_pop on columns */
export interface radiate_stream_var_pop_fields {
    deposit?: Scalars['Float']
    id?: Scalars['Float']
    ratePerSecond?: Scalars['Float']
    remainingBalance?: Scalars['Float']
    token?: Scalars['Float']
    tokenId?: Scalars['Float']
    __typename: 'radiate_stream_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface radiate_stream_var_samp_fields {
    deposit?: Scalars['Float']
    id?: Scalars['Float']
    ratePerSecond?: Scalars['Float']
    remainingBalance?: Scalars['Float']
    token?: Scalars['Float']
    tokenId?: Scalars['Float']
    __typename: 'radiate_stream_var_samp_fields'
}


/** aggregate variance on columns */
export interface radiate_stream_variance_fields {
    deposit?: Scalars['Float']
    id?: Scalars['Float']
    ratePerSecond?: Scalars['Float']
    remainingBalance?: Scalars['Float']
    token?: Scalars['Float']
    tokenId?: Scalars['Float']
    __typename: 'radiate_stream_variance_fields'
}

export interface subscription_root {
    /** fetch data from the table: "radiate.dipdup_state" */
    radiateDipdupState: radiate_dipdup_state[]
    /** fetch aggregated fields from the table: "radiate.dipdup_state" */
    radiateDipdupStateAggregate: radiate_dipdup_state_aggregate
    /** fetch data from the table: "radiate.dipdup_state" using primary key columns */
    radiateDipdupStateByPk?: radiate_dipdup_state
    /** fetch data from the table: "radiate.history" */
    radiateHistory: radiate_history[]
    /** fetch aggregated fields from the table: "radiate.history" */
    radiateHistoryAggregate: radiate_history_aggregate
    /** fetch data from the table: "radiate.history" using primary key columns */
    radiateHistoryByPk?: radiate_history
    /** fetch data from the table: "radiate.stream" */
    radiateStream: radiate_stream[]
    /** fetch aggregated fields from the table: "radiate.stream" */
    radiateStreamAggregate: radiate_stream_aggregate
    /** fetch data from the table: "radiate.stream" using primary key columns */
    radiateStreamByPk?: radiate_stream
    __typename: 'subscription_root'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** mutation root */
export interface mutation_rootRequest{
    /** delete data from the table: "radiate.dipdup_state" */
    deleteRadiateDipdupState?: [{
    /** filter the rows which have to be deleted */
    where: radiate_dipdup_state_bool_exp},radiate_dipdup_state_mutation_responseRequest]
    /** delete single row from the table: "radiate.dipdup_state" */
    deleteRadiateDipdupStateByPk?: [{indexName: Scalars['String']},radiate_dipdup_stateRequest]
    /** delete data from the table: "radiate.history" */
    deleteRadiateHistory?: [{
    /** filter the rows which have to be deleted */
    where: radiate_history_bool_exp},radiate_history_mutation_responseRequest]
    /** delete single row from the table: "radiate.history" */
    deleteRadiateHistoryByPk?: [{id: Scalars['Int']},radiate_historyRequest]
    /** delete data from the table: "radiate.stream" */
    deleteRadiateStream?: [{
    /** filter the rows which have to be deleted */
    where: radiate_stream_bool_exp},radiate_stream_mutation_responseRequest]
    /** delete single row from the table: "radiate.stream" */
    deleteRadiateStreamByPk?: [{id: Scalars['Int']},radiate_streamRequest]
    /** insert data into the table: "radiate.dipdup_state" */
    insertRadiateDipdupState?: [{
    /** the rows to be inserted */
    objects: radiate_dipdup_state_insert_input[],
    /** on conflict condition */
    on_conflict?: (radiate_dipdup_state_on_conflict | null)},radiate_dipdup_state_mutation_responseRequest]
    /** insert a single row into the table: "radiate.dipdup_state" */
    insertRadiateDipdupStateOne?: [{
    /** the row to be inserted */
    object: radiate_dipdup_state_insert_input,
    /** on conflict condition */
    on_conflict?: (radiate_dipdup_state_on_conflict | null)},radiate_dipdup_stateRequest]
    /** insert data into the table: "radiate.history" */
    insertRadiateHistory?: [{
    /** the rows to be inserted */
    objects: radiate_history_insert_input[],
    /** on conflict condition */
    on_conflict?: (radiate_history_on_conflict | null)},radiate_history_mutation_responseRequest]
    /** insert a single row into the table: "radiate.history" */
    insertRadiateHistoryOne?: [{
    /** the row to be inserted */
    object: radiate_history_insert_input,
    /** on conflict condition */
    on_conflict?: (radiate_history_on_conflict | null)},radiate_historyRequest]
    /** insert data into the table: "radiate.stream" */
    insertRadiateStream?: [{
    /** the rows to be inserted */
    objects: radiate_stream_insert_input[],
    /** on conflict condition */
    on_conflict?: (radiate_stream_on_conflict | null)},radiate_stream_mutation_responseRequest]
    /** insert a single row into the table: "radiate.stream" */
    insertRadiateStreamOne?: [{
    /** the row to be inserted */
    object: radiate_stream_insert_input,
    /** on conflict condition */
    on_conflict?: (radiate_stream_on_conflict | null)},radiate_streamRequest]
    /** update data of the table: "radiate.dipdup_state" */
    updateRadiateDipdupState?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (radiate_dipdup_state_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (radiate_dipdup_state_set_input | null),
    /** filter the rows which have to be updated */
    where: radiate_dipdup_state_bool_exp},radiate_dipdup_state_mutation_responseRequest]
    /** update single row of the table: "radiate.dipdup_state" */
    updateRadiateDipdupStateByPk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (radiate_dipdup_state_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (radiate_dipdup_state_set_input | null),pk_columns: radiate_dipdup_state_pk_columns_input},radiate_dipdup_stateRequest]
    /** update data of the table: "radiate.history" */
    updateRadiateHistory?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (radiate_history_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (radiate_history_set_input | null),
    /** filter the rows which have to be updated */
    where: radiate_history_bool_exp},radiate_history_mutation_responseRequest]
    /** update single row of the table: "radiate.history" */
    updateRadiateHistoryByPk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (radiate_history_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (radiate_history_set_input | null),pk_columns: radiate_history_pk_columns_input},radiate_historyRequest]
    /** update data of the table: "radiate.stream" */
    updateRadiateStream?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (radiate_stream_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (radiate_stream_set_input | null),
    /** filter the rows which have to be updated */
    where: radiate_stream_bool_exp},radiate_stream_mutation_responseRequest]
    /** update single row of the table: "radiate.stream" */
    updateRadiateStreamByPk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (radiate_stream_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (radiate_stream_set_input | null),pk_columns: radiate_stream_pk_columns_input},radiate_streamRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {_eq?: (Scalars['numeric'] | null),_gt?: (Scalars['numeric'] | null),_gte?: (Scalars['numeric'] | null),_in?: (Scalars['numeric'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['numeric'] | null),_lte?: (Scalars['numeric'] | null),_neq?: (Scalars['numeric'] | null),_nin?: (Scalars['numeric'][] | null)}

export interface query_rootRequest{
    /** fetch data from the table: "radiate.dipdup_state" */
    radiateDipdupState?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_dipdup_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_dipdup_state_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_dipdup_state_bool_exp | null)},radiate_dipdup_stateRequest] | radiate_dipdup_stateRequest
    /** fetch aggregated fields from the table: "radiate.dipdup_state" */
    radiateDipdupStateAggregate?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_dipdup_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_dipdup_state_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_dipdup_state_bool_exp | null)},radiate_dipdup_state_aggregateRequest] | radiate_dipdup_state_aggregateRequest
    /** fetch data from the table: "radiate.dipdup_state" using primary key columns */
    radiateDipdupStateByPk?: [{indexName: Scalars['String']},radiate_dipdup_stateRequest]
    /** fetch data from the table: "radiate.history" */
    radiateHistory?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_history_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_history_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_history_bool_exp | null)},radiate_historyRequest] | radiate_historyRequest
    /** fetch aggregated fields from the table: "radiate.history" */
    radiateHistoryAggregate?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_history_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_history_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_history_bool_exp | null)},radiate_history_aggregateRequest] | radiate_history_aggregateRequest
    /** fetch data from the table: "radiate.history" using primary key columns */
    radiateHistoryByPk?: [{id: Scalars['Int']},radiate_historyRequest]
    /** fetch data from the table: "radiate.stream" */
    radiateStream?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_stream_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_stream_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_stream_bool_exp | null)},radiate_streamRequest] | radiate_streamRequest
    /** fetch aggregated fields from the table: "radiate.stream" */
    radiateStreamAggregate?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_stream_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_stream_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_stream_bool_exp | null)},radiate_stream_aggregateRequest] | radiate_stream_aggregateRequest
    /** fetch data from the table: "radiate.stream" using primary key columns */
    radiateStreamByPk?: [{id: Scalars['Int']},radiate_streamRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Stores current level of index and hash of it's config
 * 
 * 
 * columns and relationships of "radiate.dipdup_state"
 * 
 */
export interface radiate_dipdup_stateRequest{
    hash?: boolean | number
    indexHash?: boolean | number
    indexName?: boolean | number
    /** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
    indexType?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "radiate.dipdup_state" */
export interface radiate_dipdup_state_aggregateRequest{
    aggregate?: radiate_dipdup_state_aggregate_fieldsRequest
    nodes?: radiate_dipdup_stateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "radiate.dipdup_state" */
export interface radiate_dipdup_state_aggregate_fieldsRequest{
    avg?: radiate_dipdup_state_avg_fieldsRequest
    count?: [{columns?: (radiate_dipdup_state_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: radiate_dipdup_state_max_fieldsRequest
    min?: radiate_dipdup_state_min_fieldsRequest
    stddev?: radiate_dipdup_state_stddev_fieldsRequest
    stddev_pop?: radiate_dipdup_state_stddev_pop_fieldsRequest
    stddev_samp?: radiate_dipdup_state_stddev_samp_fieldsRequest
    sum?: radiate_dipdup_state_sum_fieldsRequest
    var_pop?: radiate_dipdup_state_var_pop_fieldsRequest
    var_samp?: radiate_dipdup_state_var_samp_fieldsRequest
    variance?: radiate_dipdup_state_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface radiate_dipdup_state_avg_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "radiate.dipdup_state". All fields are combined with a logical 'AND'. */
export interface radiate_dipdup_state_bool_exp {_and?: (radiate_dipdup_state_bool_exp[] | null),_not?: (radiate_dipdup_state_bool_exp | null),_or?: (radiate_dipdup_state_bool_exp[] | null),hash?: (String_comparison_exp | null),indexHash?: (String_comparison_exp | null),indexName?: (String_comparison_exp | null),indexType?: (String_comparison_exp | null),level?: (Int_comparison_exp | null)}


/** input type for incrementing numeric columns in table "radiate.dipdup_state" */
export interface radiate_dipdup_state_inc_input {level?: (Scalars['Int'] | null)}


/** input type for inserting data into table "radiate.dipdup_state" */
export interface radiate_dipdup_state_insert_input {hash?: (Scalars['String'] | null),indexHash?: (Scalars['String'] | null),indexName?: (Scalars['String'] | null),
/** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
indexType?: (Scalars['String'] | null),level?: (Scalars['Int'] | null)}


/** aggregate max on columns */
export interface radiate_dipdup_state_max_fieldsRequest{
    hash?: boolean | number
    indexHash?: boolean | number
    indexName?: boolean | number
    /** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
    indexType?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface radiate_dipdup_state_min_fieldsRequest{
    hash?: boolean | number
    indexHash?: boolean | number
    indexName?: boolean | number
    /** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
    indexType?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "radiate.dipdup_state" */
export interface radiate_dipdup_state_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: radiate_dipdup_stateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on conflict condition type for table "radiate.dipdup_state" */
export interface radiate_dipdup_state_on_conflict {constraint: radiate_dipdup_state_constraint,update_columns: radiate_dipdup_state_update_column[],where?: (radiate_dipdup_state_bool_exp | null)}


/** Ordering options when selecting data from "radiate.dipdup_state". */
export interface radiate_dipdup_state_order_by {hash?: (order_by | null),indexHash?: (order_by | null),indexName?: (order_by | null),indexType?: (order_by | null),level?: (order_by | null)}


/** primary key columns input for table: radiate_dipdup_state */
export interface radiate_dipdup_state_pk_columns_input {indexName: Scalars['String']}


/** input type for updating data in table "radiate.dipdup_state" */
export interface radiate_dipdup_state_set_input {hash?: (Scalars['String'] | null),indexHash?: (Scalars['String'] | null),indexName?: (Scalars['String'] | null),
/** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
indexType?: (Scalars['String'] | null),level?: (Scalars['Int'] | null)}


/** aggregate stddev on columns */
export interface radiate_dipdup_state_stddev_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface radiate_dipdup_state_stddev_pop_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface radiate_dipdup_state_stddev_samp_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface radiate_dipdup_state_sum_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface radiate_dipdup_state_var_pop_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface radiate_dipdup_state_var_samp_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface radiate_dipdup_state_variance_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "radiate.history" */
export interface radiate_historyRequest{
    amount?: boolean | number
    id?: boolean | number
    /** An object relationship */
    stream?: radiate_streamRequest
    streamId?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "radiate.history" */
export interface radiate_history_aggregateRequest{
    aggregate?: radiate_history_aggregate_fieldsRequest
    nodes?: radiate_historyRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "radiate.history" */
export interface radiate_history_aggregate_fieldsRequest{
    avg?: radiate_history_avg_fieldsRequest
    count?: [{columns?: (radiate_history_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: radiate_history_max_fieldsRequest
    min?: radiate_history_min_fieldsRequest
    stddev?: radiate_history_stddev_fieldsRequest
    stddev_pop?: radiate_history_stddev_pop_fieldsRequest
    stddev_samp?: radiate_history_stddev_samp_fieldsRequest
    sum?: radiate_history_sum_fieldsRequest
    var_pop?: radiate_history_var_pop_fieldsRequest
    var_samp?: radiate_history_var_samp_fieldsRequest
    variance?: radiate_history_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "radiate.history" */
export interface radiate_history_aggregate_order_by {avg?: (radiate_history_avg_order_by | null),count?: (order_by | null),max?: (radiate_history_max_order_by | null),min?: (radiate_history_min_order_by | null),stddev?: (radiate_history_stddev_order_by | null),stddev_pop?: (radiate_history_stddev_pop_order_by | null),stddev_samp?: (radiate_history_stddev_samp_order_by | null),sum?: (radiate_history_sum_order_by | null),var_pop?: (radiate_history_var_pop_order_by | null),var_samp?: (radiate_history_var_samp_order_by | null),variance?: (radiate_history_variance_order_by | null)}


/** input type for inserting array relation for remote table "radiate.history" */
export interface radiate_history_arr_rel_insert_input {data: radiate_history_insert_input[],
/** on conflict condition */
on_conflict?: (radiate_history_on_conflict | null)}


/** aggregate avg on columns */
export interface radiate_history_avg_fieldsRequest{
    amount?: boolean | number
    id?: boolean | number
    streamId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "radiate.history" */
export interface radiate_history_avg_order_by {amount?: (order_by | null),id?: (order_by | null),streamId?: (order_by | null)}


/** Boolean expression to filter rows from the table "radiate.history". All fields are combined with a logical 'AND'. */
export interface radiate_history_bool_exp {_and?: (radiate_history_bool_exp[] | null),_not?: (radiate_history_bool_exp | null),_or?: (radiate_history_bool_exp[] | null),amount?: (numeric_comparison_exp | null),id?: (Int_comparison_exp | null),stream?: (radiate_stream_bool_exp | null),streamId?: (Int_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "radiate.history" */
export interface radiate_history_inc_input {amount?: (Scalars['numeric'] | null),id?: (Scalars['Int'] | null),streamId?: (Scalars['Int'] | null)}


/** input type for inserting data into table "radiate.history" */
export interface radiate_history_insert_input {amount?: (Scalars['numeric'] | null),id?: (Scalars['Int'] | null),stream?: (radiate_stream_obj_rel_insert_input | null),streamId?: (Scalars['Int'] | null),timestamp?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface radiate_history_max_fieldsRequest{
    amount?: boolean | number
    id?: boolean | number
    streamId?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "radiate.history" */
export interface radiate_history_max_order_by {amount?: (order_by | null),id?: (order_by | null),streamId?: (order_by | null),timestamp?: (order_by | null)}


/** aggregate min on columns */
export interface radiate_history_min_fieldsRequest{
    amount?: boolean | number
    id?: boolean | number
    streamId?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "radiate.history" */
export interface radiate_history_min_order_by {amount?: (order_by | null),id?: (order_by | null),streamId?: (order_by | null),timestamp?: (order_by | null)}


/** response of any mutation on the table "radiate.history" */
export interface radiate_history_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: radiate_historyRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on conflict condition type for table "radiate.history" */
export interface radiate_history_on_conflict {constraint: radiate_history_constraint,update_columns: radiate_history_update_column[],where?: (radiate_history_bool_exp | null)}


/** Ordering options when selecting data from "radiate.history". */
export interface radiate_history_order_by {amount?: (order_by | null),id?: (order_by | null),stream?: (radiate_stream_order_by | null),streamId?: (order_by | null),timestamp?: (order_by | null)}


/** primary key columns input for table: radiate_history */
export interface radiate_history_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "radiate.history" */
export interface radiate_history_set_input {amount?: (Scalars['numeric'] | null),id?: (Scalars['Int'] | null),streamId?: (Scalars['Int'] | null),timestamp?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface radiate_history_stddev_fieldsRequest{
    amount?: boolean | number
    id?: boolean | number
    streamId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "radiate.history" */
export interface radiate_history_stddev_order_by {amount?: (order_by | null),id?: (order_by | null),streamId?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface radiate_history_stddev_pop_fieldsRequest{
    amount?: boolean | number
    id?: boolean | number
    streamId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "radiate.history" */
export interface radiate_history_stddev_pop_order_by {amount?: (order_by | null),id?: (order_by | null),streamId?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface radiate_history_stddev_samp_fieldsRequest{
    amount?: boolean | number
    id?: boolean | number
    streamId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "radiate.history" */
export interface radiate_history_stddev_samp_order_by {amount?: (order_by | null),id?: (order_by | null),streamId?: (order_by | null)}


/** aggregate sum on columns */
export interface radiate_history_sum_fieldsRequest{
    amount?: boolean | number
    id?: boolean | number
    streamId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "radiate.history" */
export interface radiate_history_sum_order_by {amount?: (order_by | null),id?: (order_by | null),streamId?: (order_by | null)}


/** aggregate var_pop on columns */
export interface radiate_history_var_pop_fieldsRequest{
    amount?: boolean | number
    id?: boolean | number
    streamId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "radiate.history" */
export interface radiate_history_var_pop_order_by {amount?: (order_by | null),id?: (order_by | null),streamId?: (order_by | null)}


/** aggregate var_samp on columns */
export interface radiate_history_var_samp_fieldsRequest{
    amount?: boolean | number
    id?: boolean | number
    streamId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "radiate.history" */
export interface radiate_history_var_samp_order_by {amount?: (order_by | null),id?: (order_by | null),streamId?: (order_by | null)}


/** aggregate variance on columns */
export interface radiate_history_variance_fieldsRequest{
    amount?: boolean | number
    id?: boolean | number
    streamId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "radiate.history" */
export interface radiate_history_variance_order_by {amount?: (order_by | null),id?: (order_by | null),streamId?: (order_by | null)}


/** columns and relationships of "radiate.stream" */
export interface radiate_streamRequest{
    contractAddress?: boolean | number
    createdOn?: boolean | number
    deposit?: boolean | number
    /** An array relationship */
    history?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_history_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_history_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_history_bool_exp | null)},radiate_historyRequest] | radiate_historyRequest
    /** An aggregate relationship */
    history_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_history_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_history_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_history_bool_exp | null)},radiate_history_aggregateRequest] | radiate_history_aggregateRequest
    id?: boolean | number
    isActive?: boolean | number
    ratePerSecond?: boolean | number
    receiver?: boolean | number
    remainingBalance?: boolean | number
    sender?: boolean | number
    startTime?: boolean | number
    stopTime?: boolean | number
    streamId?: boolean | number
    token?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "radiate.stream" */
export interface radiate_stream_aggregateRequest{
    aggregate?: radiate_stream_aggregate_fieldsRequest
    nodes?: radiate_streamRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "radiate.stream" */
export interface radiate_stream_aggregate_fieldsRequest{
    avg?: radiate_stream_avg_fieldsRequest
    count?: [{columns?: (radiate_stream_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: radiate_stream_max_fieldsRequest
    min?: radiate_stream_min_fieldsRequest
    stddev?: radiate_stream_stddev_fieldsRequest
    stddev_pop?: radiate_stream_stddev_pop_fieldsRequest
    stddev_samp?: radiate_stream_stddev_samp_fieldsRequest
    sum?: radiate_stream_sum_fieldsRequest
    var_pop?: radiate_stream_var_pop_fieldsRequest
    var_samp?: radiate_stream_var_samp_fieldsRequest
    variance?: radiate_stream_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface radiate_stream_avg_fieldsRequest{
    deposit?: boolean | number
    id?: boolean | number
    ratePerSecond?: boolean | number
    remainingBalance?: boolean | number
    token?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "radiate.stream". All fields are combined with a logical 'AND'. */
export interface radiate_stream_bool_exp {_and?: (radiate_stream_bool_exp[] | null),_not?: (radiate_stream_bool_exp | null),_or?: (radiate_stream_bool_exp[] | null),contractAddress?: (String_comparison_exp | null),createdOn?: (timestamptz_comparison_exp | null),deposit?: (numeric_comparison_exp | null),history?: (radiate_history_bool_exp | null),id?: (Int_comparison_exp | null),isActive?: (Boolean_comparison_exp | null),ratePerSecond?: (numeric_comparison_exp | null),receiver?: (String_comparison_exp | null),remainingBalance?: (numeric_comparison_exp | null),sender?: (String_comparison_exp | null),startTime?: (timestamptz_comparison_exp | null),stopTime?: (timestamptz_comparison_exp | null),streamId?: (String_comparison_exp | null),token?: (Int_comparison_exp | null),tokenId?: (Int_comparison_exp | null)}


/** input type for incrementing numeric columns in table "radiate.stream" */
export interface radiate_stream_inc_input {deposit?: (Scalars['numeric'] | null),id?: (Scalars['Int'] | null),ratePerSecond?: (Scalars['numeric'] | null),remainingBalance?: (Scalars['numeric'] | null),token?: (Scalars['Int'] | null),tokenId?: (Scalars['Int'] | null)}


/** input type for inserting data into table "radiate.stream" */
export interface radiate_stream_insert_input {contractAddress?: (Scalars['String'] | null),createdOn?: (Scalars['timestamptz'] | null),deposit?: (Scalars['numeric'] | null),history?: (radiate_history_arr_rel_insert_input | null),id?: (Scalars['Int'] | null),isActive?: (Scalars['Boolean'] | null),ratePerSecond?: (Scalars['numeric'] | null),receiver?: (Scalars['String'] | null),remainingBalance?: (Scalars['numeric'] | null),sender?: (Scalars['String'] | null),startTime?: (Scalars['timestamptz'] | null),stopTime?: (Scalars['timestamptz'] | null),streamId?: (Scalars['String'] | null),token?: (Scalars['Int'] | null),tokenId?: (Scalars['Int'] | null)}


/** aggregate max on columns */
export interface radiate_stream_max_fieldsRequest{
    contractAddress?: boolean | number
    createdOn?: boolean | number
    deposit?: boolean | number
    id?: boolean | number
    ratePerSecond?: boolean | number
    receiver?: boolean | number
    remainingBalance?: boolean | number
    sender?: boolean | number
    startTime?: boolean | number
    stopTime?: boolean | number
    streamId?: boolean | number
    token?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface radiate_stream_min_fieldsRequest{
    contractAddress?: boolean | number
    createdOn?: boolean | number
    deposit?: boolean | number
    id?: boolean | number
    ratePerSecond?: boolean | number
    receiver?: boolean | number
    remainingBalance?: boolean | number
    sender?: boolean | number
    startTime?: boolean | number
    stopTime?: boolean | number
    streamId?: boolean | number
    token?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "radiate.stream" */
export interface radiate_stream_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: radiate_streamRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "radiate.stream" */
export interface radiate_stream_obj_rel_insert_input {data: radiate_stream_insert_input,
/** on conflict condition */
on_conflict?: (radiate_stream_on_conflict | null)}


/** on conflict condition type for table "radiate.stream" */
export interface radiate_stream_on_conflict {constraint: radiate_stream_constraint,update_columns: radiate_stream_update_column[],where?: (radiate_stream_bool_exp | null)}


/** Ordering options when selecting data from "radiate.stream". */
export interface radiate_stream_order_by {contractAddress?: (order_by | null),createdOn?: (order_by | null),deposit?: (order_by | null),history_aggregate?: (radiate_history_aggregate_order_by | null),id?: (order_by | null),isActive?: (order_by | null),ratePerSecond?: (order_by | null),receiver?: (order_by | null),remainingBalance?: (order_by | null),sender?: (order_by | null),startTime?: (order_by | null),stopTime?: (order_by | null),streamId?: (order_by | null),token?: (order_by | null),tokenId?: (order_by | null)}


/** primary key columns input for table: radiate_stream */
export interface radiate_stream_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "radiate.stream" */
export interface radiate_stream_set_input {contractAddress?: (Scalars['String'] | null),createdOn?: (Scalars['timestamptz'] | null),deposit?: (Scalars['numeric'] | null),id?: (Scalars['Int'] | null),isActive?: (Scalars['Boolean'] | null),ratePerSecond?: (Scalars['numeric'] | null),receiver?: (Scalars['String'] | null),remainingBalance?: (Scalars['numeric'] | null),sender?: (Scalars['String'] | null),startTime?: (Scalars['timestamptz'] | null),stopTime?: (Scalars['timestamptz'] | null),streamId?: (Scalars['String'] | null),token?: (Scalars['Int'] | null),tokenId?: (Scalars['Int'] | null)}


/** aggregate stddev on columns */
export interface radiate_stream_stddev_fieldsRequest{
    deposit?: boolean | number
    id?: boolean | number
    ratePerSecond?: boolean | number
    remainingBalance?: boolean | number
    token?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface radiate_stream_stddev_pop_fieldsRequest{
    deposit?: boolean | number
    id?: boolean | number
    ratePerSecond?: boolean | number
    remainingBalance?: boolean | number
    token?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface radiate_stream_stddev_samp_fieldsRequest{
    deposit?: boolean | number
    id?: boolean | number
    ratePerSecond?: boolean | number
    remainingBalance?: boolean | number
    token?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface radiate_stream_sum_fieldsRequest{
    deposit?: boolean | number
    id?: boolean | number
    ratePerSecond?: boolean | number
    remainingBalance?: boolean | number
    token?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface radiate_stream_var_pop_fieldsRequest{
    deposit?: boolean | number
    id?: boolean | number
    ratePerSecond?: boolean | number
    remainingBalance?: boolean | number
    token?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface radiate_stream_var_samp_fieldsRequest{
    deposit?: boolean | number
    id?: boolean | number
    ratePerSecond?: boolean | number
    remainingBalance?: boolean | number
    token?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface radiate_stream_variance_fieldsRequest{
    deposit?: boolean | number
    id?: boolean | number
    ratePerSecond?: boolean | number
    remainingBalance?: boolean | number
    token?: boolean | number
    tokenId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootRequest{
    /** fetch data from the table: "radiate.dipdup_state" */
    radiateDipdupState?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_dipdup_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_dipdup_state_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_dipdup_state_bool_exp | null)},radiate_dipdup_stateRequest] | radiate_dipdup_stateRequest
    /** fetch aggregated fields from the table: "radiate.dipdup_state" */
    radiateDipdupStateAggregate?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_dipdup_state_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_dipdup_state_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_dipdup_state_bool_exp | null)},radiate_dipdup_state_aggregateRequest] | radiate_dipdup_state_aggregateRequest
    /** fetch data from the table: "radiate.dipdup_state" using primary key columns */
    radiateDipdupStateByPk?: [{indexName: Scalars['String']},radiate_dipdup_stateRequest]
    /** fetch data from the table: "radiate.history" */
    radiateHistory?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_history_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_history_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_history_bool_exp | null)},radiate_historyRequest] | radiate_historyRequest
    /** fetch aggregated fields from the table: "radiate.history" */
    radiateHistoryAggregate?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_history_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_history_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_history_bool_exp | null)},radiate_history_aggregateRequest] | radiate_history_aggregateRequest
    /** fetch data from the table: "radiate.history" using primary key columns */
    radiateHistoryByPk?: [{id: Scalars['Int']},radiate_historyRequest]
    /** fetch data from the table: "radiate.stream" */
    radiateStream?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_stream_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_stream_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_stream_bool_exp | null)},radiate_streamRequest] | radiate_streamRequest
    /** fetch aggregated fields from the table: "radiate.stream" */
    radiateStreamAggregate?: [{
    /** distinct select on columns */
    distinct_on?: (radiate_stream_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (radiate_stream_order_by[] | null),
    /** filter the rows returned */
    where?: (radiate_stream_bool_exp | null)},radiate_stream_aggregateRequest] | radiate_stream_aggregateRequest
    /** fetch data from the table: "radiate.stream" using primary key columns */
    radiateStreamByPk?: [{id: Scalars['Int']},radiate_streamRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}

export type QueryRequest = query_rootRequest
export type MutationRequest = mutation_rootRequest
export type SubscriptionRequest = subscription_rootRequest


const mutation_root_possibleTypes = ['mutation_root']
export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_possibleTypes = ['radiate_dipdup_state']
export const isradiate_dipdup_state = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state"')
  return radiate_dipdup_state_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_aggregate_possibleTypes = ['radiate_dipdup_state_aggregate']
export const isradiate_dipdup_state_aggregate = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_aggregate"')
  return radiate_dipdup_state_aggregate_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_aggregate_fields_possibleTypes = ['radiate_dipdup_state_aggregate_fields']
export const isradiate_dipdup_state_aggregate_fields = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_aggregate_fields"')
  return radiate_dipdup_state_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_avg_fields_possibleTypes = ['radiate_dipdup_state_avg_fields']
export const isradiate_dipdup_state_avg_fields = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_avg_fields"')
  return radiate_dipdup_state_avg_fields_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_max_fields_possibleTypes = ['radiate_dipdup_state_max_fields']
export const isradiate_dipdup_state_max_fields = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_max_fields"')
  return radiate_dipdup_state_max_fields_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_min_fields_possibleTypes = ['radiate_dipdup_state_min_fields']
export const isradiate_dipdup_state_min_fields = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_min_fields"')
  return radiate_dipdup_state_min_fields_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_mutation_response_possibleTypes = ['radiate_dipdup_state_mutation_response']
export const isradiate_dipdup_state_mutation_response = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_mutation_response"')
  return radiate_dipdup_state_mutation_response_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_stddev_fields_possibleTypes = ['radiate_dipdup_state_stddev_fields']
export const isradiate_dipdup_state_stddev_fields = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_stddev_fields"')
  return radiate_dipdup_state_stddev_fields_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_stddev_pop_fields_possibleTypes = ['radiate_dipdup_state_stddev_pop_fields']
export const isradiate_dipdup_state_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_stddev_pop_fields"')
  return radiate_dipdup_state_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_stddev_samp_fields_possibleTypes = ['radiate_dipdup_state_stddev_samp_fields']
export const isradiate_dipdup_state_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_stddev_samp_fields"')
  return radiate_dipdup_state_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_sum_fields_possibleTypes = ['radiate_dipdup_state_sum_fields']
export const isradiate_dipdup_state_sum_fields = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_sum_fields"')
  return radiate_dipdup_state_sum_fields_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_var_pop_fields_possibleTypes = ['radiate_dipdup_state_var_pop_fields']
export const isradiate_dipdup_state_var_pop_fields = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_var_pop_fields"')
  return radiate_dipdup_state_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_var_samp_fields_possibleTypes = ['radiate_dipdup_state_var_samp_fields']
export const isradiate_dipdup_state_var_samp_fields = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_var_samp_fields"')
  return radiate_dipdup_state_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const radiate_dipdup_state_variance_fields_possibleTypes = ['radiate_dipdup_state_variance_fields']
export const isradiate_dipdup_state_variance_fields = (obj?: { __typename?: any } | null): obj is radiate_dipdup_state_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_variance_fields"')
  return radiate_dipdup_state_variance_fields_possibleTypes.includes(obj.__typename)
}



const radiate_history_possibleTypes = ['radiate_history']
export const isradiate_history = (obj?: { __typename?: any } | null): obj is radiate_history => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history"')
  return radiate_history_possibleTypes.includes(obj.__typename)
}



const radiate_history_aggregate_possibleTypes = ['radiate_history_aggregate']
export const isradiate_history_aggregate = (obj?: { __typename?: any } | null): obj is radiate_history_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_aggregate"')
  return radiate_history_aggregate_possibleTypes.includes(obj.__typename)
}



const radiate_history_aggregate_fields_possibleTypes = ['radiate_history_aggregate_fields']
export const isradiate_history_aggregate_fields = (obj?: { __typename?: any } | null): obj is radiate_history_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_aggregate_fields"')
  return radiate_history_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const radiate_history_avg_fields_possibleTypes = ['radiate_history_avg_fields']
export const isradiate_history_avg_fields = (obj?: { __typename?: any } | null): obj is radiate_history_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_avg_fields"')
  return radiate_history_avg_fields_possibleTypes.includes(obj.__typename)
}



const radiate_history_max_fields_possibleTypes = ['radiate_history_max_fields']
export const isradiate_history_max_fields = (obj?: { __typename?: any } | null): obj is radiate_history_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_max_fields"')
  return radiate_history_max_fields_possibleTypes.includes(obj.__typename)
}



const radiate_history_min_fields_possibleTypes = ['radiate_history_min_fields']
export const isradiate_history_min_fields = (obj?: { __typename?: any } | null): obj is radiate_history_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_min_fields"')
  return radiate_history_min_fields_possibleTypes.includes(obj.__typename)
}



const radiate_history_mutation_response_possibleTypes = ['radiate_history_mutation_response']
export const isradiate_history_mutation_response = (obj?: { __typename?: any } | null): obj is radiate_history_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_mutation_response"')
  return radiate_history_mutation_response_possibleTypes.includes(obj.__typename)
}



const radiate_history_stddev_fields_possibleTypes = ['radiate_history_stddev_fields']
export const isradiate_history_stddev_fields = (obj?: { __typename?: any } | null): obj is radiate_history_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_stddev_fields"')
  return radiate_history_stddev_fields_possibleTypes.includes(obj.__typename)
}



const radiate_history_stddev_pop_fields_possibleTypes = ['radiate_history_stddev_pop_fields']
export const isradiate_history_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is radiate_history_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_stddev_pop_fields"')
  return radiate_history_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const radiate_history_stddev_samp_fields_possibleTypes = ['radiate_history_stddev_samp_fields']
export const isradiate_history_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is radiate_history_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_stddev_samp_fields"')
  return radiate_history_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const radiate_history_sum_fields_possibleTypes = ['radiate_history_sum_fields']
export const isradiate_history_sum_fields = (obj?: { __typename?: any } | null): obj is radiate_history_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_sum_fields"')
  return radiate_history_sum_fields_possibleTypes.includes(obj.__typename)
}



const radiate_history_var_pop_fields_possibleTypes = ['radiate_history_var_pop_fields']
export const isradiate_history_var_pop_fields = (obj?: { __typename?: any } | null): obj is radiate_history_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_var_pop_fields"')
  return radiate_history_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const radiate_history_var_samp_fields_possibleTypes = ['radiate_history_var_samp_fields']
export const isradiate_history_var_samp_fields = (obj?: { __typename?: any } | null): obj is radiate_history_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_var_samp_fields"')
  return radiate_history_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const radiate_history_variance_fields_possibleTypes = ['radiate_history_variance_fields']
export const isradiate_history_variance_fields = (obj?: { __typename?: any } | null): obj is radiate_history_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_history_variance_fields"')
  return radiate_history_variance_fields_possibleTypes.includes(obj.__typename)
}



const radiate_stream_possibleTypes = ['radiate_stream']
export const isradiate_stream = (obj?: { __typename?: any } | null): obj is radiate_stream => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream"')
  return radiate_stream_possibleTypes.includes(obj.__typename)
}



const radiate_stream_aggregate_possibleTypes = ['radiate_stream_aggregate']
export const isradiate_stream_aggregate = (obj?: { __typename?: any } | null): obj is radiate_stream_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_aggregate"')
  return radiate_stream_aggregate_possibleTypes.includes(obj.__typename)
}



const radiate_stream_aggregate_fields_possibleTypes = ['radiate_stream_aggregate_fields']
export const isradiate_stream_aggregate_fields = (obj?: { __typename?: any } | null): obj is radiate_stream_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_aggregate_fields"')
  return radiate_stream_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const radiate_stream_avg_fields_possibleTypes = ['radiate_stream_avg_fields']
export const isradiate_stream_avg_fields = (obj?: { __typename?: any } | null): obj is radiate_stream_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_avg_fields"')
  return radiate_stream_avg_fields_possibleTypes.includes(obj.__typename)
}



const radiate_stream_max_fields_possibleTypes = ['radiate_stream_max_fields']
export const isradiate_stream_max_fields = (obj?: { __typename?: any } | null): obj is radiate_stream_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_max_fields"')
  return radiate_stream_max_fields_possibleTypes.includes(obj.__typename)
}



const radiate_stream_min_fields_possibleTypes = ['radiate_stream_min_fields']
export const isradiate_stream_min_fields = (obj?: { __typename?: any } | null): obj is radiate_stream_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_min_fields"')
  return radiate_stream_min_fields_possibleTypes.includes(obj.__typename)
}



const radiate_stream_mutation_response_possibleTypes = ['radiate_stream_mutation_response']
export const isradiate_stream_mutation_response = (obj?: { __typename?: any } | null): obj is radiate_stream_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_mutation_response"')
  return radiate_stream_mutation_response_possibleTypes.includes(obj.__typename)
}



const radiate_stream_stddev_fields_possibleTypes = ['radiate_stream_stddev_fields']
export const isradiate_stream_stddev_fields = (obj?: { __typename?: any } | null): obj is radiate_stream_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_stddev_fields"')
  return radiate_stream_stddev_fields_possibleTypes.includes(obj.__typename)
}



const radiate_stream_stddev_pop_fields_possibleTypes = ['radiate_stream_stddev_pop_fields']
export const isradiate_stream_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is radiate_stream_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_stddev_pop_fields"')
  return radiate_stream_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const radiate_stream_stddev_samp_fields_possibleTypes = ['radiate_stream_stddev_samp_fields']
export const isradiate_stream_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is radiate_stream_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_stddev_samp_fields"')
  return radiate_stream_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const radiate_stream_sum_fields_possibleTypes = ['radiate_stream_sum_fields']
export const isradiate_stream_sum_fields = (obj?: { __typename?: any } | null): obj is radiate_stream_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_sum_fields"')
  return radiate_stream_sum_fields_possibleTypes.includes(obj.__typename)
}



const radiate_stream_var_pop_fields_possibleTypes = ['radiate_stream_var_pop_fields']
export const isradiate_stream_var_pop_fields = (obj?: { __typename?: any } | null): obj is radiate_stream_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_var_pop_fields"')
  return radiate_stream_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const radiate_stream_var_samp_fields_possibleTypes = ['radiate_stream_var_samp_fields']
export const isradiate_stream_var_samp_fields = (obj?: { __typename?: any } | null): obj is radiate_stream_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_var_samp_fields"')
  return radiate_stream_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const radiate_stream_variance_fields_possibleTypes = ['radiate_stream_variance_fields']
export const isradiate_stream_variance_fields = (obj?: { __typename?: any } | null): obj is radiate_stream_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isradiate_stream_variance_fields"')
  return radiate_stream_variance_fields_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



/** mutation root */
export interface mutation_rootPromiseChain{
    
/** delete data from the table: "radiate.dipdup_state" */
deleteRadiateDipdupState: ((args: {
/** filter the rows which have to be deleted */
where: radiate_dipdup_state_bool_exp}) => radiate_dipdup_state_mutation_responsePromiseChain & {get: <R extends radiate_dipdup_state_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "radiate.dipdup_state" */
deleteRadiateDipdupStateByPk: ((args: {indexName: Scalars['String']}) => radiate_dipdup_statePromiseChain & {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state, R> | undefined)>}),
    
/** delete data from the table: "radiate.history" */
deleteRadiateHistory: ((args: {
/** filter the rows which have to be deleted */
where: radiate_history_bool_exp}) => radiate_history_mutation_responsePromiseChain & {get: <R extends radiate_history_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_mutation_response, R> | undefined)) => Promise<(FieldsSelection<radiate_history_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "radiate.history" */
deleteRadiateHistoryByPk: ((args: {id: Scalars['Int']}) => radiate_historyPromiseChain & {get: <R extends radiate_historyRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history, R> | undefined)) => Promise<(FieldsSelection<radiate_history, R> | undefined)>}),
    
/** delete data from the table: "radiate.stream" */
deleteRadiateStream: ((args: {
/** filter the rows which have to be deleted */
where: radiate_stream_bool_exp}) => radiate_stream_mutation_responsePromiseChain & {get: <R extends radiate_stream_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_mutation_response, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "radiate.stream" */
deleteRadiateStreamByPk: ((args: {id: Scalars['Int']}) => radiate_streamPromiseChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream, R> | undefined)) => Promise<(FieldsSelection<radiate_stream, R> | undefined)>}),
    
/** insert data into the table: "radiate.dipdup_state" */
insertRadiateDipdupState: ((args: {
/** the rows to be inserted */
objects: radiate_dipdup_state_insert_input[],
/** on conflict condition */
on_conflict?: (radiate_dipdup_state_on_conflict | null)}) => radiate_dipdup_state_mutation_responsePromiseChain & {get: <R extends radiate_dipdup_state_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "radiate.dipdup_state" */
insertRadiateDipdupStateOne: ((args: {
/** the row to be inserted */
object: radiate_dipdup_state_insert_input,
/** on conflict condition */
on_conflict?: (radiate_dipdup_state_on_conflict | null)}) => radiate_dipdup_statePromiseChain & {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state, R> | undefined)>}),
    
/** insert data into the table: "radiate.history" */
insertRadiateHistory: ((args: {
/** the rows to be inserted */
objects: radiate_history_insert_input[],
/** on conflict condition */
on_conflict?: (radiate_history_on_conflict | null)}) => radiate_history_mutation_responsePromiseChain & {get: <R extends radiate_history_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_mutation_response, R> | undefined)) => Promise<(FieldsSelection<radiate_history_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "radiate.history" */
insertRadiateHistoryOne: ((args: {
/** the row to be inserted */
object: radiate_history_insert_input,
/** on conflict condition */
on_conflict?: (radiate_history_on_conflict | null)}) => radiate_historyPromiseChain & {get: <R extends radiate_historyRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history, R> | undefined)) => Promise<(FieldsSelection<radiate_history, R> | undefined)>}),
    
/** insert data into the table: "radiate.stream" */
insertRadiateStream: ((args: {
/** the rows to be inserted */
objects: radiate_stream_insert_input[],
/** on conflict condition */
on_conflict?: (radiate_stream_on_conflict | null)}) => radiate_stream_mutation_responsePromiseChain & {get: <R extends radiate_stream_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_mutation_response, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "radiate.stream" */
insertRadiateStreamOne: ((args: {
/** the row to be inserted */
object: radiate_stream_insert_input,
/** on conflict condition */
on_conflict?: (radiate_stream_on_conflict | null)}) => radiate_streamPromiseChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream, R> | undefined)) => Promise<(FieldsSelection<radiate_stream, R> | undefined)>}),
    
/** update data of the table: "radiate.dipdup_state" */
updateRadiateDipdupState: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_dipdup_state_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_dipdup_state_set_input | null),
/** filter the rows which have to be updated */
where: radiate_dipdup_state_bool_exp}) => radiate_dipdup_state_mutation_responsePromiseChain & {get: <R extends radiate_dipdup_state_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "radiate.dipdup_state" */
updateRadiateDipdupStateByPk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_dipdup_state_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_dipdup_state_set_input | null),pk_columns: radiate_dipdup_state_pk_columns_input}) => radiate_dipdup_statePromiseChain & {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state, R> | undefined)>}),
    
/** update data of the table: "radiate.history" */
updateRadiateHistory: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_history_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_history_set_input | null),
/** filter the rows which have to be updated */
where: radiate_history_bool_exp}) => radiate_history_mutation_responsePromiseChain & {get: <R extends radiate_history_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_mutation_response, R> | undefined)) => Promise<(FieldsSelection<radiate_history_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "radiate.history" */
updateRadiateHistoryByPk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_history_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_history_set_input | null),pk_columns: radiate_history_pk_columns_input}) => radiate_historyPromiseChain & {get: <R extends radiate_historyRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history, R> | undefined)) => Promise<(FieldsSelection<radiate_history, R> | undefined)>}),
    
/** update data of the table: "radiate.stream" */
updateRadiateStream: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_stream_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_stream_set_input | null),
/** filter the rows which have to be updated */
where: radiate_stream_bool_exp}) => radiate_stream_mutation_responsePromiseChain & {get: <R extends radiate_stream_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_mutation_response, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "radiate.stream" */
updateRadiateStreamByPk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_stream_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_stream_set_input | null),pk_columns: radiate_stream_pk_columns_input}) => radiate_streamPromiseChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream, R> | undefined)) => Promise<(FieldsSelection<radiate_stream, R> | undefined)>})
}


/** mutation root */
export interface mutation_rootObservableChain{
    
/** delete data from the table: "radiate.dipdup_state" */
deleteRadiateDipdupState: ((args: {
/** filter the rows which have to be deleted */
where: radiate_dipdup_state_bool_exp}) => radiate_dipdup_state_mutation_responseObservableChain & {get: <R extends radiate_dipdup_state_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "radiate.dipdup_state" */
deleteRadiateDipdupStateByPk: ((args: {indexName: Scalars['String']}) => radiate_dipdup_stateObservableChain & {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state, R> | undefined)>}),
    
/** delete data from the table: "radiate.history" */
deleteRadiateHistory: ((args: {
/** filter the rows which have to be deleted */
where: radiate_history_bool_exp}) => radiate_history_mutation_responseObservableChain & {get: <R extends radiate_history_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_mutation_response, R> | undefined)) => Observable<(FieldsSelection<radiate_history_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "radiate.history" */
deleteRadiateHistoryByPk: ((args: {id: Scalars['Int']}) => radiate_historyObservableChain & {get: <R extends radiate_historyRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history, R> | undefined)) => Observable<(FieldsSelection<radiate_history, R> | undefined)>}),
    
/** delete data from the table: "radiate.stream" */
deleteRadiateStream: ((args: {
/** filter the rows which have to be deleted */
where: radiate_stream_bool_exp}) => radiate_stream_mutation_responseObservableChain & {get: <R extends radiate_stream_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_mutation_response, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "radiate.stream" */
deleteRadiateStreamByPk: ((args: {id: Scalars['Int']}) => radiate_streamObservableChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream, R> | undefined)) => Observable<(FieldsSelection<radiate_stream, R> | undefined)>}),
    
/** insert data into the table: "radiate.dipdup_state" */
insertRadiateDipdupState: ((args: {
/** the rows to be inserted */
objects: radiate_dipdup_state_insert_input[],
/** on conflict condition */
on_conflict?: (radiate_dipdup_state_on_conflict | null)}) => radiate_dipdup_state_mutation_responseObservableChain & {get: <R extends radiate_dipdup_state_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "radiate.dipdup_state" */
insertRadiateDipdupStateOne: ((args: {
/** the row to be inserted */
object: radiate_dipdup_state_insert_input,
/** on conflict condition */
on_conflict?: (radiate_dipdup_state_on_conflict | null)}) => radiate_dipdup_stateObservableChain & {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state, R> | undefined)>}),
    
/** insert data into the table: "radiate.history" */
insertRadiateHistory: ((args: {
/** the rows to be inserted */
objects: radiate_history_insert_input[],
/** on conflict condition */
on_conflict?: (radiate_history_on_conflict | null)}) => radiate_history_mutation_responseObservableChain & {get: <R extends radiate_history_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_mutation_response, R> | undefined)) => Observable<(FieldsSelection<radiate_history_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "radiate.history" */
insertRadiateHistoryOne: ((args: {
/** the row to be inserted */
object: radiate_history_insert_input,
/** on conflict condition */
on_conflict?: (radiate_history_on_conflict | null)}) => radiate_historyObservableChain & {get: <R extends radiate_historyRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history, R> | undefined)) => Observable<(FieldsSelection<radiate_history, R> | undefined)>}),
    
/** insert data into the table: "radiate.stream" */
insertRadiateStream: ((args: {
/** the rows to be inserted */
objects: radiate_stream_insert_input[],
/** on conflict condition */
on_conflict?: (radiate_stream_on_conflict | null)}) => radiate_stream_mutation_responseObservableChain & {get: <R extends radiate_stream_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_mutation_response, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "radiate.stream" */
insertRadiateStreamOne: ((args: {
/** the row to be inserted */
object: radiate_stream_insert_input,
/** on conflict condition */
on_conflict?: (radiate_stream_on_conflict | null)}) => radiate_streamObservableChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream, R> | undefined)) => Observable<(FieldsSelection<radiate_stream, R> | undefined)>}),
    
/** update data of the table: "radiate.dipdup_state" */
updateRadiateDipdupState: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_dipdup_state_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_dipdup_state_set_input | null),
/** filter the rows which have to be updated */
where: radiate_dipdup_state_bool_exp}) => radiate_dipdup_state_mutation_responseObservableChain & {get: <R extends radiate_dipdup_state_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "radiate.dipdup_state" */
updateRadiateDipdupStateByPk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_dipdup_state_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_dipdup_state_set_input | null),pk_columns: radiate_dipdup_state_pk_columns_input}) => radiate_dipdup_stateObservableChain & {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state, R> | undefined)>}),
    
/** update data of the table: "radiate.history" */
updateRadiateHistory: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_history_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_history_set_input | null),
/** filter the rows which have to be updated */
where: radiate_history_bool_exp}) => radiate_history_mutation_responseObservableChain & {get: <R extends radiate_history_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_mutation_response, R> | undefined)) => Observable<(FieldsSelection<radiate_history_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "radiate.history" */
updateRadiateHistoryByPk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_history_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_history_set_input | null),pk_columns: radiate_history_pk_columns_input}) => radiate_historyObservableChain & {get: <R extends radiate_historyRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history, R> | undefined)) => Observable<(FieldsSelection<radiate_history, R> | undefined)>}),
    
/** update data of the table: "radiate.stream" */
updateRadiateStream: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_stream_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_stream_set_input | null),
/** filter the rows which have to be updated */
where: radiate_stream_bool_exp}) => radiate_stream_mutation_responseObservableChain & {get: <R extends radiate_stream_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_mutation_response, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "radiate.stream" */
updateRadiateStreamByPk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (radiate_stream_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (radiate_stream_set_input | null),pk_columns: radiate_stream_pk_columns_input}) => radiate_streamObservableChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream, R> | undefined)) => Observable<(FieldsSelection<radiate_stream, R> | undefined)>})
}

export interface query_rootPromiseChain{
    
/** fetch data from the table: "radiate.dipdup_state" */
radiateDipdupState: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (radiate_dipdup_state_bool_exp | null)}) => {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Promise<FieldsSelection<radiate_dipdup_state, R>[]>})&({get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Promise<FieldsSelection<radiate_dipdup_state, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.dipdup_state" */
radiateDipdupStateAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (radiate_dipdup_state_bool_exp | null)}) => radiate_dipdup_state_aggregatePromiseChain & {get: <R extends radiate_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state_aggregate, R>) => Promise<FieldsSelection<radiate_dipdup_state_aggregate, R>>})&(radiate_dipdup_state_aggregatePromiseChain & {get: <R extends radiate_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state_aggregate, R>) => Promise<FieldsSelection<radiate_dipdup_state_aggregate, R>>}),
    
/** fetch data from the table: "radiate.dipdup_state" using primary key columns */
radiateDipdupStateByPk: ((args: {indexName: Scalars['String']}) => radiate_dipdup_statePromiseChain & {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state, R> | undefined)>}),
    
/** fetch data from the table: "radiate.history" */
radiateHistory: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => {get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Promise<FieldsSelection<radiate_history, R>[]>})&({get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Promise<FieldsSelection<radiate_history, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.history" */
radiateHistoryAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => radiate_history_aggregatePromiseChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Promise<FieldsSelection<radiate_history_aggregate, R>>})&(radiate_history_aggregatePromiseChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Promise<FieldsSelection<radiate_history_aggregate, R>>}),
    
/** fetch data from the table: "radiate.history" using primary key columns */
radiateHistoryByPk: ((args: {id: Scalars['Int']}) => radiate_historyPromiseChain & {get: <R extends radiate_historyRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history, R> | undefined)) => Promise<(FieldsSelection<radiate_history, R> | undefined)>}),
    
/** fetch data from the table: "radiate.stream" */
radiateStream: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_stream_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_stream_order_by[] | null),
/** filter the rows returned */
where?: (radiate_stream_bool_exp | null)}) => {get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Promise<FieldsSelection<radiate_stream, R>[]>})&({get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Promise<FieldsSelection<radiate_stream, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.stream" */
radiateStreamAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_stream_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_stream_order_by[] | null),
/** filter the rows returned */
where?: (radiate_stream_bool_exp | null)}) => radiate_stream_aggregatePromiseChain & {get: <R extends radiate_stream_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream_aggregate, R>) => Promise<FieldsSelection<radiate_stream_aggregate, R>>})&(radiate_stream_aggregatePromiseChain & {get: <R extends radiate_stream_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream_aggregate, R>) => Promise<FieldsSelection<radiate_stream_aggregate, R>>}),
    
/** fetch data from the table: "radiate.stream" using primary key columns */
radiateStreamByPk: ((args: {id: Scalars['Int']}) => radiate_streamPromiseChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream, R> | undefined)) => Promise<(FieldsSelection<radiate_stream, R> | undefined)>})
}

export interface query_rootObservableChain{
    
/** fetch data from the table: "radiate.dipdup_state" */
radiateDipdupState: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (radiate_dipdup_state_bool_exp | null)}) => {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Observable<FieldsSelection<radiate_dipdup_state, R>[]>})&({get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Observable<FieldsSelection<radiate_dipdup_state, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.dipdup_state" */
radiateDipdupStateAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (radiate_dipdup_state_bool_exp | null)}) => radiate_dipdup_state_aggregateObservableChain & {get: <R extends radiate_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state_aggregate, R>) => Observable<FieldsSelection<radiate_dipdup_state_aggregate, R>>})&(radiate_dipdup_state_aggregateObservableChain & {get: <R extends radiate_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state_aggregate, R>) => Observable<FieldsSelection<radiate_dipdup_state_aggregate, R>>}),
    
/** fetch data from the table: "radiate.dipdup_state" using primary key columns */
radiateDipdupStateByPk: ((args: {indexName: Scalars['String']}) => radiate_dipdup_stateObservableChain & {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state, R> | undefined)>}),
    
/** fetch data from the table: "radiate.history" */
radiateHistory: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => {get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Observable<FieldsSelection<radiate_history, R>[]>})&({get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Observable<FieldsSelection<radiate_history, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.history" */
radiateHistoryAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => radiate_history_aggregateObservableChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Observable<FieldsSelection<radiate_history_aggregate, R>>})&(radiate_history_aggregateObservableChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Observable<FieldsSelection<radiate_history_aggregate, R>>}),
    
/** fetch data from the table: "radiate.history" using primary key columns */
radiateHistoryByPk: ((args: {id: Scalars['Int']}) => radiate_historyObservableChain & {get: <R extends radiate_historyRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history, R> | undefined)) => Observable<(FieldsSelection<radiate_history, R> | undefined)>}),
    
/** fetch data from the table: "radiate.stream" */
radiateStream: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_stream_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_stream_order_by[] | null),
/** filter the rows returned */
where?: (radiate_stream_bool_exp | null)}) => {get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Observable<FieldsSelection<radiate_stream, R>[]>})&({get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Observable<FieldsSelection<radiate_stream, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.stream" */
radiateStreamAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_stream_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_stream_order_by[] | null),
/** filter the rows returned */
where?: (radiate_stream_bool_exp | null)}) => radiate_stream_aggregateObservableChain & {get: <R extends radiate_stream_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream_aggregate, R>) => Observable<FieldsSelection<radiate_stream_aggregate, R>>})&(radiate_stream_aggregateObservableChain & {get: <R extends radiate_stream_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream_aggregate, R>) => Observable<FieldsSelection<radiate_stream_aggregate, R>>}),
    
/** fetch data from the table: "radiate.stream" using primary key columns */
radiateStreamByPk: ((args: {id: Scalars['Int']}) => radiate_streamObservableChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream, R> | undefined)) => Observable<(FieldsSelection<radiate_stream, R> | undefined)>})
}


/**
 * Stores current level of index and hash of it's config
 * 
 * 
 * columns and relationships of "radiate.dipdup_state"
 * 
 */
export interface radiate_dipdup_statePromiseChain{
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    indexHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    indexName: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
indexType: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/**
 * Stores current level of index and hash of it's config
 * 
 * 
 * columns and relationships of "radiate.dipdup_state"
 * 
 */
export interface radiate_dipdup_stateObservableChain{
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    indexHash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    indexName: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
indexType: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** aggregated selection of "radiate.dipdup_state" */
export interface radiate_dipdup_state_aggregatePromiseChain{
    aggregate: (radiate_dipdup_state_aggregate_fieldsPromiseChain & {get: <R extends radiate_dipdup_state_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Promise<FieldsSelection<radiate_dipdup_state, R>[]>})
}


/** aggregated selection of "radiate.dipdup_state" */
export interface radiate_dipdup_state_aggregateObservableChain{
    aggregate: (radiate_dipdup_state_aggregate_fieldsObservableChain & {get: <R extends radiate_dipdup_state_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Observable<FieldsSelection<radiate_dipdup_state, R>[]>})
}


/** aggregate fields of "radiate.dipdup_state" */
export interface radiate_dipdup_state_aggregate_fieldsPromiseChain{
    avg: (radiate_dipdup_state_avg_fieldsPromiseChain & {get: <R extends radiate_dipdup_state_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_avg_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (radiate_dipdup_state_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (radiate_dipdup_state_max_fieldsPromiseChain & {get: <R extends radiate_dipdup_state_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_max_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_max_fields, R> | undefined)>}),
    min: (radiate_dipdup_state_min_fieldsPromiseChain & {get: <R extends radiate_dipdup_state_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_min_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_min_fields, R> | undefined)>}),
    stddev: (radiate_dipdup_state_stddev_fieldsPromiseChain & {get: <R extends radiate_dipdup_state_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_stddev_fields, R> | undefined)>}),
    stddev_pop: (radiate_dipdup_state_stddev_pop_fieldsPromiseChain & {get: <R extends radiate_dipdup_state_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (radiate_dipdup_state_stddev_samp_fieldsPromiseChain & {get: <R extends radiate_dipdup_state_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_stddev_samp_fields, R> | undefined)>}),
    sum: (radiate_dipdup_state_sum_fieldsPromiseChain & {get: <R extends radiate_dipdup_state_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_sum_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_sum_fields, R> | undefined)>}),
    var_pop: (radiate_dipdup_state_var_pop_fieldsPromiseChain & {get: <R extends radiate_dipdup_state_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_var_pop_fields, R> | undefined)>}),
    var_samp: (radiate_dipdup_state_var_samp_fieldsPromiseChain & {get: <R extends radiate_dipdup_state_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_var_samp_fields, R> | undefined)>}),
    variance: (radiate_dipdup_state_variance_fieldsPromiseChain & {get: <R extends radiate_dipdup_state_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_variance_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state_variance_fields, R> | undefined)>})
}


/** aggregate fields of "radiate.dipdup_state" */
export interface radiate_dipdup_state_aggregate_fieldsObservableChain{
    avg: (radiate_dipdup_state_avg_fieldsObservableChain & {get: <R extends radiate_dipdup_state_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_avg_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (radiate_dipdup_state_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (radiate_dipdup_state_max_fieldsObservableChain & {get: <R extends radiate_dipdup_state_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_max_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_max_fields, R> | undefined)>}),
    min: (radiate_dipdup_state_min_fieldsObservableChain & {get: <R extends radiate_dipdup_state_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_min_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_min_fields, R> | undefined)>}),
    stddev: (radiate_dipdup_state_stddev_fieldsObservableChain & {get: <R extends radiate_dipdup_state_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_stddev_fields, R> | undefined)>}),
    stddev_pop: (radiate_dipdup_state_stddev_pop_fieldsObservableChain & {get: <R extends radiate_dipdup_state_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (radiate_dipdup_state_stddev_samp_fieldsObservableChain & {get: <R extends radiate_dipdup_state_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_stddev_samp_fields, R> | undefined)>}),
    sum: (radiate_dipdup_state_sum_fieldsObservableChain & {get: <R extends radiate_dipdup_state_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_sum_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_sum_fields, R> | undefined)>}),
    var_pop: (radiate_dipdup_state_var_pop_fieldsObservableChain & {get: <R extends radiate_dipdup_state_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_var_pop_fields, R> | undefined)>}),
    var_samp: (radiate_dipdup_state_var_samp_fieldsObservableChain & {get: <R extends radiate_dipdup_state_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_var_samp_fields, R> | undefined)>}),
    variance: (radiate_dipdup_state_variance_fieldsObservableChain & {get: <R extends radiate_dipdup_state_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state_variance_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface radiate_dipdup_state_avg_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface radiate_dipdup_state_avg_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface radiate_dipdup_state_max_fieldsPromiseChain{
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    indexHash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    indexName: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
indexType: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate max on columns */
export interface radiate_dipdup_state_max_fieldsObservableChain{
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    indexHash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    indexName: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
indexType: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface radiate_dipdup_state_min_fieldsPromiseChain{
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    indexHash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    indexName: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
indexType: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface radiate_dipdup_state_min_fieldsObservableChain{
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    indexHash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    indexName: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nblock: block\nschema: schema */
indexType: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** response of any mutation on the table "radiate.dipdup_state" */
export interface radiate_dipdup_state_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Promise<FieldsSelection<radiate_dipdup_state, R>[]>})
}


/** response of any mutation on the table "radiate.dipdup_state" */
export interface radiate_dipdup_state_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Observable<FieldsSelection<radiate_dipdup_state, R>[]>})
}


/** aggregate stddev on columns */
export interface radiate_dipdup_state_stddev_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface radiate_dipdup_state_stddev_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface radiate_dipdup_state_stddev_pop_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface radiate_dipdup_state_stddev_pop_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface radiate_dipdup_state_stddev_samp_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface radiate_dipdup_state_stddev_samp_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface radiate_dipdup_state_sum_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface radiate_dipdup_state_sum_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface radiate_dipdup_state_var_pop_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface radiate_dipdup_state_var_pop_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface radiate_dipdup_state_var_samp_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface radiate_dipdup_state_var_samp_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface radiate_dipdup_state_variance_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface radiate_dipdup_state_variance_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "radiate.history" */
export interface radiate_historyPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An object relationship */
stream: (radiate_streamPromiseChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>) => Promise<FieldsSelection<radiate_stream, R>>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "radiate.history" */
export interface radiate_historyObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An object relationship */
stream: (radiate_streamObservableChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>) => Observable<FieldsSelection<radiate_stream, R>>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "radiate.history" */
export interface radiate_history_aggregatePromiseChain{
    aggregate: (radiate_history_aggregate_fieldsPromiseChain & {get: <R extends radiate_history_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_history_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Promise<FieldsSelection<radiate_history, R>[]>})
}


/** aggregated selection of "radiate.history" */
export interface radiate_history_aggregateObservableChain{
    aggregate: (radiate_history_aggregate_fieldsObservableChain & {get: <R extends radiate_history_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_history_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Observable<FieldsSelection<radiate_history, R>[]>})
}


/** aggregate fields of "radiate.history" */
export interface radiate_history_aggregate_fieldsPromiseChain{
    avg: (radiate_history_avg_fieldsPromiseChain & {get: <R extends radiate_history_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_avg_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_history_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (radiate_history_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (radiate_history_max_fieldsPromiseChain & {get: <R extends radiate_history_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_max_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_history_max_fields, R> | undefined)>}),
    min: (radiate_history_min_fieldsPromiseChain & {get: <R extends radiate_history_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_min_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_history_min_fields, R> | undefined)>}),
    stddev: (radiate_history_stddev_fieldsPromiseChain & {get: <R extends radiate_history_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_history_stddev_fields, R> | undefined)>}),
    stddev_pop: (radiate_history_stddev_pop_fieldsPromiseChain & {get: <R extends radiate_history_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_history_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (radiate_history_stddev_samp_fieldsPromiseChain & {get: <R extends radiate_history_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_history_stddev_samp_fields, R> | undefined)>}),
    sum: (radiate_history_sum_fieldsPromiseChain & {get: <R extends radiate_history_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_sum_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_history_sum_fields, R> | undefined)>}),
    var_pop: (radiate_history_var_pop_fieldsPromiseChain & {get: <R extends radiate_history_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_history_var_pop_fields, R> | undefined)>}),
    var_samp: (radiate_history_var_samp_fieldsPromiseChain & {get: <R extends radiate_history_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_history_var_samp_fields, R> | undefined)>}),
    variance: (radiate_history_variance_fieldsPromiseChain & {get: <R extends radiate_history_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_variance_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_history_variance_fields, R> | undefined)>})
}


/** aggregate fields of "radiate.history" */
export interface radiate_history_aggregate_fieldsObservableChain{
    avg: (radiate_history_avg_fieldsObservableChain & {get: <R extends radiate_history_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_avg_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_history_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (radiate_history_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (radiate_history_max_fieldsObservableChain & {get: <R extends radiate_history_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_max_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_history_max_fields, R> | undefined)>}),
    min: (radiate_history_min_fieldsObservableChain & {get: <R extends radiate_history_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_min_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_history_min_fields, R> | undefined)>}),
    stddev: (radiate_history_stddev_fieldsObservableChain & {get: <R extends radiate_history_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_history_stddev_fields, R> | undefined)>}),
    stddev_pop: (radiate_history_stddev_pop_fieldsObservableChain & {get: <R extends radiate_history_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_history_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (radiate_history_stddev_samp_fieldsObservableChain & {get: <R extends radiate_history_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_history_stddev_samp_fields, R> | undefined)>}),
    sum: (radiate_history_sum_fieldsObservableChain & {get: <R extends radiate_history_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_sum_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_history_sum_fields, R> | undefined)>}),
    var_pop: (radiate_history_var_pop_fieldsObservableChain & {get: <R extends radiate_history_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_history_var_pop_fields, R> | undefined)>}),
    var_samp: (radiate_history_var_samp_fieldsObservableChain & {get: <R extends radiate_history_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_history_var_samp_fields, R> | undefined)>}),
    variance: (radiate_history_variance_fieldsObservableChain & {get: <R extends radiate_history_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history_variance_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_history_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface radiate_history_avg_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface radiate_history_avg_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface radiate_history_max_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface radiate_history_max_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface radiate_history_min_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface radiate_history_min_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "radiate.history" */
export interface radiate_history_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Promise<FieldsSelection<radiate_history, R>[]>})
}


/** response of any mutation on the table "radiate.history" */
export interface radiate_history_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Observable<FieldsSelection<radiate_history, R>[]>})
}


/** aggregate stddev on columns */
export interface radiate_history_stddev_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface radiate_history_stddev_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface radiate_history_stddev_pop_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface radiate_history_stddev_pop_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface radiate_history_stddev_samp_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface radiate_history_stddev_samp_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface radiate_history_sum_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface radiate_history_sum_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface radiate_history_var_pop_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface radiate_history_var_pop_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface radiate_history_var_samp_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface radiate_history_var_samp_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface radiate_history_variance_fieldsPromiseChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface radiate_history_variance_fieldsObservableChain{
    amount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "radiate.stream" */
export interface radiate_streamPromiseChain{
    contractAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdOn: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    deposit: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    
/** An array relationship */
history: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => {get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Promise<FieldsSelection<radiate_history, R>[]>})&({get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Promise<FieldsSelection<radiate_history, R>[]>}),
    
/** An aggregate relationship */
history_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => radiate_history_aggregatePromiseChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Promise<FieldsSelection<radiate_history_aggregate, R>>})&(radiate_history_aggregatePromiseChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Promise<FieldsSelection<radiate_history_aggregate, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    isActive: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    receiver: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    sender: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    stopTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/** columns and relationships of "radiate.stream" */
export interface radiate_streamObservableChain{
    contractAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdOn: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    deposit: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    
/** An array relationship */
history: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => {get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Observable<FieldsSelection<radiate_history, R>[]>})&({get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Observable<FieldsSelection<radiate_history, R>[]>}),
    
/** An aggregate relationship */
history_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => radiate_history_aggregateObservableChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Observable<FieldsSelection<radiate_history_aggregate, R>>})&(radiate_history_aggregateObservableChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Observable<FieldsSelection<radiate_history_aggregate, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    isActive: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    receiver: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    sender: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    stopTime: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    token: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** aggregated selection of "radiate.stream" */
export interface radiate_stream_aggregatePromiseChain{
    aggregate: (radiate_stream_aggregate_fieldsPromiseChain & {get: <R extends radiate_stream_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Promise<FieldsSelection<radiate_stream, R>[]>})
}


/** aggregated selection of "radiate.stream" */
export interface radiate_stream_aggregateObservableChain{
    aggregate: (radiate_stream_aggregate_fieldsObservableChain & {get: <R extends radiate_stream_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Observable<FieldsSelection<radiate_stream, R>[]>})
}


/** aggregate fields of "radiate.stream" */
export interface radiate_stream_aggregate_fieldsPromiseChain{
    avg: (radiate_stream_avg_fieldsPromiseChain & {get: <R extends radiate_stream_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_avg_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (radiate_stream_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (radiate_stream_max_fieldsPromiseChain & {get: <R extends radiate_stream_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_max_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_max_fields, R> | undefined)>}),
    min: (radiate_stream_min_fieldsPromiseChain & {get: <R extends radiate_stream_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_min_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_min_fields, R> | undefined)>}),
    stddev: (radiate_stream_stddev_fieldsPromiseChain & {get: <R extends radiate_stream_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_stddev_fields, R> | undefined)>}),
    stddev_pop: (radiate_stream_stddev_pop_fieldsPromiseChain & {get: <R extends radiate_stream_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (radiate_stream_stddev_samp_fieldsPromiseChain & {get: <R extends radiate_stream_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_stddev_samp_fields, R> | undefined)>}),
    sum: (radiate_stream_sum_fieldsPromiseChain & {get: <R extends radiate_stream_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_sum_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_sum_fields, R> | undefined)>}),
    var_pop: (radiate_stream_var_pop_fieldsPromiseChain & {get: <R extends radiate_stream_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_var_pop_fields, R> | undefined)>}),
    var_samp: (radiate_stream_var_samp_fieldsPromiseChain & {get: <R extends radiate_stream_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_var_samp_fields, R> | undefined)>}),
    variance: (radiate_stream_variance_fieldsPromiseChain & {get: <R extends radiate_stream_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_variance_fields, R> | undefined)) => Promise<(FieldsSelection<radiate_stream_variance_fields, R> | undefined)>})
}


/** aggregate fields of "radiate.stream" */
export interface radiate_stream_aggregate_fieldsObservableChain{
    avg: (radiate_stream_avg_fieldsObservableChain & {get: <R extends radiate_stream_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_avg_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (radiate_stream_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (radiate_stream_max_fieldsObservableChain & {get: <R extends radiate_stream_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_max_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_max_fields, R> | undefined)>}),
    min: (radiate_stream_min_fieldsObservableChain & {get: <R extends radiate_stream_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_min_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_min_fields, R> | undefined)>}),
    stddev: (radiate_stream_stddev_fieldsObservableChain & {get: <R extends radiate_stream_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_stddev_fields, R> | undefined)>}),
    stddev_pop: (radiate_stream_stddev_pop_fieldsObservableChain & {get: <R extends radiate_stream_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (radiate_stream_stddev_samp_fieldsObservableChain & {get: <R extends radiate_stream_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_stddev_samp_fields, R> | undefined)>}),
    sum: (radiate_stream_sum_fieldsObservableChain & {get: <R extends radiate_stream_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_sum_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_sum_fields, R> | undefined)>}),
    var_pop: (radiate_stream_var_pop_fieldsObservableChain & {get: <R extends radiate_stream_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_var_pop_fields, R> | undefined)>}),
    var_samp: (radiate_stream_var_samp_fieldsObservableChain & {get: <R extends radiate_stream_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_var_samp_fields, R> | undefined)>}),
    variance: (radiate_stream_variance_fieldsObservableChain & {get: <R extends radiate_stream_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream_variance_fields, R> | undefined)) => Observable<(FieldsSelection<radiate_stream_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface radiate_stream_avg_fieldsPromiseChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface radiate_stream_avg_fieldsObservableChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface radiate_stream_max_fieldsPromiseChain{
    contractAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    createdOn: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    receiver: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    sender: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    stopTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate max on columns */
export interface radiate_stream_max_fieldsObservableChain{
    contractAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    createdOn: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    receiver: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    sender: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    stopTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface radiate_stream_min_fieldsPromiseChain{
    contractAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    createdOn: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    receiver: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    sender: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    stopTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface radiate_stream_min_fieldsObservableChain{
    contractAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    createdOn: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    receiver: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    sender: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    stopTime: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    streamId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** response of any mutation on the table "radiate.stream" */
export interface radiate_stream_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Promise<FieldsSelection<radiate_stream, R>[]>})
}


/** response of any mutation on the table "radiate.stream" */
export interface radiate_stream_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Observable<FieldsSelection<radiate_stream, R>[]>})
}


/** aggregate stddev on columns */
export interface radiate_stream_stddev_fieldsPromiseChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface radiate_stream_stddev_fieldsObservableChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface radiate_stream_stddev_pop_fieldsPromiseChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface radiate_stream_stddev_pop_fieldsObservableChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface radiate_stream_stddev_samp_fieldsPromiseChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface radiate_stream_stddev_samp_fieldsObservableChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface radiate_stream_sum_fieldsPromiseChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface radiate_stream_sum_fieldsObservableChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface radiate_stream_var_pop_fieldsPromiseChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface radiate_stream_var_pop_fieldsObservableChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface radiate_stream_var_samp_fieldsPromiseChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface radiate_stream_var_samp_fieldsObservableChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface radiate_stream_variance_fieldsPromiseChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface radiate_stream_variance_fieldsObservableChain{
    deposit: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    ratePerSecond: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    remainingBalance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}

export interface subscription_rootPromiseChain{
    
/** fetch data from the table: "radiate.dipdup_state" */
radiateDipdupState: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (radiate_dipdup_state_bool_exp | null)}) => {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Promise<FieldsSelection<radiate_dipdup_state, R>[]>})&({get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Promise<FieldsSelection<radiate_dipdup_state, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.dipdup_state" */
radiateDipdupStateAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (radiate_dipdup_state_bool_exp | null)}) => radiate_dipdup_state_aggregatePromiseChain & {get: <R extends radiate_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state_aggregate, R>) => Promise<FieldsSelection<radiate_dipdup_state_aggregate, R>>})&(radiate_dipdup_state_aggregatePromiseChain & {get: <R extends radiate_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state_aggregate, R>) => Promise<FieldsSelection<radiate_dipdup_state_aggregate, R>>}),
    
/** fetch data from the table: "radiate.dipdup_state" using primary key columns */
radiateDipdupStateByPk: ((args: {indexName: Scalars['String']}) => radiate_dipdup_statePromiseChain & {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state, R> | undefined)) => Promise<(FieldsSelection<radiate_dipdup_state, R> | undefined)>}),
    
/** fetch data from the table: "radiate.history" */
radiateHistory: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => {get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Promise<FieldsSelection<radiate_history, R>[]>})&({get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Promise<FieldsSelection<radiate_history, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.history" */
radiateHistoryAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => radiate_history_aggregatePromiseChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Promise<FieldsSelection<radiate_history_aggregate, R>>})&(radiate_history_aggregatePromiseChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Promise<FieldsSelection<radiate_history_aggregate, R>>}),
    
/** fetch data from the table: "radiate.history" using primary key columns */
radiateHistoryByPk: ((args: {id: Scalars['Int']}) => radiate_historyPromiseChain & {get: <R extends radiate_historyRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history, R> | undefined)) => Promise<(FieldsSelection<radiate_history, R> | undefined)>}),
    
/** fetch data from the table: "radiate.stream" */
radiateStream: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_stream_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_stream_order_by[] | null),
/** filter the rows returned */
where?: (radiate_stream_bool_exp | null)}) => {get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Promise<FieldsSelection<radiate_stream, R>[]>})&({get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Promise<FieldsSelection<radiate_stream, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.stream" */
radiateStreamAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_stream_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_stream_order_by[] | null),
/** filter the rows returned */
where?: (radiate_stream_bool_exp | null)}) => radiate_stream_aggregatePromiseChain & {get: <R extends radiate_stream_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream_aggregate, R>) => Promise<FieldsSelection<radiate_stream_aggregate, R>>})&(radiate_stream_aggregatePromiseChain & {get: <R extends radiate_stream_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream_aggregate, R>) => Promise<FieldsSelection<radiate_stream_aggregate, R>>}),
    
/** fetch data from the table: "radiate.stream" using primary key columns */
radiateStreamByPk: ((args: {id: Scalars['Int']}) => radiate_streamPromiseChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream, R> | undefined)) => Promise<(FieldsSelection<radiate_stream, R> | undefined)>})
}

export interface subscription_rootObservableChain{
    
/** fetch data from the table: "radiate.dipdup_state" */
radiateDipdupState: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (radiate_dipdup_state_bool_exp | null)}) => {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Observable<FieldsSelection<radiate_dipdup_state, R>[]>})&({get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state, R>[]) => Observable<FieldsSelection<radiate_dipdup_state, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.dipdup_state" */
radiateDipdupStateAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_dipdup_state_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_dipdup_state_order_by[] | null),
/** filter the rows returned */
where?: (radiate_dipdup_state_bool_exp | null)}) => radiate_dipdup_state_aggregateObservableChain & {get: <R extends radiate_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state_aggregate, R>) => Observable<FieldsSelection<radiate_dipdup_state_aggregate, R>>})&(radiate_dipdup_state_aggregateObservableChain & {get: <R extends radiate_dipdup_state_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_dipdup_state_aggregate, R>) => Observable<FieldsSelection<radiate_dipdup_state_aggregate, R>>}),
    
/** fetch data from the table: "radiate.dipdup_state" using primary key columns */
radiateDipdupStateByPk: ((args: {indexName: Scalars['String']}) => radiate_dipdup_stateObservableChain & {get: <R extends radiate_dipdup_stateRequest>(request: R, defaultValue?: (FieldsSelection<radiate_dipdup_state, R> | undefined)) => Observable<(FieldsSelection<radiate_dipdup_state, R> | undefined)>}),
    
/** fetch data from the table: "radiate.history" */
radiateHistory: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => {get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Observable<FieldsSelection<radiate_history, R>[]>})&({get: <R extends radiate_historyRequest>(request: R, defaultValue?: FieldsSelection<radiate_history, R>[]) => Observable<FieldsSelection<radiate_history, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.history" */
radiateHistoryAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_history_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_history_order_by[] | null),
/** filter the rows returned */
where?: (radiate_history_bool_exp | null)}) => radiate_history_aggregateObservableChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Observable<FieldsSelection<radiate_history_aggregate, R>>})&(radiate_history_aggregateObservableChain & {get: <R extends radiate_history_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_history_aggregate, R>) => Observable<FieldsSelection<radiate_history_aggregate, R>>}),
    
/** fetch data from the table: "radiate.history" using primary key columns */
radiateHistoryByPk: ((args: {id: Scalars['Int']}) => radiate_historyObservableChain & {get: <R extends radiate_historyRequest>(request: R, defaultValue?: (FieldsSelection<radiate_history, R> | undefined)) => Observable<(FieldsSelection<radiate_history, R> | undefined)>}),
    
/** fetch data from the table: "radiate.stream" */
radiateStream: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_stream_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_stream_order_by[] | null),
/** filter the rows returned */
where?: (radiate_stream_bool_exp | null)}) => {get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Observable<FieldsSelection<radiate_stream, R>[]>})&({get: <R extends radiate_streamRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream, R>[]) => Observable<FieldsSelection<radiate_stream, R>[]>}),
    
/** fetch aggregated fields from the table: "radiate.stream" */
radiateStreamAggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (radiate_stream_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (radiate_stream_order_by[] | null),
/** filter the rows returned */
where?: (radiate_stream_bool_exp | null)}) => radiate_stream_aggregateObservableChain & {get: <R extends radiate_stream_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream_aggregate, R>) => Observable<FieldsSelection<radiate_stream_aggregate, R>>})&(radiate_stream_aggregateObservableChain & {get: <R extends radiate_stream_aggregateRequest>(request: R, defaultValue?: FieldsSelection<radiate_stream_aggregate, R>) => Observable<FieldsSelection<radiate_stream_aggregate, R>>}),
    
/** fetch data from the table: "radiate.stream" using primary key columns */
radiateStreamByPk: ((args: {id: Scalars['Int']}) => radiate_streamObservableChain & {get: <R extends radiate_streamRequest>(request: R, defaultValue?: (FieldsSelection<radiate_stream, R> | undefined)) => Observable<(FieldsSelection<radiate_stream, R> | undefined)>})
}