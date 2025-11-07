import { Environment, Lightformer } from "@react-three/drei";

const StudioLights = () => {
    return (
        <group>
            <Environment preset="sunset" resolution={256}>
                <group>
                    <Lightformer
                        form="rect"
                        position={[-10, 5, -5]}
                        intensity={10}
                        scale={10}
                        rotaton-y={Math.PI / 2}
                    />
                    <Lightformer
                    form="rect"
                    position={[10,0,1]}
                    intensity={20}
                    scale={10}
                    rotation-y={Math.PI/3}
                    
                    
                    />
                </group>
            </Environment>
            <spotLight  
            position={[-2,10,15]}
            angle={0.15}
            decay={10}
            intensity={Math.PI*0.2}
            
            />
            <spotLight
            position={[0,-25,10]}
            angle={0.15}
            decay={10}
            intensity={Math.PI*0.2}
            
            />
            <spotLight
            position={[0,15,5]}
            angle={0.15}
            decay={10}
            intensity={Math.PI*1}
            
            
            />
        </group>
    );
}

export default StudioLights;