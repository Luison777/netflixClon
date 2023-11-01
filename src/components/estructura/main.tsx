function Main({
    children,
  }: {
    children: React.ReactNode
  }){
    return(

        <main className="w-full relative lg:-top-[150px] overflow-hidden ">
            {children}
        </main>

    )
}

export default Main;