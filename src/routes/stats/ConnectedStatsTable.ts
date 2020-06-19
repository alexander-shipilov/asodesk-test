import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../modules/app";
import { StatsTable } from "../../modules/stats";
import { statsModule } from "./statsModule";

const mapStateToProps = ({ stats }: AppState) => {
  return {
    data: stats.value,
    selected: stats.selected,
    selectedAll: stats.selectedAll
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRemove: (id: number) => dispatch(statsModule.actions.remove(id)),
  onToggle: (id: number) => dispatch(statsModule.actions.toggle(id)),
  onToggleAll: () => dispatch(statsModule.actions.toggleAll())
});

export const ConnectedStatsTable = connect(mapStateToProps, mapDispatchToProps)(StatsTable);