import { TimeDifferenceFormat } from "../Utilities/CommonMethods";
function NotificationItem({Icon, Title, Description, Timestamp}) {
  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 cursor-pointer">
      <Icon className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0" />
      <div className="flex-1 text-sm">
        <p className="font-semibold">{Title}</p>
        <p>
          <span className="text-gray-700">{Description}</span>
          <span className="text-gray-400 text-xs ml-2">{TimeDifferenceFormat(Timestamp)}</span>
        </p>
      </div>
    </div>
  );
}

export default NotificationItem;
