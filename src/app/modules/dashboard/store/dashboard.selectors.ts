import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/core/interfaces/app.state.interface";

export const selectFeature = (state: AppStateInterface) => state.dashboard;

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
);

export const isChartLoaded = createSelector(
  selectFeature,
  (state) => state.isChardDataLoaded
)

export const chartData = createSelector(
  selectFeature,
  (state) => state.chartData
)

export const isSelectedDataLoaded = createSelector(
  selectFeature,
  (state) => state.isCoinDataLoaded
)

export const cryptoDataSelector = createSelector(
  selectFeature,
  (state) => state.cryptoData
);

export const coinDataSelector = createSelector(
  selectFeature,
  (state) => state.coinData
)

export const coinNameSelector = createSelector(
  selectFeature,
  (state) => state.coinData.coinName
)

export const coinPriceSelector = createSelector(
  selectFeature,
  (state) => state.coinData.coinPrice
)

export const coinImageSelector = createSelector(
  selectFeature,
  (state) => state.coinData.imageUrl
)