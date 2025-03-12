import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckIcon from "@mui/icons-material/Check";
import Clear from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Download from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FeedbackOutlined from "@mui/icons-material/FeedbackOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import SearchIcon from "@mui/icons-material/Search";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Timer from "@mui/icons-material/Timer";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import WarningIcon from "@mui/icons-material/Warning";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

const DEFAULT_PROPS = {
  fontSize: "inherit",
};

export const IconView = (props) => (
  <VisibilityIcon {...DEFAULT_PROPS} {...props} />
);
export const IconViewOutlined = (props) => (
  <VisibilityOutlinedIcon {...DEFAULT_PROPS} {...props} />
);
export const IconAdd = (props) => <AddIcon {...DEFAULT_PROPS} {...props} />;
export const IconEdit = (props) => <EditIcon {...DEFAULT_PROPS} {...props} />;
export const IconEditOutlined = (props) => (
  <EditOutlinedIcon {...DEFAULT_PROPS} {...props} />
);
export const IconDelete = (props) => (
  <DeleteIcon {...DEFAULT_PROPS} {...props} />
);
export const IconDeleteOutlined = (props) => (
  <DeleteOutlinedIcon {...DEFAULT_PROPS} {...props} />
);
export const IconCross = (props) => <CloseIcon {...DEFAULT_PROPS} {...props} />;
export const IconMinus = (props) => (
  <RemoveIcon {...DEFAULT_PROPS} {...props} />
);
export const IconCancel = (props) => (
  <DeleteIcon {...DEFAULT_PROPS} {...props} />
);
export const IconDollorSign = (props) => (
  <AttachMoneyIcon {...DEFAULT_PROPS} {...props} />
);
export const IconCalender = (props) => (
  <CalendarTodayIcon {...DEFAULT_PROPS} {...props} />
);
export const IconCalender2 = (props) => (
  <CalendarTodayIcon {...DEFAULT_PROPS} {...props} />
);
export const IconKanban = (props) => (
  <ViewKanbanIcon {...DEFAULT_PROPS} {...props} />
);
export const IconBack = (props) => (
  <KeyboardArrowLeftIcon {...DEFAULT_PROPS} {...props} />
);
export const IconBackArrow = (props) => (
  <KeyboardArrowLeftIcon {...DEFAULT_PROPS} {...props} />
);
export const IconForwardArrow = (props) => (
  <KeyboardArrowRightIcon {...DEFAULT_PROPS} {...props} />
);
export const IconUpArrow = (props) => (
  <KeyboardArrowUpIcon {...DEFAULT_PROPS} {...props} />
);
export const IconDownArrow = (props) => (
  <KeyboardArrowDownIcon {...DEFAULT_PROPS} {...props} />
);
export const IconFilter = (props) => (
  <FilterAltIcon {...DEFAULT_PROPS} {...props} />
);
export const IconFile = (props) => (
  <InsertDriveFileIcon {...DEFAULT_PROPS} {...props} />
);
export const IconCheck = (props) => <CheckIcon {...DEFAULT_PROPS} {...props} />;
export const IconWarning = (props) => (
  <WarningIcon {...DEFAULT_PROPS} {...props} />
);
export const IconThreeDots = (props) => (
  <MoreVertIcon {...DEFAULT_PROPS} {...props} />
);
export const IconSearch = (props) => (
  <SearchIcon {...DEFAULT_PROPS} {...props} />
);
export const IconSchedule = (props) => (
  <ScheduleIcon {...DEFAULT_PROPS} {...props} />
);
export const IconCaution = (props) => (
  <ErrorOutlineIcon {...DEFAULT_PROPS} {...props} />
);
export const IconClear = (props) => <Clear {...DEFAULT_PROPS} {...props} />;
export const IconDownload = (props) => (
  <Download {...DEFAULT_PROPS} {...props} />
);
export const IconClock = (props) => (
  <AccessTimeIcon {...DEFAULT_PROPS} {...props} />
);
export const IconTimer = (props) => <Timer {...DEFAULT_PROPS} {...props} />;
export const IconFeedback = (props) => (
  <FeedbackOutlined {...DEFAULT_PROPS} {...props} />
);
export const IconInfoOutlined = (props) => (
  <InfoOutlinedIcon {...DEFAULT_PROPS} {...props} />
);

const IconDefault = (props) => (
  <FiberManualRecordIcon {...DEFAULT_PROPS} {...props} />
);

export const IconPauseIcon = (props) => (
  <PauseIcon {...DEFAULT_PROPS} {...props} />
);
export const IconPlayArrowIcon = (props) => (
  <PlayArrowIcon {...DEFAULT_PROPS} {...props} />
);
export const IconPauseCircleIcon = (props) => (
  <PauseCircleIcon {...DEFAULT_PROPS} {...props} />
);

export default IconDefault;
