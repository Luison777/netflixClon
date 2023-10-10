function Main({
    children,
  }: {
    children: React.ReactNode
  }){
    return(

        <main className="h-96 pt-5 relative">
            {children}
        </main>

    )
}

export default Main;