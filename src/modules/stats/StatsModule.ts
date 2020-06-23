import { AnyAction, Reducer } from "redux";
import { AbstractModule, createPrefixed, EntityModule } from "../../util";
import { StatsActions } from "./StatsActions";
import { StatsActionTypes } from "./StatsActionTypes";
import { StatsApi } from "./StatsApi";
import { StatsData } from "./StatsData";
import { StatsState } from "./StatsState";

export class StatsModule<P extends string>
  extends AbstractModule<P, StatsData[], StatsActionTypes<P>, StatsActions<P>, StatsState, StatsApi> {

  private entityModule: EntityModule<P, StatsData[]> = new EntityModule(this.prefix);

  public actionTypes: StatsActionTypes<P> = {
    ...this.entityModule.actionTypes,
    remove: createPrefixed(this.prefix, "remove"),
    toggle: createPrefixed(this.prefix, "toggle"),
    toggleAll: createPrefixed(this.prefix, "toggleAll")
  };

  public actions: StatsActions<P> = {
    ...this.entityModule.actions,
    remove: (payload: number) => ({ type: this.actionTypes.remove, payload }),
    toggle: (payload: number) => ({ type: this.actionTypes.toggle, payload }),
    toggleAll: () => ({ type: this.actionTypes.toggleAll })
  };

  createState(value: StatsData[]): StatsState {
    return new StatsState(value);
  }

  createReducer<S extends StatsState = StatsState>(initialState: S): Reducer<S> {
    const { actionTypes } = this;
    const entityReducer = this.entityModule.createReducer(initialState);

    return (state: S = initialState, action: AnyAction) => {
      switch (action.type) {
      case actionTypes.remove:
        return state.remove(action.payload);
      case actionTypes.toggle:
        return state.toggle(action.payload);
      case actionTypes.toggleAll:
        return state.toggleAll();
      default:
        return entityReducer(state, action);
      }
    };
  }

  createSaga<I extends StatsApi = StatsApi>(impl: I): () => Generator<any> {
    return this.entityModule.createSaga(impl);
  }
}