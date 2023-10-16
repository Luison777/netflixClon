function Main({
    children,
  }: {
    children: React.ReactNode
  }){
    return(

        <main className=" relative -top-[110px] overflow-hidden -z-20">
            {children}
        </main>

    )
}

export default Main;