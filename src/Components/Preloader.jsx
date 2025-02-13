import { tailChase } from 'ldrs'


function Preloader() {
    tailChase.register()

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-darkBg z-50 ">
<l-tail-chase
  size="40"
  speed="1.75" 
  color="#3758F9"
  className="" 
></l-tail-chase>

      </div>
    );
  }
  
  export default Preloader;
  