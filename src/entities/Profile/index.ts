export {
   ProfileSchema,
   ProfileData,
} from './model/types/ProfileSchema';

export {
   profileReducer,
   profileActions,
} from './model/slice/profileSlice';

export {
   fetchProfileData,
} from './model/services/fetchProfileData';

export {
   ProfileCard,
} from './ui/ProfileCard/ProfileCard';
