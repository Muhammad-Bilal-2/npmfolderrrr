import { Login } from "./pages/login/Login";
import { CenteredSpinner, ButtonSpinner } from "./Spinner";
import {
  IsPhoneProvider,
  useIsPhoneContext,
} from "./isPhoneContext/isPhoneContext";
import { ModalOverlay } from "./Overlays/ModalOverlay";
import { NativeOverlay } from "./Overlays/NativeOverlay";
import { AlertWrapped } from "./Alerts/AlertWrapped";
import {
  NumberBoolToText,
  StringToShortDate,
  StringOrDefault,
  NumberOrDefault,
} from "./utilities/TextExtensions";
import { useOnce } from "./utilities/UseOnce";
import {
  notEmpty,
  isNotNull,
  GetToday,
  groupBy,
  extract,
  OrderBy,
  checkValuesData,
  nameOf,
  getUniqueBy,
} from "./utilities/utilities";
import { LoadingButton } from "./Buttons/LoadingButton";
import { SimpleCard } from "./Cards/SimpleCard";
import { PasswordInput } from "./Inputs/PasswordInput";
import { BackButton } from "./Buttons/BackButton";
import { ButtonLoadingSpinner } from "./Buttons/ButtonSpinner";
import { ModalNoHeaderOverlay } from "./Overlays/ModalNoHeaderOverlay";
import { ModalSuccess } from "./Overlays/ModalSuccess";
import { ForgotUsernameModal } from "./Overlays/ForgotUsernameModal";
import { ForgotPasswordModal } from "./Overlays/ForgotPasswordModal";
import { Dropdowns } from "./DropDowns/DropDowns";

export {
  CenteredSpinner,
  IsPhoneProvider,
  useIsPhoneContext,
  ButtonSpinner,
  AlertWrapped,
  ModalOverlay,
  NativeOverlay,
  ModalSuccess,
  ModalNoHeaderOverlay,
  NumberBoolToText,
  StringToShortDate,
  StringOrDefault,
  NumberOrDefault,
  notEmpty,
  isNotNull,
  GetToday,
  groupBy,
  extract,
  OrderBy,
  checkValuesData,
  nameOf,
  getUniqueBy,
  useOnce,
  Login,
  LoadingButton,
  SimpleCard,
  PasswordInput,
  BackButton,
  ButtonLoadingSpinner,
  ForgotUsernameModal,
  ForgotPasswordModal,
  Dropdowns,
};
