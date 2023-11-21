import Button from "./Button";

export default function Sidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-950 text-stone-100 md:w-72 rounded-r-xl">
      <h2 className="mb-9 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>

      <Button onClick={onStartAddProject}>Add project</Button>
      <ul></ul>
    </aside>
  );
}
