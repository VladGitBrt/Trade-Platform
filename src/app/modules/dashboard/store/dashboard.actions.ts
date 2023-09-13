import { createAction, props } from "@ngrx/store";
import { ICoinData, ITableData } from "../model/dashboard.model";

export const getTableData = createAction('[GET] Get Table Data');
export const getTableDataSuccess = createAction('[GET] Get Table Data Success', props<{tableData: ITableData[]}>());
export const loadCoinData = createAction('[GET] Load Coin Data', props<{ coinName: string }>());
export const loadCoinDataSuccess = createAction('[GET] Load Coin Data Success', props<{ coinData: ICoinData }>());
