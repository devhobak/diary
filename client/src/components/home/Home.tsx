import Calendar from "./calendar/Calendar";
import ViewLayout from "../common/Layout/ViewLayout";
import { ToastContainer } from "react-toastify";
export default function Home() {
   return (
      <ViewLayout>
         <>
            <Calendar />
         </>
      </ViewLayout>
   );
}
