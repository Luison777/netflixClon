function Main({
    children,
  }: {
    children: React.ReactNode
  }){
    return(

        <main className="h-96 pt-5 relative flex justify-center ">
            {children}
        </main>

    )
}

export default Main;