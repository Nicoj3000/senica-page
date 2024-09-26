interface ContainerPageProps {
    children: React.ReactNode;
  }
  
  const ContainerPage = (props: ContainerPageProps) => {
    const { children } = props;
  
    return (
      <div className="flex items-center justify-center w-full  h-full  mt-36 ">
        {children}
      </div>
    );
  };
  
  export default ContainerPage;