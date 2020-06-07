export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "generations" */
  generations: Array<Generations>;
  /** fetch aggregated fields from the table: "generations" */
  generations_aggregate: Generations_Aggregate;
  /** fetch data from the table: "generations" using primary key columns */
  generations_by_pk?: Maybe<Generations>;
  /** fetch data from the table: "pokemon" */
  pokemon: Array<Pokemon>;
  /** fetch aggregated fields from the table: "pokemon" */
  pokemon_aggregate: Pokemon_Aggregate;
  /** fetch data from the table: "pokemon" using primary key columns */
  pokemon_by_pk?: Maybe<Pokemon>;
  /** fetch data from the table: "rounds" */
  rounds: Array<Rounds>;
  /** fetch aggregated fields from the table: "rounds" */
  rounds_aggregate: Rounds_Aggregate;
  /** fetch data from the table: "rounds" using primary key columns */
  rounds_by_pk?: Maybe<Rounds>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "turns" */
  turns: Array<Turns>;
  /** fetch aggregated fields from the table: "turns" */
  turns_aggregate: Turns_Aggregate;
  /** fetch data from the table: "turns" using primary key columns */
  turns_by_pk?: Maybe<Turns>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootGenerationsArgs = {
  distinct_on?: Maybe<Array<Generations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Generations_Order_By>>;
  where?: Maybe<Generations_Bool_Exp>;
};


/** query root */
export type Query_RootGenerations_AggregateArgs = {
  distinct_on?: Maybe<Array<Generations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Generations_Order_By>>;
  where?: Maybe<Generations_Bool_Exp>;
};


/** query root */
export type Query_RootGenerations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPokemonArgs = {
  distinct_on?: Maybe<Array<Pokemon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pokemon_Order_By>>;
  where?: Maybe<Pokemon_Bool_Exp>;
};


/** query root */
export type Query_RootPokemon_AggregateArgs = {
  distinct_on?: Maybe<Array<Pokemon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pokemon_Order_By>>;
  where?: Maybe<Pokemon_Bool_Exp>;
};


/** query root */
export type Query_RootPokemon_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRoundsArgs = {
  distinct_on?: Maybe<Array<Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rounds_Order_By>>;
  where?: Maybe<Rounds_Bool_Exp>;
};


/** query root */
export type Query_RootRounds_AggregateArgs = {
  distinct_on?: Maybe<Array<Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rounds_Order_By>>;
  where?: Maybe<Rounds_Bool_Exp>;
};


/** query root */
export type Query_RootRounds_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


/** query root */
export type Query_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


/** query root */
export type Query_RootSessions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTurnsArgs = {
  distinct_on?: Maybe<Array<Turns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Turns_Order_By>>;
  where?: Maybe<Turns_Bool_Exp>;
};


/** query root */
export type Query_RootTurns_AggregateArgs = {
  distinct_on?: Maybe<Array<Turns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Turns_Order_By>>;
  where?: Maybe<Turns_Bool_Exp>;
};


/** query root */
export type Query_RootTurns_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** select columns of table "generations" */
export enum Generations_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** ordering options when selecting data from "generations" */
export type Generations_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Boolean expression to filter rows from the table "generations". All fields are combined with a logical 'AND'. */
export type Generations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Generations_Bool_Exp>>>;
  _not?: Maybe<Generations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Generations_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/**
 * A Generation represents the Pokemon generational period.
 * 
 * 
 * columns and relationships of "generations"
 */
