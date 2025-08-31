import NotificationItem from "../Components/NotificationItem";
import {Bell} from "lucide-react";

function Notification() {
  return (
    <div className="pt-16 pb-20 px-4">
    <div className="pt-1">
      <NotificationItem Icon={Bell} Title={"Notification Title"}
      Description={"Description goes here sasd sas das d asd as das d sad as das d as das d a fsdfas fas fas fga gas fasfasd fas fas df asd fasd f asd fasdfasdf asd fasd f asd fa sdf asd fas"}
      Timestamp={new Date("2025-08-30T20:29:50.000Z")} />
    </div>
    <div className="pt-1">
      <NotificationItem Icon={Bell} Title={"Notification Title"}
      Description={"Description goes here sasd sas das d asd as das d sad as das d as das d a fsdfas fas fas fga gas fasfasd fas fas df asd fasd f asd fasdfasdf asd fasd f asd fa sdf asd fas"}
      Timestamp={new Date("2025-08-30T20:29:50.000Z")} />
    </div>
    </div>   
  );
}

export default Notification;
