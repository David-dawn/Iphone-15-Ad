/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: polyman (https://sketchfab.com/Polyman_3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-iphone-15-pro-max-black-df17520841214c1792fb8a44c6783ee7
Title: Apple iPhone 15 Pro Max Black
*/


import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect,  } from 'react';
import * as THREE from "three";
import { GroupProps } from "@react-three/fiber";

interface CustomGroupProps extends GroupProps {
  item: { title: string; color: string[]; img: string }; // Replace with your actual `item` type
  size: [number, number, number];
}


interface GLTFResult extends THREE.Group {
  nodes: {
    ttmRoLdJipiIOmf: THREE.Mesh;
    DjsDkGiopeiEJZK: THREE.Mesh;
    buRWvyqhBBgcJFo: THREE.Mesh;
    MrMmlCAsAxJpYqQ_0: THREE.Mesh;
    wqbHSzWaUxBCwxY_0: THREE.Mesh;
    QvGDcbDApaGssma: THREE.Mesh;
    vFwJFNASGvEHWhs: THREE.Mesh;
    evAxFwhaQUwXuua: THREE.Mesh;
    USxQiqZgxHbRvqB: THREE.Mesh;
    TvgBVmqNmSrFVfW: THREE.Mesh;
    GuYJryuYunhpphO: THREE.Mesh;
    pvdHknDTGDzVpwc: THREE.Mesh;
    CfghdUoyzvwzIum: THREE.Mesh;
    DjdhycfQYjKMDyn: THREE.Mesh;
    usFLmqcyrnltBUr: THREE.Mesh;
    xXDHkMplTIDAXLN: THREE.Mesh;
    vELORlCJixqPHs: THREE.Mesh;
    EbQGKrWAqhBHiMv: THREE.Mesh;
    EddVrWkqZTlvmci: THREE.Mesh;
    KSWlaxBcnPDpFCs: THREE.Mesh;
    TakBsdEjEytCAMK: THREE.Mesh;
    IykfmVvLplTsTEW: THREE.Mesh;
    wLfSXtbwRlBrwof: THREE.Mesh;
    WJwwVjsahIXbJpU: THREE.Mesh;
    vELORlCJixqPHsZ: THREE.Mesh;
    YfrJNXgMvGOAfzz: THREE.Mesh;
    DCLCbjzqejuvsqH: THREE.Mesh;
    CdalkzDVnwgdEhS: THREE.Mesh;
    NtjcIgolNGgYlCg: THREE.Mesh;
    pXBNoLiaMwsDHRF: THREE.Mesh;
    IkoiNqATMVoZFKD: THREE.Mesh;
    rqgRAGHOwnuBypi: THREE.Mesh;
    // Add more node names here...
  };
  materials: {
    hUlRcbieVuIiOXG: THREE.Material;
    PaletteMaterial001: THREE.Material;
    PaletteMaterial002: THREE.Material;
    dxCVrUCvYhjVxqy: THREE.Material;
    MHFGNLrDQbTNima: THREE.Material;
    kUhjpatHUvkBwfM: THREE.Material;
    RJoymvEsaIItifI: THREE.Material;
    KSIxMqttXxxmOYl: THREE.Material;
    mcPrzcBUcdqUybC: THREE.Material;
    pIhYLPqiSQOZTjn: THREE.Material;
    eShKpuMNVJTRrgg: THREE.Material;
    xdyiJLYTYRfJffH: THREE.Material;
    jpGaQNgTtEGkTfo: THREE.Material;
    ujsvqBWRMnqdwPx: THREE.Material;
    sxNzrmuTqVeaXdg: THREE.Material;
    pIJKfZsazmcpEiU: THREE.Material;
    zFdeDaGNRwzccye: THREE.Material;
    TBLSREBUyLMVtJa: THREE.Material;
    xNrofRCqOXXHVZt: THREE.Material;
    yQQySPTfbEJufve: THREE.Material;
    PaletteMaterial003: THREE.Material;
    PaletteMaterial004: THREE.Material;
    oZRkkORNzkufnGD: THREE.Material;
    yhcAXNGcJWCqtIS: THREE.Material;
    bCgzXjHOanGdTFV: THREE.Material;
    vhaEJjZoqGtyLdo: THREE.Material;
    jlzuBkUzuJqgiAK: THREE.Material;
    PpwUTnTFZJXxCoE: THREE.Material;
    yiDkEwDSyEhavuP: THREE.Material;
    hiVunnLeAHkwGEo: THREE.Material;
    HGhEhpqSBZRnjHC: THREE.Material;
  };
}

