import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_albuminventory_partial_update = createAsyncThunk(
  "albumInventories/api_v1_albuminventory_partial_update",
  async payload => {
    const response = await apiService.api_v1_albuminventory_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_albuminventory_read = createAsyncThunk(
  "albumInventories/api_v1_albuminventory_read",
  async payload => {
    const response = await apiService.api_v1_albuminventory_read(payload)
    return response.data
  }
)
export const api_v1_albuminventory_delete = createAsyncThunk(
  "albumInventories/api_v1_albuminventory_delete",
  async payload => {
    const response = await apiService.api_v1_albuminventory_delete(payload)
    return response.data
  }
)
export const api_v1_albuminventory_update = createAsyncThunk(
  "albumInventories/api_v1_albuminventory_update",
  async payload => {
    const response = await apiService.api_v1_albuminventory_update(payload)
    return response.data
  }
)
export const api_v1_albuminventory_create = createAsyncThunk(
  "albumInventories/api_v1_albuminventory_create",
  async payload => {
    const response = await apiService.api_v1_albuminventory_create(payload)
    return response.data
  }
)
export const api_v1_albuminventory_list = createAsyncThunk(
  "albumInventories/api_v1_albuminventory_list",
  async payload => {
    const response = await apiService.api_v1_albuminventory_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const albumInventoriesSlice = createSlice({
  name: "albumInventories",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_albuminventory_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_albuminventory_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_albuminventory_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_albuminventory_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_albuminventory_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_albuminventory_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_albuminventory_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_albuminventory_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_albuminventory_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_albuminventory_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_albuminventory_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_albuminventory_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_albuminventory_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_albuminventory_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_albuminventory_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_albuminventory_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_albuminventory_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_albuminventory_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_albuminventory_partial_update,
  api_v1_albuminventory_read,
  api_v1_albuminventory_delete,
  api_v1_albuminventory_update,
  api_v1_albuminventory_create,
  api_v1_albuminventory_list,
  slice: albumInventoriesSlice
}
