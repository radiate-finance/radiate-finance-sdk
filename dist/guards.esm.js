
var mutation_root_possibleTypes = ['mutation_root']
export var ismutation_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



var query_root_possibleTypes = ['query_root']
export var isquery_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_possibleTypes = ['radiate_dipdup_state']
export var isradiate_dipdup_state = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state"')
  return radiate_dipdup_state_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_aggregate_possibleTypes = ['radiate_dipdup_state_aggregate']
export var isradiate_dipdup_state_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_aggregate"')
  return radiate_dipdup_state_aggregate_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_aggregate_fields_possibleTypes = ['radiate_dipdup_state_aggregate_fields']
export var isradiate_dipdup_state_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_aggregate_fields"')
  return radiate_dipdup_state_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_avg_fields_possibleTypes = ['radiate_dipdup_state_avg_fields']
export var isradiate_dipdup_state_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_avg_fields"')
  return radiate_dipdup_state_avg_fields_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_max_fields_possibleTypes = ['radiate_dipdup_state_max_fields']
export var isradiate_dipdup_state_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_max_fields"')
  return radiate_dipdup_state_max_fields_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_min_fields_possibleTypes = ['radiate_dipdup_state_min_fields']
export var isradiate_dipdup_state_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_min_fields"')
  return radiate_dipdup_state_min_fields_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_mutation_response_possibleTypes = ['radiate_dipdup_state_mutation_response']
export var isradiate_dipdup_state_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_mutation_response"')
  return radiate_dipdup_state_mutation_response_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_stddev_fields_possibleTypes = ['radiate_dipdup_state_stddev_fields']
export var isradiate_dipdup_state_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_stddev_fields"')
  return radiate_dipdup_state_stddev_fields_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_stddev_pop_fields_possibleTypes = ['radiate_dipdup_state_stddev_pop_fields']
export var isradiate_dipdup_state_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_stddev_pop_fields"')
  return radiate_dipdup_state_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_stddev_samp_fields_possibleTypes = ['radiate_dipdup_state_stddev_samp_fields']
export var isradiate_dipdup_state_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_stddev_samp_fields"')
  return radiate_dipdup_state_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_sum_fields_possibleTypes = ['radiate_dipdup_state_sum_fields']
export var isradiate_dipdup_state_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_sum_fields"')
  return radiate_dipdup_state_sum_fields_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_var_pop_fields_possibleTypes = ['radiate_dipdup_state_var_pop_fields']
export var isradiate_dipdup_state_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_var_pop_fields"')
  return radiate_dipdup_state_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_var_samp_fields_possibleTypes = ['radiate_dipdup_state_var_samp_fields']
export var isradiate_dipdup_state_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_var_samp_fields"')
  return radiate_dipdup_state_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var radiate_dipdup_state_variance_fields_possibleTypes = ['radiate_dipdup_state_variance_fields']
export var isradiate_dipdup_state_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_dipdup_state_variance_fields"')
  return radiate_dipdup_state_variance_fields_possibleTypes.includes(obj.__typename)
}



var radiate_history_possibleTypes = ['radiate_history']
export var isradiate_history = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history"')
  return radiate_history_possibleTypes.includes(obj.__typename)
}



var radiate_history_aggregate_possibleTypes = ['radiate_history_aggregate']
export var isradiate_history_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_aggregate"')
  return radiate_history_aggregate_possibleTypes.includes(obj.__typename)
}



var radiate_history_aggregate_fields_possibleTypes = ['radiate_history_aggregate_fields']
export var isradiate_history_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_aggregate_fields"')
  return radiate_history_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var radiate_history_avg_fields_possibleTypes = ['radiate_history_avg_fields']
export var isradiate_history_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_avg_fields"')
  return radiate_history_avg_fields_possibleTypes.includes(obj.__typename)
}



var radiate_history_max_fields_possibleTypes = ['radiate_history_max_fields']
export var isradiate_history_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_max_fields"')
  return radiate_history_max_fields_possibleTypes.includes(obj.__typename)
}



var radiate_history_min_fields_possibleTypes = ['radiate_history_min_fields']
export var isradiate_history_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_min_fields"')
  return radiate_history_min_fields_possibleTypes.includes(obj.__typename)
}



var radiate_history_mutation_response_possibleTypes = ['radiate_history_mutation_response']
export var isradiate_history_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_mutation_response"')
  return radiate_history_mutation_response_possibleTypes.includes(obj.__typename)
}



