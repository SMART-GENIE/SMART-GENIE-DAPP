import { configureStore } from '@reduxjs/toolkit';
import MenuReducer from './Reducer/MenuReducer';
import AuthReducer from './Reducer/AuthReducer';
import PartnersLevelJson from './Reducer/PartnersLevelJson';
import PreviewMode from './Reducer/PreviewMode';


export default configureStore({
  reducer: {
    menu: MenuReducer,
    auth:AuthReducer,
    partnersLevelJson:PartnersLevelJson,
    previewModeId:PreviewMode

  },
});
