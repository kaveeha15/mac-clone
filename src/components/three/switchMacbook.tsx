// import Macbook14 from "./Macbook-14";
// import Macbook16 from './Macbook-16';
// import {useRef} from 'react'
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// const moveMacbook=(group,distance)=>{
//     if(!group)return 
//     gsap.to(group.position,{y:distance,duration:1})
// }
// const fadeMacbook=(group,opacity)=>{
//     group.traverse((child)=>{
//         if(child.isMesh){
//             child.material.transparent=true;
//             gsap.to(child.material,{opacity,duration:1})
//         }
//     })
// }

// const SwitchMacbook = ({scale,isMobile}) => {
   
//     const showLargeMac=(scale===0.08||scale===0.05)
//     useGSAP(()=>{
//         if(showLargeMac){
//             moveMacbook(macBook14Ref.current,-3)
//             moveMacbook(macBook16Ref.current,0)
//             fadeMacbook(macBook14Ref.current,0)
//             fadeMacbook(macBook16Ref.current,1)

//         }else{
//             moveMacbook(macBook14Ref.current,0)
//             moveMacbook(macBook16Ref.current,-3)
//             fadeMacbook(macBook16Ref.current,0)
//             fadeMacbook(macBook14Ref.current,1)
//         }
//     },[scale])
//      const macBook14Ref=useRef()
//     const macBook16Ref=useRef()
//     return (
//         <>
//             <group>
//                 <Macbook14 ref={macBook14Ref} scale={isMobile?0.03:0.06} />
//             </group>
//             <group>
//                 <Macbook16 ref={macBook16Ref} scale={isMobile?0.05:0.08}/>
//             </group>
//         </>
//     );
// }

// export default SwitchMacbook;
import Macbook14 from "./Macbook-14";
import Macbook16 from "./Macbook-16"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
    const moveMacbook=(group,distance)=>{
        if(!group)return
        gsap.to(group.position,{x:distance,duration:1})

    }
    const fadeMacbook=(group,opacity)=>{
        group.traverse((child)=>{
            if(child.isMesh){
                child.material.transparent=true
                gsap.to(child.material,{opacity,duration:1})
            }
        })
    }
const SwitchMacbook = ({scale,isMobile}) => {
    const showLargeMac=(scale===0.08|| scale===0.05)
    useGSAP(()=>{
        if(showLargeMac){
             moveMacbook(ref14.current,-3)
             moveMacbook(ref16.current,0)
             fadeMacbook(ref14.current,0)
             fadeMacbook(ref16.current,1)

        }else{
            moveMacbook(ref16.current,-3)
            moveMacbook(ref14.current,0)
            fadeMacbook(ref14.current,1)
            fadeMacbook(ref16.current,0)
        }
       
    },[scale])
    const ref14=useRef()
    const ref16=useRef()

    return (  
        <>
        <group>
            <Macbook14 ref={ref14} scale={isMobile?0.03:0.06}/>
        </group>
        <group>
            <Macbook16 ref={ref16} scale={isMobile?0.05:0.08}/>
        </group>
        </>
        
    );
}
 
export default SwitchMacbook;