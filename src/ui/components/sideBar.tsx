import LinksAdmin from "./linksAdmin";
import ButtonSignOut from "./buttonSignOut";

export default function SideNav() {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col py-4 px-2 w-1/5 justify-between bg-sky-100 rounded-xl m-2">
      <div className="mb-2 flex flex-col items-center rounded-md">
        <LinksAdmin/>
      </div>

      <div className="flex space-x-2">
        <ButtonSignOut/>
      </div>
    </div>
  );
}