var radiate_history_stddev_fields_possibleTypes = ['radiate_history_stddev_fields']
export var isradiate_history_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_stddev_fields"')
  return radiate_history_stddev_fields_possibleTypes.includes(obj.__typename)
}



var radiate_history_stddev_pop_fields_possibleTypes = ['radiate_history_stddev_pop_fields']
export var isradiate_history_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_stddev_pop_fields"')
  return radiate_history_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var radiate_history_stddev_samp_fields_possibleTypes = ['radiate_history_stddev_samp_fields']
export var isradiate_history_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_stddev_samp_fields"')
  return radiate_history_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var radiate_history_sum_fields_possibleTypes = ['radiate_history_sum_fields']
export var isradiate_history_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_sum_fields"')
  return radiate_history_sum_fields_possibleTypes.includes(obj.__typename)
}



var radiate_history_var_pop_fields_possibleTypes = ['radiate_history_var_pop_fields']
export var isradiate_history_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_var_pop_fields"')
  return radiate_history_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var radiate_history_var_samp_fields_possibleTypes = ['radiate_history_var_samp_fields']
export var isradiate_history_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_var_samp_fields"')
  return radiate_history_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var radiate_history_variance_fields_possibleTypes = ['radiate_history_variance_fields']
export var isradiate_history_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_history_variance_fields"')
  return radiate_history_variance_fields_possibleTypes.includes(obj.__typename)
}



var radiate_stream_possibleTypes = ['radiate_stream']
export var isradiate_stream = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream"')
  return radiate_stream_possibleTypes.includes(obj.__typename)
}



var radiate_stream_aggregate_possibleTypes = ['radiate_stream_aggregate']
export var isradiate_stream_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_aggregate"')
  return radiate_stream_aggregate_possibleTypes.includes(obj.__typename)
}



var radiate_stream_aggregate_fields_possibleTypes = ['radiate_stream_aggregate_fields']
export var isradiate_stream_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_aggregate_fields"')
  return radiate_stream_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var radiate_stream_avg_fields_possibleTypes = ['radiate_stream_avg_fields']
export var isradiate_stream_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_avg_fields"')
  return radiate_stream_avg_fields_possibleTypes.includes(obj.__typename)
}



var radiate_stream_max_fields_possibleTypes = ['radiate_stream_max_fields']
export var isradiate_stream_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_max_fields"')
  return radiate_stream_max_fields_possibleTypes.includes(obj.__typename)
}



var radiate_stream_min_fields_possibleTypes = ['radiate_stream_min_fields']
export var isradiate_stream_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_min_fields"')
  return radiate_stream_min_fields_possibleTypes.includes(obj.__typename)
}



var radiate_stream_mutation_response_possibleTypes = ['radiate_stream_mutation_response']
export var isradiate_stream_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_mutation_response"')
  return radiate_stream_mutation_response_possibleTypes.includes(obj.__typename)
}



var radiate_stream_stddev_fields_possibleTypes = ['radiate_stream_stddev_fields']
export var isradiate_stream_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_stddev_fields"')
  return radiate_stream_stddev_fields_possibleTypes.includes(obj.__typename)
}



var radiate_stream_stddev_pop_fields_possibleTypes = ['radiate_stream_stddev_pop_fields']
export var isradiate_stream_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_stddev_pop_fields"')
  return radiate_stream_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var radiate_stream_stddev_samp_fields_possibleTypes = ['radiate_stream_stddev_samp_fields']
export var isradiate_stream_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_stddev_samp_fields"')
  return radiate_stream_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var radiate_stream_sum_fields_possibleTypes = ['radiate_stream_sum_fields']
export var isradiate_stream_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_sum_fields"')
  return radiate_stream_sum_fields_possibleTypes.includes(obj.__typename)
}



var radiate_stream_var_pop_fields_possibleTypes = ['radiate_stream_var_pop_fields']
export var isradiate_stream_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_var_pop_fields"')
  return radiate_stream_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var radiate_stream_var_samp_fields_possibleTypes = ['radiate_stream_var_samp_fields']
export var isradiate_stream_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_var_samp_fields"')
  return radiate_stream_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var radiate_stream_variance_fields_possibleTypes = ['radiate_stream_variance_fields']
export var isradiate_stream_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isradiate_stream_variance_fields"')
  return radiate_stream_variance_fields_possibleTypes.includes(obj.__typename)
}



var subscription_root_possibleTypes = ['subscription_root']
export var issubscription_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}