type ModelProps = JSX.IntrinsicElements['group']

function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF('/models/scene.glb') as unknown as GLTFResult;

  const texture = useTexture(props.item.img)

  useEffect(() => {
    Object.entries(materials).forEach(([key, material]) => {
      if (
        key !== "zFdeDaGNRwzccye" &&
        key !== "ujsvqBWRMnqdwPx" &&
        key !== "hUlRcbieVuIiOXG" &&
        key !== "jlzuBkUzuJqgiAK" &&
        key !== "xNrofRCqOXXHVZt"
      ) {
        // Check if the material has a color property
        if ('color' in material) {
          material.color = new THREE.Color(props.item.color[0]);
        }
      }
      material.needsUpdate = true;
    });
  }, [materials, props.item.color]);


 
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ttmRoLdJipiIOmf.geometry}
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjsDkGiopeiEJZK.geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buRWvyqhBBgcJFo.geometry}
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
        material={materials.dxCVrUCvYhjVxqy}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
        material={materials.MHFGNLrDQbTNima}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.QvGDcbDApaGssma.geometry}
        material={materials.kUhjpatHUvkBwfM}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vFwJFNASGvEHWhs.geometry}
        material={materials.RJoymvEsaIItifI}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.evAxFwhaQUwXuua.geometry}
        material={materials.KSIxMqttXxxmOYl}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.USxQiqZgxHbRvqB.geometry}
        material={materials.mcPrzcBUcdqUybC}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TvgBVmqNmSrFVfW.geometry}
        material={materials.pIhYLPqiSQOZTjn}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GuYJryuYunhpphO.geometry}
        material={materials.eShKpuMNVJTRrgg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pvdHknDTGDzVpwc.geometry}
        material={materials.xdyiJLYTYRfJffH}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CfghdUoyzvwzIum.geometry}
        material={materials.jpGaQNgTtEGkTfo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjdhycfQYjKMDyn.geometry}
        material={materials.ujsvqBWRMnqdwPx}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.usFLmqcyrnltBUr.geometry}
        material={materials.sxNzrmuTqVeaXdg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      >
        <meshStandardMaterial roughness={1} map={texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vELORlCJixqPHsZ.geometry}
        material={materials.zFdeDaGNRwzccye}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EbQGKrWAqhBHiMv.geometry}
        material={materials.TBLSREBUyLMVtJa}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EddVrWkqZTlvmci.geometry}
        material={materials.xNrofRCqOXXHVZt}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KSWlaxBcnPDpFCs.geometry}
        material={materials.yQQySPTfbEJufve}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TakBsdEjEytCAMK.geometry}
        material={materials.PaletteMaterial003}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IykfmVvLplTsTEW.geometry}
        material={materials.PaletteMaterial004}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wLfSXtbwRlBrwof.geometry}
        material={materials.oZRkkORNzkufnGD}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WJwwVjsahIXbJpU.geometry}
        material={materials.yhcAXNGcJWCqtIS}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.YfrJNXgMvGOAfzz.geometry}
        material={materials.bCgzXjHOanGdTFV}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DCLCbjzqejuvsqH.geometry}
        material={materials.vhaEJjZoqGtyLdo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CdalkzDVnwgdEhS.geometry}
        material={materials.jlzuBkUzuJqgiAK}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NtjcIgolNGgYlCg.geometry}
        material={materials.PpwUTnTFZJXxCoE}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pXBNoLiaMwsDHRF.geometry}
        material={materials.yiDkEwDSyEhavuP}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IkoiNqATMVoZFKD.geometry}
        material={materials.hiVunnLeAHkwGEo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rqgRAGHOwnuBypi.geometry}
        material={materials.HGhEhpqSBZRnjHC}
        scale={0.01}
      />
    </group>
  )
}

export default Model;

useGLTF.preload('/models/scene.glb')
