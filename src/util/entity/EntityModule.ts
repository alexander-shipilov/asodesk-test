import { AnyAction, Reducer } from "redux";
import { createApiActions, createApiActionTypes, createApiSaga } from "../api";
import { createPrefixed } from "../createPrefixed";
import { AbstractModule } from "../module";
import { EntityActions } from "./EntityActions";
import { EntityActionTypes } from "./EntityActionTypes";
import { EntityApi } from "./EntityApi";
import { EntityState } from "./EntityState";

export class EntityModule<P extends string, V extends any>
  extends AbstractModule<P, V, EntityActionTypes<P>, EntityActions<P, V>, EntityState<V>, EntityApi<V>> {

  public readonly actionTypes: EntityActionTypes<P> = {
    fetch: createApiActionTypes(createPrefixed(this.prefix, "fetch"))
  };

  public readonly actions: EntityActions<P, V> = {
    fetch: createApiActions(this.actionTypes.fetch)
  };

  public createState(value: V): EntityState<V> {
    return new EntityState(value);
  }

  public createReducer<S extends EntityState<V> = EntityState<V>>(initialState: S): Reducer<S> {
    const { actionTypes } = this;

    return (state: S = initialState, action: AnyAction): S => {
      switch (action.type as string) {
      case actionTypes.fetch.call:
        return state.merge({ loading: true, error: null });

      case actionTypes.fetch.completed:
        return state.merge({ loading: false, value: action.payload });

      case actionTypes.fetch.failed:
        return state.merge({ loading: false, error: action.payload });

      default:
        return state;
      }
    };
  };

  public createSaga<I extends EntityApi<V> = EntityApi<V>>(impl: I): () => Generator<any> {
    const { actionTypes, actions } = this;

    return createApiSaga(actionTypes.fetch, actions.fetch, impl.fetch);
  }
}