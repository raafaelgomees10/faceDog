import { PHOTOS_GET } from "../api";
import createAsyncSlice from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "feed",
  initialState: {
    list: [],
    page: 1,
    infinite: true,
  },
  reducers: {
    addPhoto(state, action) {
      state.list.push(...action.payload);

      if (action.payload.length === 0) {
        state.infinite = false;
      }
    },

    addPage(state) {
      state.pages++;
    },

    resetState(state) {
      state.infinite = true;
      state.pages = 1;
      state.data = null;
      state.loading = false;
      state.error = null;
      state.list = [];
    },
  },
  fetchConfig: ({ page, total, user }) => PHOTOS_GET({ page, total, user }),
});

export const fetchFeed = slice.asyncAction;
export const { addPhoto, addPage, resetState: resetFeedState } = slice.actions;

export const loadNewPhotos =
  ({ total = 6, user }) =>
  async (dispatch, getState) => {
    const { feed } = getState();

    dispatch(addPage());

    const { payload } = await dispatch(
      fetchFeed({ page: feed.pages, total, user })
    );

    dispatch(addPhoto(payload));
  };

export default slice.reducer;
