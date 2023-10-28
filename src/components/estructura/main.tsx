function Main({
    children,
  }: {
    children: React.ReactNode
  }){
    return(

        <main className="w-full relative -top-[110px] overflow-hidden ">
            {children}
        </main>

    )
}

export default Main;