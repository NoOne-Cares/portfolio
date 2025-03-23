// import { useGLTF } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
// import { KTX2Loader } from "three-stdlib";

// const ktx2Loader = new KTX2Loader();
// ktx2Loader.setTranscoderPath("/basis/");

// const useGLTFWithKTX2 = (path) => {
//     const { gl } = useThree();

//     return useGLTF(path, true, true, (loader) => {
//         loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
//     });
// }

// export default useGLTFWithKTX2
import { useGLTF } from "@react-three/drei/native";
import { useThree } from "@react-three/fiber";
import { KTX2Loader } from "three-stdlib";

// Initialize KTX2Loader
const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath("/basis/");

const useGLTFWithKTX2 = (path) => {
    const { gl } = useThree();

    // Detect KTX2 support
    const ktx2Support = ktx2Loader.detectSupport(gl);

    // Load GLTF with KTX2 if supported
    const { nodes, materials } = useGLTF(path, true, true, (loader) => {
        if (ktx2Support) {
            loader.setKTX2Loader(ktx2Loader); // Only apply KTX2 loader if supported
        }
    });
    console.log('GLTF materials:', materials);
    return { nodes, materials };
};

export default useGLTFWithKTX2;