export type Generations = {
  __typename?: 'generations';
  created_at: Scalars['timestamptz'];
  /** The unique id for generation, equivalent to its generation number. */
  id: Scalars['Int'];
  /** The display name for the generation number. */
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "generations" */
export type Generations_Aggregate = {
  __typename?: 'generations_aggregate';
  aggregate?: Maybe<Generations_Aggregate_Fields>;
  nodes: Array<Generations>;
};

/** aggregate fields of "generations" */
export type Generations_Aggregate_Fields = {
  __typename?: 'generations_aggregate_fields';
  avg?: Maybe<Generations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Generations_Max_Fields>;
  min?: Maybe<Generations_Min_Fields>;
  stddev?: Maybe<Generations_Stddev_Fields>;
  stddev_pop?: Maybe<Generations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Generations_Stddev_Samp_Fields>;
  sum?: Maybe<Generations_Sum_Fields>;
  var_pop?: Maybe<Generations_Var_Pop_Fields>;
  var_samp?: Maybe<Generations_Var_Samp_Fields>;
  variance?: Maybe<Generations_Variance_Fields>;
};


/** aggregate fields of "generations" */
export type Generations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Generations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Generations_Avg_Fields = {
  __typename?: 'generations_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Generations_Max_Fields = {
  __typename?: 'generations_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Generations_Min_Fields = {
  __typename?: 'generations_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Generations_Stddev_Fields = {
  __typename?: 'generations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Generations_Stddev_Pop_Fields = {
  __typename?: 'generations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Generations_Stddev_Samp_Fields = {
  __typename?: 'generations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Generations_Sum_Fields = {
  __typename?: 'generations_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Generations_Var_Pop_Fields = {
  __typename?: 'generations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Generations_Var_Samp_Fields = {
  __typename?: 'generations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Generations_Variance_Fields = {
  __typename?: 'generations_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** select columns of table "pokemon" */
export enum Pokemon_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GenerationId = 'generation_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** ordering options when selecting data from "pokemon" */
export type Pokemon_Order_By = {
  created_at?: Maybe<Order_By>;
  generation_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pokemon". All fields are combined with a logical 'AND'. */
export type Pokemon_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Pokemon_Bool_Exp>>>;
  _not?: Maybe<Pokemon_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Pokemon_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  generation_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/**
 * A pokemon represents the Pokedex information for a pokemon.
 * 
 * 
 * columns and relationships of "pokemon"
 */
export type Pokemon = {
  __typename?: 'pokemon';
  created_at: Scalars['timestamptz'];
  /** The generation the pokemon was introduced. */
  generation_id: Scalars['Int'];
  /** The unique id of the pokemon, equivalent to its Pokedex number. */
  id: Scalars['Int'];
  /** The name of the pokemon. */
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "pokemon" */
export type Pokemon_Aggregate = {
  __typename?: 'pokemon_aggregate';
  aggregate?: Maybe<Pokemon_Aggregate_Fields>;
  nodes: Array<Pokemon>;
};

/** aggregate fields of "pokemon" */
export type Pokemon_Aggregate_Fields = {
  __typename?: 'pokemon_aggregate_fields';
  avg?: Maybe<Pokemon_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Pokemon_Max_Fields>;
  min?: Maybe<Pokemon_Min_Fields>;
  stddev?: Maybe<Pokemon_Stddev_Fields>;
  stddev_pop?: Maybe<Pokemon_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pokemon_Stddev_Samp_Fields>;
  sum?: Maybe<Pokemon_Sum_Fields>;
  var_pop?: Maybe<Pokemon_Var_Pop_Fields>;
  var_samp?: Maybe<Pokemon_Var_Samp_Fields>;
  variance?: Maybe<Pokemon_Variance_Fields>;
};


/** aggregate fields of "pokemon" */
export type Pokemon_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pokemon_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Pokemon_Avg_Fields = {
  __typename?: 'pokemon_avg_fields';
  generation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Pokemon_Max_Fields = {
  __typename?: 'pokemon_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  generation_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Pokemon_Min_Fields = {
  __typename?: 'pokemon_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  generation_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Pokemon_Stddev_Fields = {
  __typename?: 'pokemon_stddev_fields';
  generation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Pokemon_Stddev_Pop_Fields = {
  __typename?: 'pokemon_stddev_pop_fields';
  generation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Pokemon_Stddev_Samp_Fields = {
  __typename?: 'pokemon_stddev_samp_fields';
  generation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Pokemon_Sum_Fields = {
  __typename?: 'pokemon_sum_fields';
  generation_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Pokemon_Var_Pop_Fields = {
  __typename?: 'pokemon_var_pop_fields';
  generation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Pokemon_Var_Samp_Fields = {
  __typename?: 'pokemon_var_samp_fields';
  generation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Pokemon_Variance_Fields = {
  __typename?: 'pokemon_variance_fields';
  generation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** select columns of table "rounds" */
export enum Rounds_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  Turns = 'turns',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** ordering options when selecting data from "rounds" */
export type Rounds_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  turns?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rounds". All fields are combined with a logical 'AND'. */
export type Rounds_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Rounds_Bool_Exp>>>;
  _not?: Maybe<Rounds_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Rounds_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  session_id?: Maybe<Int_Comparison_Exp>;
  turns?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/**
 * A Round represents the collection of player Turns that occur at the same time.
 * 
 * 
 * columns and relationships of "rounds"
 */
export type Rounds = {
  __typename?: 'rounds';
  created_at: Scalars['timestamptz'];
  /** A unique id for a round within a game session. */
  id: Scalars['Int'];
  /** The id of the current game session. */
  session_id: Scalars['Int'];
  /** The array of turn ids currently going on in this round. */
  turns: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "rounds" */
export type Rounds_Aggregate = {
  __typename?: 'rounds_aggregate';
  aggregate?: Maybe<Rounds_Aggregate_Fields>;
  nodes: Array<Rounds>;
};

/** aggregate fields of "rounds" */
export type Rounds_Aggregate_Fields = {
  __typename?: 'rounds_aggregate_fields';
  avg?: Maybe<Rounds_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Rounds_Max_Fields>;
  min?: Maybe<Rounds_Min_Fields>;
  stddev?: Maybe<Rounds_Stddev_Fields>;
  stddev_pop?: Maybe<Rounds_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rounds_Stddev_Samp_Fields>;
  sum?: Maybe<Rounds_Sum_Fields>;
  var_pop?: Maybe<Rounds_Var_Pop_Fields>;
  var_samp?: Maybe<Rounds_Var_Samp_Fields>;
  variance?: Maybe<Rounds_Variance_Fields>;
};


/** aggregate fields of "rounds" */
export type Rounds_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rounds_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rounds_Avg_Fields = {
  __typename?: 'rounds_avg_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Rounds_Max_Fields = {
  __typename?: 'rounds_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  turns?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rounds_Min_Fields = {
  __typename?: 'rounds_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  turns?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rounds_Stddev_Fields = {
  __typename?: 'rounds_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rounds_Stddev_Pop_Fields = {
  __typename?: 'rounds_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rounds_Stddev_Samp_Fields = {
  __typename?: 'rounds_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rounds_Sum_Fields = {
  __typename?: 'rounds_sum_fields';
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Rounds_Var_Pop_Fields = {
  __typename?: 'rounds_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rounds_Var_Samp_Fields = {
  __typename?: 'rounds_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rounds_Variance_Fields = {
  __typename?: 'rounds_variance_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentRound = 'current_round',
  /** column name */
  Id = 'id',
  /** column name */
  Rounds = 'rounds',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Users = 'users'
}

/** ordering options when selecting data from "sessions" */
export type Sessions_Order_By = {
  created_at?: Maybe<Order_By>;
  current_round?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  rounds?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Sessions_Bool_Exp>>>;
  _not?: Maybe<Sessions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Sessions_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  current_round?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  rounds?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<String_Comparison_Exp>;
};

/**
 * A Session represents the session Users can join to play the game together.
 * 
 * 
 * columns and relationships of "sessions"
 */
export type Sessions = {
  __typename?: 'sessions';
  created_at: Scalars['timestamptz'];
  /** A quick reference to the current round happening in the game session. Is null if no round is active. */
  current_round?: Maybe<Scalars['Int']>;
  /** The unique id of a session. */
  id: Scalars['Int'];
  /** An array of the rounds inside the game session, in chronological order. */
  rounds?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An array of user ids in the session. */
  users?: Maybe<Scalars['String']>;
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  avg?: Maybe<Sessions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
  stddev?: Maybe<Sessions_Stddev_Fields>;
  stddev_pop?: Maybe<Sessions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sessions_Stddev_Samp_Fields>;
  sum?: Maybe<Sessions_Sum_Fields>;
  var_pop?: Maybe<Sessions_Var_Pop_Fields>;
  var_samp?: Maybe<Sessions_Var_Samp_Fields>;
  variance?: Maybe<Sessions_Variance_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sessions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Sessions_Avg_Fields = {
  __typename?: 'sessions_avg_fields';
  current_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  current_round?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rounds?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  current_round?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rounds?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Sessions_Stddev_Fields = {
  __typename?: 'sessions_stddev_fields';
  current_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Sessions_Stddev_Pop_Fields = {
  __typename?: 'sessions_stddev_pop_fields';
  current_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Sessions_Stddev_Samp_Fields = {
  __typename?: 'sessions_stddev_samp_fields';
  current_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Sessions_Sum_Fields = {
  __typename?: 'sessions_sum_fields';
  current_round?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Sessions_Var_Pop_Fields = {
  __typename?: 'sessions_var_pop_fields';
  current_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Sessions_Var_Samp_Fields = {
  __typename?: 'sessions_var_samp_fields';
  current_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Sessions_Variance_Fields = {
  __typename?: 'sessions_variance_fields';
  current_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** select columns of table "turns" */
export enum Turns_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Drawing = 'drawing',
  /** column name */
  Id = 'id',
  /** column name */
  PokemonId = 'pokemon_id',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** ordering options when selecting data from "turns" */
export type Turns_Order_By = {
  created_at?: Maybe<Order_By>;
  drawing?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pokemon_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "turns". All fields are combined with a logical 'AND'. */
export type Turns_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Turns_Bool_Exp>>>;
  _not?: Maybe<Turns_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Turns_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  drawing?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  pokemon_id?: Maybe<Int_Comparison_Exp>;
  round_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/**
 * A Turn represents the gameplay for a user within a round.
 * 
 * 
 * columns and relationships of "turns"
 */
export type Turns = {
  __typename?: 'turns';
  created_at: Scalars['timestamptz'];
  /** The drawing captured from the canvas after a turn is ended. */
  drawing: Scalars['String'];
  /** The unique id of the turn. */
  id: Scalars['Int'];
  /** The id of the pokemon being drawn. */
  pokemon_id: Scalars['Int'];
  /** The id of the round this turn occurs in. */
  round_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** The id of the user who's turn it is. */
  user_id: Scalars['Int'];
};

/** aggregated selection of "turns" */
export type Turns_Aggregate = {
  __typename?: 'turns_aggregate';
  aggregate?: Maybe<Turns_Aggregate_Fields>;
  nodes: Array<Turns>;
};

/** aggregate fields of "turns" */
export type Turns_Aggregate_Fields = {
  __typename?: 'turns_aggregate_fields';
  avg?: Maybe<Turns_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Turns_Max_Fields>;
  min?: Maybe<Turns_Min_Fields>;
  stddev?: Maybe<Turns_Stddev_Fields>;
  stddev_pop?: Maybe<Turns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Turns_Stddev_Samp_Fields>;
  sum?: Maybe<Turns_Sum_Fields>;
  var_pop?: Maybe<Turns_Var_Pop_Fields>;
  var_samp?: Maybe<Turns_Var_Samp_Fields>;
  variance?: Maybe<Turns_Variance_Fields>;
};


/** aggregate fields of "turns" */
export type Turns_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Turns_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Turns_Avg_Fields = {
  __typename?: 'turns_avg_fields';
  id?: Maybe<Scalars['Float']>;
  pokemon_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Turns_Max_Fields = {
  __typename?: 'turns_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  drawing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  pokemon_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Turns_Min_Fields = {
  __typename?: 'turns_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  drawing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  pokemon_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Turns_Stddev_Fields = {
  __typename?: 'turns_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  pokemon_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Turns_Stddev_Pop_Fields = {
  __typename?: 'turns_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pokemon_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Turns_Stddev_Samp_Fields = {
  __typename?: 'turns_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pokemon_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Turns_Sum_Fields = {
  __typename?: 'turns_sum_fields';
  id?: Maybe<Scalars['Int']>;
  pokemon_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Turns_Var_Pop_Fields = {
  __typename?: 'turns_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pokemon_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Turns_Var_Samp_Fields = {
  __typename?: 'turns_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pokemon_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Turns_Variance_Fields = {
  __typename?: 'turns_variance_fields';
  id?: Maybe<Scalars['Float']>;
  pokemon_id?: Maybe<Scalars['Float']>;
  round_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  session_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/**
 * A User represents a players in the game.
 * 
 * 
 * columns and relationships of "users"
 */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  /** The display name for the user profile. */
  display_name: Scalars['String'];
  /** The unique id of a user. */
  id: Scalars['Int'];
  /** The id of the session the user is in. */
  session_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "generations" */
  delete_generations?: Maybe<Generations_Mutation_Response>;
  /** delete single row from the table: "generations" */
  delete_generations_by_pk?: Maybe<Generations>;
  /** delete data from the table: "pokemon" */
  delete_pokemon?: Maybe<Pokemon_Mutation_Response>;
  /** delete single row from the table: "pokemon" */
  delete_pokemon_by_pk?: Maybe<Pokemon>;
  /** delete data from the table: "rounds" */
  delete_rounds?: Maybe<Rounds_Mutation_Response>;
  /** delete single row from the table: "rounds" */
  delete_rounds_by_pk?: Maybe<Rounds>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "turns" */
  delete_turns?: Maybe<Turns_Mutation_Response>;
  /** delete single row from the table: "turns" */
  delete_turns_by_pk?: Maybe<Turns>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "generations" */
  insert_generations?: Maybe<Generations_Mutation_Response>;
  /** insert a single row into the table: "generations" */
  insert_generations_one?: Maybe<Generations>;
  /** insert data into the table: "pokemon" */
  insert_pokemon?: Maybe<Pokemon_Mutation_Response>;
  /** insert a single row into the table: "pokemon" */
  insert_pokemon_one?: Maybe<Pokemon>;
  /** insert data into the table: "rounds" */
  insert_rounds?: Maybe<Rounds_Mutation_Response>;
  /** insert a single row into the table: "rounds" */
  insert_rounds_one?: Maybe<Rounds>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "turns" */
  insert_turns?: Maybe<Turns_Mutation_Response>;
  /** insert a single row into the table: "turns" */
  insert_turns_one?: Maybe<Turns>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "generations" */
  update_generations?: Maybe<Generations_Mutation_Response>;
  /** update single row of the table: "generations" */
  update_generations_by_pk?: Maybe<Generations>;
  /** update data of the table: "pokemon" */
  update_pokemon?: Maybe<Pokemon_Mutation_Response>;
  /** update single row of the table: "pokemon" */
  update_pokemon_by_pk?: Maybe<Pokemon>;
  /** update data of the table: "rounds" */
  update_rounds?: Maybe<Rounds_Mutation_Response>;
  /** update single row of the table: "rounds" */
  update_rounds_by_pk?: Maybe<Rounds>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update data of the table: "turns" */
  update_turns?: Maybe<Turns_Mutation_Response>;
  /** update single row of the table: "turns" */
  update_turns_by_pk?: Maybe<Turns>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_GenerationsArgs = {
  where: Generations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Generations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PokemonArgs = {
  where: Pokemon_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pokemon_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RoundsArgs = {
  where: Rounds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rounds_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TurnsArgs = {
  where: Turns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Turns_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_GenerationsArgs = {
  objects: Array<Generations_Insert_Input>;
  on_conflict?: Maybe<Generations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Generations_OneArgs = {
  object: Generations_Insert_Input;
  on_conflict?: Maybe<Generations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PokemonArgs = {
  objects: Array<Pokemon_Insert_Input>;
  on_conflict?: Maybe<Pokemon_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pokemon_OneArgs = {
  object: Pokemon_Insert_Input;
  on_conflict?: Maybe<Pokemon_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoundsArgs = {
  objects: Array<Rounds_Insert_Input>;
  on_conflict?: Maybe<Rounds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rounds_OneArgs = {
  object: Rounds_Insert_Input;
  on_conflict?: Maybe<Rounds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TurnsArgs = {
  objects: Array<Turns_Insert_Input>;
  on_conflict?: Maybe<Turns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Turns_OneArgs = {
  object: Turns_Insert_Input;
  on_conflict?: Maybe<Turns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GenerationsArgs = {
  _inc?: Maybe<Generations_Inc_Input>;
  _set?: Maybe<Generations_Set_Input>;
  where: Generations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Generations_By_PkArgs = {
  _inc?: Maybe<Generations_Inc_Input>;
  _set?: Maybe<Generations_Set_Input>;
  pk_columns: Generations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PokemonArgs = {
  _inc?: Maybe<Pokemon_Inc_Input>;
  _set?: Maybe<Pokemon_Set_Input>;
  where: Pokemon_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pokemon_By_PkArgs = {
  _inc?: Maybe<Pokemon_Inc_Input>;
  _set?: Maybe<Pokemon_Set_Input>;
  pk_columns: Pokemon_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoundsArgs = {
  _inc?: Maybe<Rounds_Inc_Input>;
  _set?: Maybe<Rounds_Set_Input>;
  where: Rounds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rounds_By_PkArgs = {
  _inc?: Maybe<Rounds_Inc_Input>;
  _set?: Maybe<Rounds_Set_Input>;
  pk_columns: Rounds_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TurnsArgs = {
  _inc?: Maybe<Turns_Inc_Input>;
  _set?: Maybe<Turns_Set_Input>;
  where: Turns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Turns_By_PkArgs = {
  _inc?: Maybe<Turns_Inc_Input>;
  _set?: Maybe<Turns_Set_Input>;
  pk_columns: Turns_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** response of any mutation on the table "generations" */
export type Generations_Mutation_Response = {
  __typename?: 'generations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Generations>;
};

/** response of any mutation on the table "pokemon" */
export type Pokemon_Mutation_Response = {
  __typename?: 'pokemon_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Pokemon>;
};

/** response of any mutation on the table "rounds" */
export type Rounds_Mutation_Response = {
  __typename?: 'rounds_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Rounds>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Sessions>;
};

/** response of any mutation on the table "turns" */
export type Turns_Mutation_Response = {
  __typename?: 'turns_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Turns>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting data into table "generations" */
export type Generations_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** on conflict condition type for table "generations" */
export type Generations_On_Conflict = {
  constraint: Generations_Constraint;
  update_columns: Array<Generations_Update_Column>;
  where?: Maybe<Generations_Bool_Exp>;
};

/** unique or primary key constraints on table "generations" */
export enum Generations_Constraint {
  /** unique or primary key constraint */
  GenerationsPkey = 'generations_pkey'
}

/** update columns of table "generations" */
export enum Generations_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for inserting data into table "pokemon" */
export type Pokemon_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  generation_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** on conflict condition type for table "pokemon" */
export type Pokemon_On_Conflict = {
  constraint: Pokemon_Constraint;
  update_columns: Array<Pokemon_Update_Column>;
  where?: Maybe<Pokemon_Bool_Exp>;
};

/** unique or primary key constraints on table "pokemon" */
export enum Pokemon_Constraint {
  /** unique or primary key constraint */
  PokemonPkey = 'pokemon_pkey'
}

/** update columns of table "pokemon" */
export enum Pokemon_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GenerationId = 'generation_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for inserting data into table "rounds" */
export type Rounds_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  turns?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** on conflict condition type for table "rounds" */
export type Rounds_On_Conflict = {
  constraint: Rounds_Constraint;
  update_columns: Array<Rounds_Update_Column>;
  where?: Maybe<Rounds_Bool_Exp>;
};

/** unique or primary key constraints on table "rounds" */
export enum Rounds_Constraint {
  /** unique or primary key constraint */
  RoundsPkey = 'rounds_pkey'
}

/** update columns of table "rounds" */
export enum Rounds_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  Turns = 'turns',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  current_round?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rounds?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Scalars['String']>;
};

/** on conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns: Array<Sessions_Update_Column>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint */
  SessionsPkey = 'sessions_pkey'
}

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentRound = 'current_round',
  /** column name */
  Id = 'id',
  /** column name */
  Rounds = 'rounds',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Users = 'users'
}

/** input type for inserting data into table "turns" */
export type Turns_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  drawing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  pokemon_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** on conflict condition type for table "turns" */
export type Turns_On_Conflict = {
  constraint: Turns_Constraint;
  update_columns: Array<Turns_Update_Column>;
  where?: Maybe<Turns_Bool_Exp>;
};

/** unique or primary key constraints on table "turns" */
export enum Turns_Constraint {
  /** unique or primary key constraint */
  TurnsPkey = 'turns_pkey'
}

/** update columns of table "turns" */
export enum Turns_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Drawing = 'drawing',
  /** column name */
  Id = 'id',
  /** column name */
  PokemonId = 'pokemon_id',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for incrementing integer column in table "generations" */
export type Generations_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for updating data in table "generations" */
export type Generations_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** primary key columns input for table: "generations" */
export type Generations_Pk_Columns_Input = {
  /** The unique id for generation, equivalent to its generation number. */
  id: Scalars['Int'];
};

/** input type for incrementing integer column in table "pokemon" */
export type Pokemon_Inc_Input = {
  generation_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for updating data in table "pokemon" */
export type Pokemon_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  generation_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** primary key columns input for table: "pokemon" */
export type Pokemon_Pk_Columns_Input = {
  /** The unique id of the pokemon, equivalent to its Pokedex number. */
  id: Scalars['Int'];
};

/** input type for incrementing integer column in table "rounds" */
export type Rounds_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
};

/** input type for updating data in table "rounds" */
export type Rounds_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  turns?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** primary key columns input for table: "rounds" */
export type Rounds_Pk_Columns_Input = {
  /** A unique id for a round within a game session. */
  id: Scalars['Int'];
};

/** input type for incrementing integer column in table "sessions" */
export type Sessions_Inc_Input = {
  current_round?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  current_round?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rounds?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Scalars['String']>;
};

/** primary key columns input for table: "sessions" */
export type Sessions_Pk_Columns_Input = {
  /** The unique id of a session. */
  id: Scalars['Int'];
};

/** input type for incrementing integer column in table "turns" */
export type Turns_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  pokemon_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for updating data in table "turns" */
export type Turns_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  drawing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  pokemon_id?: Maybe<Scalars['Int']>;
  round_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** primary key columns input for table: "turns" */
export type Turns_Pk_Columns_Input = {
  /** The unique id of the turn. */
  id: Scalars['Int'];
};

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
};

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  /** The unique id of a user. */
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "generations" */
  generations: Array<Generations>;
  /** fetch aggregated fields from the table: "generations" */
  generations_aggregate: Generations_Aggregate;
  /** fetch data from the table: "generations" using primary key columns */
  generations_by_pk?: Maybe<Generations>;
  /** fetch data from the table: "pokemon" */
  pokemon: Array<Pokemon>;
  /** fetch aggregated fields from the table: "pokemon" */
  pokemon_aggregate: Pokemon_Aggregate;
  /** fetch data from the table: "pokemon" using primary key columns */
  pokemon_by_pk?: Maybe<Pokemon>;
  /** fetch data from the table: "rounds" */
  rounds: Array<Rounds>;
  /** fetch aggregated fields from the table: "rounds" */
  rounds_aggregate: Rounds_Aggregate;
  /** fetch data from the table: "rounds" using primary key columns */
  rounds_by_pk?: Maybe<Rounds>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "turns" */
  turns: Array<Turns>;
  /** fetch aggregated fields from the table: "turns" */
  turns_aggregate: Turns_Aggregate;
  /** fetch data from the table: "turns" using primary key columns */
  turns_by_pk?: Maybe<Turns>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootGenerationsArgs = {
  distinct_on?: Maybe<Array<Generations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Generations_Order_By>>;
  where?: Maybe<Generations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGenerations_AggregateArgs = {
  distinct_on?: Maybe<Array<Generations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Generations_Order_By>>;
  where?: Maybe<Generations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGenerations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPokemonArgs = {
  distinct_on?: Maybe<Array<Pokemon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pokemon_Order_By>>;
  where?: Maybe<Pokemon_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPokemon_AggregateArgs = {
  distinct_on?: Maybe<Array<Pokemon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pokemon_Order_By>>;
  where?: Maybe<Pokemon_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPokemon_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRoundsArgs = {
  distinct_on?: Maybe<Array<Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rounds_Order_By>>;
  where?: Maybe<Rounds_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRounds_AggregateArgs = {
  distinct_on?: Maybe<Array<Rounds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rounds_Order_By>>;
  where?: Maybe<Rounds_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRounds_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTurnsArgs = {
  distinct_on?: Maybe<Array<Turns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Turns_Order_By>>;
  where?: Maybe<Turns_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTurns_AggregateArgs = {
  distinct_on?: Maybe<Array<Turns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Turns_Order_By>>;
  where?: Maybe<Turns_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTurns_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

export type CreateGameInput = {
  displayName: Scalars['String'];
};

export type GameSession = {
  __typename?: 'GameSession';
  currentRound?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  rounds: Scalars['String'];
  users: Scalars['String'];
};

export type Pokemon = {
  __typename?: 'Pokemon';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** order by aggregate values of table "generations" */
export type Generations_Aggregate_Order_By = {
  avg?: Maybe<Generations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Generations_Max_Order_By>;
  min?: Maybe<Generations_Min_Order_By>;
  stddev?: Maybe<Generations_Stddev_Order_By>;
  stddev_pop?: Maybe<Generations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Generations_Stddev_Samp_Order_By>;
  sum?: Maybe<Generations_Sum_Order_By>;
  var_pop?: Maybe<Generations_Var_Pop_Order_By>;
  var_samp?: Maybe<Generations_Var_Samp_Order_By>;
  variance?: Maybe<Generations_Variance_Order_By>;
};

/** order by avg() on columns of table "generations" */
export type Generations_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by max() on columns of table "generations" */
export type Generations_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** order by min() on columns of table "generations" */
export type Generations_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "generations" */
export type Generations_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "generations" */
export type Generations_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "generations" */
export type Generations_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "generations" */
export type Generations_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "generations" */
export type Generations_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "generations" */
export type Generations_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "generations" */
export type Generations_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "generations" */
export type Generations_Arr_Rel_Insert_Input = {
  data: Array<Generations_Insert_Input>;
  on_conflict?: Maybe<Generations_On_Conflict>;
};

/** input type for inserting object relation for remote table "generations" */
export type Generations_Obj_Rel_Insert_Input = {
  data: Generations_Insert_Input;
  on_conflict?: Maybe<Generations_On_Conflict>;
};

/** order by aggregate values of table "pokemon" */
export type Pokemon_Aggregate_Order_By = {
  avg?: Maybe<Pokemon_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Pokemon_Max_Order_By>;
  min?: Maybe<Pokemon_Min_Order_By>;
  stddev?: Maybe<Pokemon_Stddev_Order_By>;
  stddev_pop?: Maybe<Pokemon_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Pokemon_Stddev_Samp_Order_By>;
  sum?: Maybe<Pokemon_Sum_Order_By>;
  var_pop?: Maybe<Pokemon_Var_Pop_Order_By>;
  var_samp?: Maybe<Pokemon_Var_Samp_Order_By>;
  variance?: Maybe<Pokemon_Variance_Order_By>;
};

/** order by avg() on columns of table "pokemon" */
export type Pokemon_Avg_Order_By = {
  generation_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by max() on columns of table "pokemon" */
export type Pokemon_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  generation_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** order by min() on columns of table "pokemon" */
export type Pokemon_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  generation_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "pokemon" */
export type Pokemon_Stddev_Order_By = {
  generation_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "pokemon" */
export type Pokemon_Stddev_Pop_Order_By = {
  generation_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "pokemon" */
export type Pokemon_Stddev_Samp_Order_By = {
  generation_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "pokemon" */
export type Pokemon_Sum_Order_By = {
  generation_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "pokemon" */
export type Pokemon_Var_Pop_Order_By = {
  generation_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "pokemon" */
export type Pokemon_Var_Samp_Order_By = {
  generation_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "pokemon" */
export type Pokemon_Variance_Order_By = {
  generation_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "pokemon" */
export type Pokemon_Arr_Rel_Insert_Input = {
  data: Array<Pokemon_Insert_Input>;
  on_conflict?: Maybe<Pokemon_On_Conflict>;
};

/** input type for inserting object relation for remote table "pokemon" */
export type Pokemon_Obj_Rel_Insert_Input = {
  data: Pokemon_Insert_Input;
  on_conflict?: Maybe<Pokemon_On_Conflict>;
};

/** order by aggregate values of table "rounds" */
export type Rounds_Aggregate_Order_By = {
  avg?: Maybe<Rounds_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rounds_Max_Order_By>;
  min?: Maybe<Rounds_Min_Order_By>;
  stddev?: Maybe<Rounds_Stddev_Order_By>;
  stddev_pop?: Maybe<Rounds_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rounds_Stddev_Samp_Order_By>;
  sum?: Maybe<Rounds_Sum_Order_By>;
  var_pop?: Maybe<Rounds_Var_Pop_Order_By>;
  var_samp?: Maybe<Rounds_Var_Samp_Order_By>;
  variance?: Maybe<Rounds_Variance_Order_By>;
};

/** order by avg() on columns of table "rounds" */
export type Rounds_Avg_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by max() on columns of table "rounds" */
export type Rounds_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  turns?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** order by min() on columns of table "rounds" */
export type Rounds_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  turns?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "rounds" */
export type Rounds_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "rounds" */
export type Rounds_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "rounds" */
export type Rounds_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "rounds" */
export type Rounds_Sum_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "rounds" */
export type Rounds_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "rounds" */
export type Rounds_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "rounds" */
export type Rounds_Variance_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "rounds" */
export type Rounds_Arr_Rel_Insert_Input = {
  data: Array<Rounds_Insert_Input>;
  on_conflict?: Maybe<Rounds_On_Conflict>;
};

/** input type for inserting object relation for remote table "rounds" */
export type Rounds_Obj_Rel_Insert_Input = {
  data: Rounds_Insert_Input;
  on_conflict?: Maybe<Rounds_On_Conflict>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  avg?: Maybe<Sessions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Sessions_Max_Order_By>;
  min?: Maybe<Sessions_Min_Order_By>;
  stddev?: Maybe<Sessions_Stddev_Order_By>;
  stddev_pop?: Maybe<Sessions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Sessions_Stddev_Samp_Order_By>;
  sum?: Maybe<Sessions_Sum_Order_By>;
  var_pop?: Maybe<Sessions_Var_Pop_Order_By>;
  var_samp?: Maybe<Sessions_Var_Samp_Order_By>;
  variance?: Maybe<Sessions_Variance_Order_By>;
};

/** order by avg() on columns of table "sessions" */
export type Sessions_Avg_Order_By = {
  current_round?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  current_round?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  rounds?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users?: Maybe<Order_By>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  current_round?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  rounds?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "sessions" */
export type Sessions_Stddev_Order_By = {
  current_round?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "sessions" */
export type Sessions_Stddev_Pop_Order_By = {
  current_round?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "sessions" */
export type Sessions_Stddev_Samp_Order_By = {
  current_round?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "sessions" */
export type Sessions_Sum_Order_By = {
  current_round?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "sessions" */
export type Sessions_Var_Pop_Order_By = {
  current_round?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "sessions" */
export type Sessions_Var_Samp_Order_By = {
  current_round?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "sessions" */
export type Sessions_Variance_Order_By = {
  current_round?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** input type for inserting object relation for remote table "sessions" */
export type Sessions_Obj_Rel_Insert_Input = {
  data: Sessions_Insert_Input;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** order by aggregate values of table "turns" */
export type Turns_Aggregate_Order_By = {
  avg?: Maybe<Turns_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Turns_Max_Order_By>;
  min?: Maybe<Turns_Min_Order_By>;
  stddev?: Maybe<Turns_Stddev_Order_By>;
  stddev_pop?: Maybe<Turns_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Turns_Stddev_Samp_Order_By>;
  sum?: Maybe<Turns_Sum_Order_By>;
  var_pop?: Maybe<Turns_Var_Pop_Order_By>;
  var_samp?: Maybe<Turns_Var_Samp_Order_By>;
  variance?: Maybe<Turns_Variance_Order_By>;
};

/** order by avg() on columns of table "turns" */
export type Turns_Avg_Order_By = {
  id?: Maybe<Order_By>;
  pokemon_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by max() on columns of table "turns" */
export type Turns_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  drawing?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pokemon_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "turns" */
export type Turns_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  drawing?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pokemon_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "turns" */
export type Turns_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  pokemon_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "turns" */
export type Turns_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  pokemon_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "turns" */
export type Turns_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  pokemon_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "turns" */
export type Turns_Sum_Order_By = {
  id?: Maybe<Order_By>;
  pokemon_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "turns" */
export type Turns_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  pokemon_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "turns" */
export type Turns_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  pokemon_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "turns" */
export type Turns_Variance_Order_By = {
  id?: Maybe<Order_By>;
  pokemon_id?: Maybe<Order_By>;
  round_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "turns" */
export type Turns_Arr_Rel_Insert_Input = {
  data: Array<Turns_Insert_Input>;
  on_conflict?: Maybe<Turns_On_Conflict>;
};

/** input type for inserting object relation for remote table "turns" */
export type Turns_Obj_Rel_Insert_Input = {
  data: Turns_Insert_Input;
  on_conflict?: Maybe<Turns_On_Conflict>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};
