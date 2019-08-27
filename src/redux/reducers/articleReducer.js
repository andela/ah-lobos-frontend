import * as types from "../actions/actionTypes";

const initialState = {
  articles: [],
  currentArticles: {},
  uploadedImage: {},
  myArticles: {},
  updatedArticle: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ARTICLE_REQUEST:
      return {
        ...state,
        currentArticles: action.article
      };
    case types.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        currentArticles: action.article
      };
    case types.CREATE_ARTICLE_FAILURE:
      return state;
    case types.UPLOAD_IMAGE:
      return {
        ...state,
        uploadedImage: action.payload
      };
    case types.FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        article: action.article
      };
    case types.FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        article: {}
      };
    case types.FETCH_AUTHOR_ARTICLES_REQUEST:
      return {
        ...state,
        myArticles: {}
      };
    case types.FETCH_AUTHOR_ARTICLES_SUCCESS:
      return {
        ...state,
        myArticles: action.articles
      };
    case types.FETCH_AUTHOR_ARTICLES_FAILURE:
      return {
        ...state,
        myArticles: {}
      };
    case types.DELETE_ARTICLE_OPTIMISTIC:
      return {
        ...state,
        deletedArticle: action.message
      };
    case types.UPDATE_ARTICLE_REQUEST:
      return {
        ...state,
        updatedArticle: action.article
      };
    case types.FETCH_ARTICLES_REQUEST: {
      const { payload: articles } = action;
      return {
        ...state,
        articles
      };
    }
    case types.READ_ARTICLES_REQUEST: {
      const { payload: story } = action;
      return {
        ...state,
        story
      };
    }
    default:
      return {
        ...state,
        articles: [],
        currentArticles: {},
        uploadedImage: {},
        myArticles: {},
        updatedArticle: {},
        deletedArticle: ""
      };
  }
};
