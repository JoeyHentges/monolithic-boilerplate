export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="hidden h-full min-h-screen w-screen bg-[url('/images/login.jpg')] bg-cover bg-center bg-no-repeat md:block md:w-[50vw]" />

      <main className="flex min-h-screen items-center justify-center">
        <div className="space-y-8 p-4 md:w-full lg:w-[75%] xl:w-[65%] 2xl:w-[54%]">
          {children}
        </div>
      </main>
    </div>
  )
}