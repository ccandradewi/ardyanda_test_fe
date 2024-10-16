import DateDropdown from "@/components/Datepicker";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Pilih Tanggal</h1>
        <DateDropdown />
      </div>
    </>
  );
}
